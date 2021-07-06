# Contributing to this repository

Please make all edits to `config.json`, then run the build script
```bash
npm run build
```
to automatically update `index.js`.

After your edits, you can test the configuration by linting index.js:
```bash
npm run test
```

The separate config.json allows us to
- write the config as JSON
- test the config on index.js

...while still exporting a CommonJS module for ESLint to load.
(ESLint apparently can't handle ES modules?? What does ES stand for again?)
