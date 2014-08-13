/*!
 * de-pre.js
 * https://github.com/neogeek/de-pre.js
 *
 * Copyright (c) 2014 Scott Doxey
 * Released under the MIT license.
 */

(function (root, factory) {

    'use strict';

    if (typeof define === 'function' && define.amd !== undefined) {

        define([], factory);

    } else {

        root.depre = factory;

    }

}(this, function (tag) {

    'use strict';

    Array.prototype.slice.call(document.querySelectorAll(tag)).forEach(function (obj) {

        var indent = obj.previousSibling.nodeValue.match(/([ \t]*)$/),
            contents = obj.innerText;

        contents = contents.replace(new RegExp('(^|\n)' + indent[1], 'g'), '$1');
        contents = contents.replace(/^\s+|\s+$/g, '');

        obj.innerText = contents;

    });

}));
