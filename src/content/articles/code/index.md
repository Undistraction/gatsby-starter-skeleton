---
title: "Code"
date: "2017-08-10"
slug: "code"
description: Sed nisi dolor, fringilla et consectetur eu, viverra vulputate felis. Ut est ex, ornare vitae dictum quis, egestas et est. Nam rhoncus purus eu justo feugiat, a venenatis enim ultricies. Mauris tristique elementum leo a viverra. Ut placerat, ex nec vestibulum iaculis, nibh ante sollicitudin elit, non aliquet nunc neque ac sapien. Aenean iaculis vulputate facilisis. Suspendisse elit purus, iaculis.
keywords: code, responsive
---
Embed code in your markdown and it will be styled using [Prism](http://prismjs.com/)

```javascript
 function makeIterator(array) {
    var nextIndex = 0;
    
    return {
       next: function() {
           return nextIndex < array.length ?
               {value: array[nextIndex++], done: false} :
               {done: true};
       }
    };
}
```
