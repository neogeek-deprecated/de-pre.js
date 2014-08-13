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

        var indent = obj.previousSibling.nodeValue.match(/([ \t]*)$/);

        obj.innerText = obj.innerText.replace(new RegExp('(^|\n)' + indent[1], 'g'), '$1');

    });

}));
