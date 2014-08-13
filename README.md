[![](https://api.travis-ci.org/neogeek/de-pre.js.svg)](https://travis-ci.org/neogeek/de-pre.js) [![](https://david-dm.org/neogeek/de-pre.js/dev-status.svg)](https://david-dm.org/neogeek/de-pre.js/#info=devDependencies)

#de-pre.js

> Removes excess indentation from the contents of pre tags, allowing proper indentation in HTML.

##Usage

```javascript
depre('pre');
```

Take for example the following `pre` tag nested inside a `div`:

```html
<div>
    <pre>
    {
        "name": "CanvasToVideo",
        "description": "An experiment in converting Canvas animations to video.",
        "main": "CanvasToVideo.js"
    }
    </pre>

</div>
```

The contents of the `pre` tag will render like this when viewed in a browser.

```
    {
        "name": "CanvasToVideo",
        "description": "An experiment in converting Canvas animations to video.",
        "main": "CanvasToVideo.js"
    }
```

With de-pre.js it will render like this:

```
{
    "name": "CanvasToVideo",
    "description": "An experiment in converting Canvas animations to video.",
    "main": "CanvasToVideo.js"
}
```
