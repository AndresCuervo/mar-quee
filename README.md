# `<mar-quee>`

This is a [web component](https://developer.mozilla.org/en-US/docs/Web/Web_Components) recreating the obsolete [`<marquee>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/marquee) element.

The point of a web component is that you can use it just like you would any other HTML tag.
For instance is you've included `<mar-quee>` in your page already then the following HTML:

```html
<mar-quee>marquee one</mar-quee>
<mar-quee>marquee one</mar-quee>
<mar-quee>marquee twoooooooooo</mar-quee>
```

will look like this:

![marquee example GIF with three lines of text: "marque one", "marquee twoooooooooo", and "long boiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii"](https://cdn.glitch.com/628e1b12-c113-4c51-9428-4dc73627d104%2Fmar-quee-screen-recording.gif?v=1570939861370)


# Usage

Just include `<script src="mar-quee.js"></script>` **at the bottom of your &lt;body&gt;>** & you're good to go!

# Customizing the element & animation

Customization is available via [CSS custom properties](https://developer.mozilla.org/en-US/docs/Web/CSS/--*):

| property | default value |
-----------|----------------
| `--marquee-height` | `25px` |
| `--marquee-width` | `100px` |
| `--marquee-animation-timing-function:` | `linear` |
| `--marquee-animation-duration` | `3s` |
| `--marquee-animation-iteration-count` | `infinite` |

---

Heavily inspired by [`<bg-sound>`](https://github.com/feross/bg-sound)
