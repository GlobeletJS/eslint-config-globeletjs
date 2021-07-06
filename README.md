# eslint-config-globeletjs

A basic [ESLint](https://eslint.org) configuration for GlobeletJS modules

![tests](https://github.com/GlobeletJS/eslint-config-globeletjs/actions/workflows/node.js.yml/badge.svg)

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

## Why double quotes?
Many popular standards, including the [AirBnB][], [Google][], and [Standard][]
style guides, require single quotes for strings.

GlobeletJS uses double quotes, except where single quotes can help avoid the
need to escape a double quote within the string. There are 2 main reasons for
this:
1. Many strings in the GlobeletJS codebase appear in JSON-like object syntax.
  For example, [tile-stencil's defaults.js][defaults], and the index.js of
  this module, eslint-config-globeletjs. [JSON uses double quotes][JSON].
2. Another common use of strings is for error messages. These should look like
  the program is talking to the user. And double quotes for speech are,
  overall, [what most people expect][wiki].

One reason given for single quotes is that it allows HTML strings to be
written without escapes. (The values of [HTML attributes][] are typically 
enclosed in double quotes.) We don't accept this argument, for two reasons:
- In GlobeletJS code, we like to write HTML as HTML, and use JavaScript for
  Javascript. If there are long strings of HTML in our JavaScript, perhaps
  we should be re-considering the overall design of the module
- Our rule *does* allow single quotes, if there are double quotes within
  the string that would otherwise need to be escaped

[AirBnB]: https://github.com/airbnb/javascript
[Google]: https://github.com/google/eslint-config-google
[Standard]: https://standardjs.com/
[defaults]: https://github.com/GlobeletJS/tile-stencil/blob/main/src/defaults.js
[JSON]: https://www.json.org/
[wiki]: https://en.wikipedia.org/wiki/Quotation_mark
[HTML attributes]: https://www.w3schools.com/html/html_attributes.asp
