/*!
 * de-pre.js
 * https://github.com/neogeek/de-pre.js
 *
 * Copyright (c) 2016 Scott Doxey
 * Released under the MIT license.
 */

(function (root, factory) {

    'use strict';

    if (typeof define === 'function' && define.amd) {

        define([], factory);

    } else if (typeof module === 'object' && module.exports) {

        module.exports = factory();

    } else {

        root.returnExports = factory();

    }

}(this, function () {

    'use strict';

    return function (tag) {

        Array.prototype.slice.call(document.querySelectorAll(tag || 'pre')).forEach(function (obj) {

            var indent = obj.previousSibling.nodeValue.match(/([ \t]*)$/),
                contents = obj.textContent;

            contents = contents.replace(new RegExp('(^|\n)' + indent[1], 'g'), '$1');
            contents = contents.replace(/^\s+|\s+$/g, '');

            obj.textContent = contents;

        });

    };

}));
