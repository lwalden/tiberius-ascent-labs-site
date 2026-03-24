import { chromium } from 'playwright';
import AxeBuilder from '@axe-core/playwright';
import { fileURLToPath } from 'url';
import { resolve } from 'path';

const filePath = resolve('index.html');
const fileUrl = `file:///${filePath.replace(/\\/g, '/')}`;

const browser = await chromium.launch();
const context = await browser.newContext();
const page = await context.newPage();
await page.goto(fileUrl);

const results = await new AxeBuilder({ page }).analyze();

if (results.violations.length === 0) {
  console.log('✓ Zero accessibility violations found.');
} else {
  console.log(`${results.violations.length} violation(s) found:\n`);
  for (const v of results.violations) {
    console.log(`  [${v.impact}] ${v.id}: ${v.help}`);
    for (const node of v.nodes) {
      console.log(`    - ${node.target.join(', ')}`);
    }
  }
}

console.log(`\nPasses: ${results.passes.length}, Violations: ${results.violations.length}, Incomplete: ${results.incomplete.length}`);

await browser.close();
process.exit(results.violations.length > 0 ? 1 : 0);
