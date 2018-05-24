---
title: "Code"
date: "2017-08-10"
slug: "code"
description: Features for integrating code
author: Pedr Browne
category: Feature
keywords: markdown, code, responsive, repl
image: ./images/main.jpg
---

There are a number of useful features to help you display code within your
site's markdown content including syntax highlighting, the ability to embed code
from files and to open code in a REPL.

#### Basic Embedding

Any code you embed using markdown's backtick syntax will be styled with Code
will be styled using [Prism](http://prismjs.com/). If you follow the first three
backticks with a keyword for the language, the correct highlighting will be used
for that language, for example to embed JavaScript you would use the following:

````markdown
```javascript
const example = 1
```
````

A full list of supported languages can be found
[here](http://prismjs.com/#languages-list).

The current prism theme is imported in the project's `./src/layout.js` file.

#### External Files

Any files you include in your project's `src/content/code` directory can be
included with automatic syntax highlighting based on the file's extension using
the following syntax within the markdown (note the backticks):

```markdown
`embed:example.js`
```

`embed:example.js`

#### REPLs

There is also a special syntax for opening JavaScript code in a REPL of your
choice. By constructing a link using the filename of the repl as a prefix, a
link will be constructed that opens an external page to the REPL with the
contents of the file displayed.

* [Open In Babel REPL](babel://example)
* [Open In Codepen](codepen://example)
* [Open In Code Sandbox](codesandbox://example)
* [Open In Ramda](ramda://example)

In the following examples, a file called `example.js` found in
`src/content/code` will be opened in a the chosen REPL:

```markdown
* [Open In Babel REPL](babel://example)
* [Open In Codepen](codepen://example)
* [Open In Code Sandbox](codesandbox://example)
* [Open In Ramda](ramda://example)
```

#### Code Sandbox Embeds

You can also use [Code Sandbox](https://codesandbox.io/) to embed code in the page within their component, making the code interactive. 

The code must be in its own directory (within the `src/content/code` directory), and there must be a `package.json` that directory. You can declare any libraries used by your code there as you would with any `package.json`. 


You can pass options to configure how the component should look - it can just run display the code for example. By default it displays the full editor. For more information on this see the plugin's [README](https://github.com/elboman/gatsby-remark-embedded-codesandbox/blob/master/README.md).

[embedded example](embedded-codesandbox://example)

---

# Plugins Used

- [gatsby-remark-code-repls](https://www.gatsbyjs.org/packages/gatsby-remark-code-repls)
- [gatsby-remark-prismjs](https://www.gatsbyjs.org/packages/gatsby-remark-prismjs)
- [gatsby-remark-embed-snippet](https://www.gatsbyjs.org/packages/gatsby-remark-embed-snippet)
- [gatsby-remark-embedded-codesandbox](https://www.gatsbyjs.org/packages/gatsby-remark-embedded-codesandbox)