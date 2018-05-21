---
title: "Code"
date: "2017-08-10"
slug: "code"
description: Sed nisi dolor, fringilla et consectetur eu, viverra vulputate felis. Ut est ex, ornare vitae dictum quis, egestas et est. Nam rhoncus purus eu justo feugiat, a venenatis enim ultricies. Mauris tristique elementum leo a viverra. Ut placerat, ex nec vestibulum iaculis, nibh ante sollicitudin elit, non aliquet nunc neque ac sapien. Aenean iaculis vulputate facilisis. Suspendisse elit purus, iaculis.
author: Pedr Browne
category: Markdown
keywords: code, responsive
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

Here is an example:

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
