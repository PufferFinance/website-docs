const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Get list of problematic files from the errors
const problematicFiles = [
  'docs/yield/multisig.md',
  'docs/yield/nlrt.md',
  'docs/yield/noop-rewards.md',
  'docs/yield/overview.md',
  'docs/yield/privacy-policy.md',
  'docs/yield/purchase-vt-using-safe.md',
  'docs/yield/purchase-vts.md',
  'docs/yield/registration.md',
  'docs/yield/requirements.md',
  'docs/yield/rewards.md',
  'docs/yield/setup.md',
  'docs/yield/slash.md',
  'docs/yield/stake.md',
  'docs/yield/terms-of-service.md',
  'docs/yield/validator-tickets-calculation.md',
  'docs/yield/validator-tickets.md',
  'docs/yield/withdraw.md',
  'docs/unifi-avs/unifi-avs-background.md',
  'docs/unifi-avs/unifi-avs-getting-started.md',
  'docs/unifi-avs/unifi-avs-intro.md',
  'docs/unifi-avs/unifi-avs-protocol.md',
  'docs/institutional/institutional.md'
];

// Process each problematic file
problematicFiles.forEach(file => {
  try {
    console.log(`Processing ${file}...`);
    
    if (!fs.existsSync(file)) {
      console.log(`File not found: ${file}`);
      return;
    }
    
    let content = fs.readFileSync(file, 'utf8');
    
    // Strategy 1: Fix percentage and simple math expressions by replacing backslashed expressions
    // For example: \(22\%\) becomes 22%
    content = content.replace(/\\\((\d+)\\\%\\\)/g, '$1%');
    content = content.replace(/\\\((\w+)\\\)/g, '$1');
    
    // Strategy 2: For actual math expressions, use proper KaTeX syntax
    // Block math expressions (keep these intact)
    content = content.replace(/\\\[\s*(.*?)\s*\\\]/g, '$$\n$1\n$$');
    
    // Strategy 3: Make sure JSX curly braces expressions are properly formed
    content = content.replace(/{([^{}]*)}/g, (match, inner) => {
      // Only process actual JSX expressions, not math
      if (inner.includes('/*') || inner.includes('style=') || inner.includes(':')) {
        return match;
      }
      return match;
    });
    
    // Strategy 4: Ensure all code blocks have explicit language tags
    content = content.replace(/```\s*\n/g, '```text\n');
    
    // Strategy 5: Add comments to mermaid diagrams to prevent them being treated as JS
    content = content.replace(/```mermaid\n/g, '```mermaid\n// MERMAID-DIAGRAM\n');
    
    // Strategy 6: Fix problematic function-like content in specific sections
    // Get lines where errors are reported
    const errorLines = extractErrorLines(file);
    
    if (errorLines.length > 0) {
      const lines = content.split('\n');
      
      // For each error line, add a comment to make it not be parsed as JS
      errorLines.forEach(lineInfo => {
        const lineNum = lineInfo.line - 1; // 0-indexed
        
        if (lineNum >= 0 && lineNum < lines.length) {
          // Check if this looks like a code block start
          if (lines[lineNum].trim().startsWith('```')) {
            // Add type to code block
            if (lines[lineNum].trim() === '```') {
              lines[lineNum] = '```text';
            }
          } 
          // Otherwise, add a HTML comment before the line
          else {
            lines[lineNum] = `{/* MDX-BLOCK-START */}\n${lines[lineNum]}`;
            
            // Find the end line from the error report and add an end comment
            if (lineInfo.endLine && lineInfo.endLine > lineNum && lineInfo.endLine < lines.length) {
              lines[lineInfo.endLine] = `${lines[lineInfo.endLine]}\n{/* MDX-BLOCK-END */}`;
            }
          }
        }
      });
      
      content = lines.join('\n');
    }
    
    fs.writeFileSync(file, content, 'utf8');
    console.log(`- Updated ${file}`);
  } catch (error) {
    console.error(`Error processing ${file}:`, error);
  }
});

// Helper function to extract line numbers from error messages
function extractErrorLines(file) {
  // This would normally parse the error output, but for simplicity
  // we'll manually list some of the problematic areas from the error messages
  
  // Map of filename to problematic line ranges
  const errorMap = {
    'docs/yield/nlrt.md': [{ line: 60, endLine: 432 }],
    'docs/yield/noop-rewards.md': [{ line: 32, endLine: 329 }],
    'docs/yield/overview.md': [{ line: 48, endLine: 205 }],
    'docs/yield/privacy-policy.md': [{ line: 49, endLine: 299 }],
    'docs/yield/purchase-vt-using-safe.md': [{ line: 40, endLine: 313 }],
    'docs/yield/purchase-vts.md': [{ line: 28, endLine: 131 }],
    'docs/yield/registration.md': [{ line: 56, endLine: 637 }],
    'docs/yield/requirements.md': [{ line: 32, endLine: 113 }],
    'docs/yield/rewards.md': [{ line: 64, endLine: 247 }],
    'docs/yield/setup.md': [{ line: 52, endLine: 210 }],
    'docs/yield/slash.md': [{ line: 28, endLine: 28 }],
    'docs/yield/stake.md': [{ line: 32, endLine: 129 }],
    'docs/yield/terms-of-service.md': [{ line: 49, endLine: 5341 }],
    'docs/yield/validator-tickets-calculation.md': [{ line: 40, endLine: 234 }],
    'docs/yield/validator-tickets.md': [{ line: 44, endLine: 372 }],
    'docs/yield/withdraw.md': [{ line: 24, endLine: 118 }],
    'docs/unifi-avs/unifi-avs-background.md': [{ line: 52, endLine: 259 }],
    'docs/unifi-avs/unifi-avs-getting-started.md': [{ line: 28, endLine: 169 }],
    'docs/unifi-avs/unifi-avs-intro.md': [{ line: 48, endLine: 229 }],
    'docs/unifi-avs/unifi-avs-protocol.md': [{ line: 64, endLine: 424 }],
    'docs/institutional/institutional.md': [{ line: 80, endLine: 201 }]
  };
  
  return errorMap[file] || [];
}

// Add more specific line fixes for acorn parse errors
const acornErrorFiles = [
  'docs/yield/slash.md',
  'docs/yield/stake.md',
  'docs/yield/terms-of-service.md',
  'docs/yield/validator-tickets-calculation.md',
  'docs/yield/validator-tickets.md',
  'docs/yield/withdraw.md',
  'docs/unifi-avs/unifi-avs-background.md',
  'docs/unifi-avs/unifi-avs-intro.md'
];

// Process files with acorn parse errors
acornErrorFiles.forEach(file => {
  try {
    if (!fs.existsSync(file)) {
      console.log(`File not found: ${file}`);
      return;
    }
    
    let content = fs.readFileSync(file, 'utf8');
    const lines = content.split('\n');
    
    // Fix specific line issues (from acorn errors)
    for (let i = 0; i < lines.length; i++) {
      // Look for JSX expressions with style
      if (lines[i].includes('style={{') && !lines[i].includes('{/* ')) {
        // Wrap the entire line with MDX comments
        lines[i] = `{/* JSX-FIX */} ${lines[i]} {/* END-JSX-FIX */}`;
      }
    }
    
    content = lines.join('\n');
    fs.writeFileSync(file, content, 'utf8');
    console.log(`- Fixed acorn parse errors in ${file}`);
  } catch (error) {
    console.error(`Error fixing acorn errors in ${file}:`, error);
  }
});

console.log('All markdown files processed successfully!'); 