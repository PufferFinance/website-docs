# Puffer Finance Documentation

This repository contains the documentation for Puffer Finance products.

## MDX Issues Resolution

We've implemented several fixes to resolve MDX compilation errors that occurred with Docusaurus 3.x:

1. **Configuration Changes**:
   - Updated `docusaurus.config.js` to use appropriate MDX options:
     - Set `format: 'detect'` to automatically detect the MDX format
     - Properly configured KaTeX for math rendering

2. **Markdown File Fixes**:
   - Simplified math expressions by removing unnecessary backslash escaping
   - Converted simple expressions like `\(22\%\)` to regular text `22%`
   - For complex math equations, used proper KaTeX syntax with `$$...$$`
   - Added comments to prevent JSX from being parsed as JavaScript
   - Ensured all code blocks have explicit language tags
   - Added MDX comments around problematic areas to prevent incorrect parsing

3. **Fix Script**:
   - Created a script (`scripts/fixMdx.js`) that automatically fixes these issues
   - The script targets specific line ranges that were causing errors
   - Handles acorn parse errors in JSX expressions

## Development

To work on this documentation:

1. Install dependencies:
   ```
   npm install
   ```

2. Start the development server:
   ```
   npm start
   ```

3. Build the static site:
   ```
   npm run build
   ```

## Math Rendering

The documentation uses KaTeX for rendering mathematical expressions. Use the following syntax:

- For simple percentage values, use regular Markdown: `22%` (not `\(22\%\)`)
- For emphasis, use standard Markdown: `**bold text**` (not math expressions)
- For complex math formulas, use KaTeX block notation: 
  ```
  $$
  \text{formula goes here}
  $$
  ```

## Troubleshooting

If you encounter MDX compilation errors:

1. Run the fix script:
   ```
   node scripts/fixMdx.js
   ```

2. Check the error messages for specific line numbers and file paths
3. If needed, manually add `{/* MDX-BLOCK-START */}` and `{/* MDX-BLOCK-END */}` comments around problematic content
4. Ensure all code blocks have language tags
5. For JSX expressions that cause acorn parse errors, wrap them with `{/* JSX-FIX */}` and `{/* END-JSX-FIX */}`
