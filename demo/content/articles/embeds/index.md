---
title: "Embeds"
date: "2017-09-22"
slug: "embeds"
description: Use iframe or objects embeds.
keywords: iframe, object, embed, responsive
image: ./images/main.jpg
---

Include responsive iframe or object embeds in your markdown. For the embedded
item to be made responsive you must define its proportions, so you must supply
both width and height set to unitless or pixel values. If both values are not
supplied, the embed will not be made responsive.

#### YouTube

A standed YouTube embed:

```
&lt;iframe src="https://www.youtube.com/embed/v30Ml-9xsRQ" frameborder="0" allowfullscreen></iframe>
```

<iframe src="https://www.youtube.com/embed/v30Ml-9xsRQ" frameborder="0"
allowfullscreen></iframe>

A responisive YouTube embed:

```
&lt;iframe width="560" height="315" src="https://www.youtube.com/embed/v30Ml-9xsRQ" frameborder="0" allowfullscreen></iframe>
```

<iframe width="560" height="315" src="https://www.youtube.com/embed/v30Ml-9xsRQ" frameborder="0" allowfullscreen></iframe>

#### Vimeo

A standard Vimeo embed:

```
&lt;iframe src="https://player.vimeo.com/video/40686155?portrait=0" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
```

A responsive Vimeo embed:

```
<iframe src="https://player.vimeo.com/video/40686155?portrait=0" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
```

<iframe src="https://player.vimeo.com/video/40686155?portrait=0" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

#### Soundcloud

A Soundcloud embed (Soundcloud embed are already responsive):

```
&lt;iframe width="100%" height="300" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/188212367&amp;color=%23ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true&amp;visual=true"></iframe>
```

<iframe width="100%" height="300" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/188212367&amp;color=%23ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true&amp;visual=true"></iframe>
