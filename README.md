# eslint-config-globeletjs

A basic [ESLint](https://eslint.org) configuration for GlobeletJS modules

## Installation

To use this configuration in your module, run:
```bash
npm install --save-dev eslint eslint-config-globeletjs
```

Then add the following in an `.eslintrc.json` in the project's root directory:
```json
{
  "extends": "globeletjs"
}
```

Finally, add a linting script to your `package.json` file:
```json
"scripts": {
  "lint": "eslint src examples/*/*.js",
  "pretest": "npm run lint"
}
```

## Usage

To see which of your code is inconsistent with the GlobeletJS coding style,
you can run
```bash
npm run lint
```

If you are brave, you can automatically fix errors in a given file as follows:
```bash
npx eslint --fix file.js
```
