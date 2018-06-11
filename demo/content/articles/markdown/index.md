---
title: "Markdown"
date: "2018-05-31"
slug: "markdown"
description: Supported Markdown Tags.
category: Markdown
keywords: markdown, frontmatter
author: Pedr Browne
image: ./images/main.jpg
---

Both Pages, Articles and Projects support an extended superset of Markdown via [Github Flavoured Markdown](https://github.github.com/gfm/#what-is-github-flavored-markdown-). Markdown documents support frontmatter for defining data associated with the markdown document.

You'll find an outline of the supported markdown elements below, or for more in depth information see Remark's own outline [here](https://github.com/remarkjs/remark/blob/master/test/fixtures/input/markdown-documentation-syntax.text).

# Headings

Heading are translated to the appropriate h tags, meaning that even though the
page title is rendered outside the markdown, you don't have to skp using primary
headings.

```markdown
# Primary

## Secondary

### Tertiary
```

# Primary

## Secondary

### Tertiary

# Paragraphs

```markdown
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sagittis metus
eget sapien fermentum, sit amet maximus diam auctor. Suspendisse a dignissim
tortor. Suspendisse vulputate risus purus, eget maximus diam maximus at. Sed
sollicitudin nec est in congue. Quisque quam nulla, fringilla sed volutpat sed,
fringilla non sapien. Sed tincidunt, turpis eget commodo pretium, nulla ligula
faucibus dui, sed tempus urna arcu eget nibh. Nunc et placerat turpis, placerat
lobortis metus. Aliquam eu tincidunt orci, nec placerat nulla. Sed facilisis et
dolor vitae efficitur. Pellentesque varius justo feugiat auctor varius. Quisque
et diam urna. Vivamus dapibus diam et magna rhoncus bibendum.
```

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sagittis metus
eget sapien fermentum, sit amet maximus diam auctor. Suspendisse a dignissim
tortor. Suspendisse vulputate risus purus, eget maximus diam maximus at. Sed
sollicitudin nec est in congue. Quisque quam nulla, fringilla sed volutpat sed,
fringilla non sapien. Sed tincidunt, turpis eget commodo pretium, nulla ligula
faucibus dui, sed tempus urna arcu eget nibh. Nunc et placerat turpis, placerat
lobortis metus. Aliquam eu tincidunt orci, nec placerat nulla. Sed facilisis et
dolor vitae efficitur. Pellentesque varius justo feugiat auctor varius. Quisque
et diam urna. Vivamus dapibus diam et magna rhoncus bibendum.

# Weight / Styles

```markdown
_Italic_, **Bold**, **_Bold italic_**
```

_Italic_, **Bold**, **_Bold italic_**

# Typographic embellishments

There are a number of additional typographic embellishments that will happen automatically.

## Quotes

Single and double quotes will be replaced by printers quotes:

```markdown
"Double" and 'Single'
```

"Double" and 'Single'

## Ellipses

If you type three dots, they will be replaced by the ellipsis character:

```markdown
And then...
```

And then...

## Dashes

The type of dash can be controlled by the number of dashes used:

### En Dash (Two dashes)

```markdown
5--10
```

5--10

### Em Dash (Three dashes)

```markdown
5---10
```

5---10


## Strikethrough

Wrapping text in two tilde (~) characters will strike it through:

```markdown
~~Example~~
```

~~Example~~

# Links

```markdown
[imperdiet](http://example.com)
```

[imperdiet](http://example.com)

# Lists

## Unordered

```markdown
* Mauris tristique elementum leo a viverra. Ut placerat, ex nec vestibulum
  iaculis. Erat graecis mei ex
* His id dolorem indoctum facilisis
* In per deseruisse appellantur
```

* Mauris tristique elementum leo a viverra. Ut placerat, ex nec vestibulum
  iaculis. Erat graecis mei ex
* His id dolorem indoctum facilisis
* In per deseruisse appellantur

## Ordered

```markdown
1. Mauris tristique elementum leo a viverra. Ut placerat, ex nec vestibulum
  iaculis. Erat graecis mei ex
2. His id dolorem indoctum facilisis
3. In per deseruisse appellantur
```

1. Mauris tristique elementum leo a viverra. Ut placerat, ex nec vestibulum
  iaculis. Erat graecis mei ex
2. His id dolorem indoctum facilisis
3. In per deseruisse appellantur

## Blockquote

```markdown
> Vix porro noster ei, no usu facilis elaboraret. No debitis pertinacia pro,
> nisl delenit pertinacia ad vis, in soluta dissentiet usu. Mundi iuvaret
> inermis vim at, an graeco feugait contentiones mea, nec porro minimum
> reformidans ut. Consul argumentum instructior et mei.

<cite>Quisque Quam Nulla</cite>
```

> Vix porro noster ei, no usu facilis elaboraret. No debitis pertinacia pro,
> nisl delenit pertinacia ad vis, in soluta dissentiet usu. Mundi iuvaret
> inermis vim at, an graeco feugait contentiones mea, nec porro minimum
> reformidans ut. Consul argumentum instructior et mei.

<cite>Quisque Quam Nulla</cite>

## Horizontal Rule

```markdown
---
```

---

##

# Code

## Blocks

````markdown
```javascript
  const x = 1;
```
````

```javascript
  const x = 1;
```

## Inline

```markdown
Lorem `ipsum` dolor sit amet
```

Lorem `ipsum` dolor sit amet

# Tables

Although tables are not supported in basic Markdown, they are here using the GFM Markdown syntax. This can be fidly, but you'll find a handy table generator [here](https://www.tablesgenerator.com/markdown_tables)

```markdown
| Column 1      | Column 2      | Column 3 |
| ------------- |-------------- | -------- |
| Alpha         | 1             | A        |
| Bravo         | 2             | B        |
| Charlie       | 3             | C        |
```

| Column 1      | Column 2      | Column 3 |
| ------------- |-------------- | -------- |
| Alpha         | 1             | A        |
| Bravo         | 2             | B        |
| Charlie       | 3             | C        |

# Footnotes

Add footnote references:

```markdown
Civibus efficiendi[^1] complectitur his at. Est stet[^2] aeque voluptaria eu, eum scaevola.

[^1]: First footnote is here
[^2]: And the second is here
```

Civibus efficiendi[^1] complectitur his at. Est stet[^2] aeque voluptaria eu, eum scaevola.

[^1]: First footnote is here
[^2]: And the second is here


---

# Plugins Used

- [gatsby-remark-smartypants](https://www.gatsbyjs.org/packages/gatsby-remark-smartypants)