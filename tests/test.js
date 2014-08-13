/*globals describe, it, expect */
/*globals document, depre, $ */

describe('de-pre.js Tests', function () {

    'use strict';

    describe('Testing removal of whitespace.', function () {

        $.ajax({
            url: 'tests/fixtures/a-spaces.html',
            async: false,
            success: function (data) {

                $('body').html(data);

                depre('pre');

                it('Testing removal of spaces.', function () {

                    expect(document.querySelector('pre').innerText.match(/\s*\{/)[0]).toBe('{');

                });

            }

        });

        $.ajax({
            url: 'tests/fixtures/a-tabs.html',
            async: false,
            success: function (data) {

                $('body').html(data);

                depre('pre');

                it('Testing removal of tabs.', function () {

                    expect(document.querySelector('pre').innerText.match(/\s*\{/)[0]).toBe('{');

                });

            }

        });

        $.ajax({
            url: 'tests/fixtures/a-mixed.html',
            async: false,
            success: function (data) {

                $('body').html(data);

                depre('pre');

                it('Testing removal of mixed whitespace.', function () {

                    expect(document.querySelector('pre').innerText.match(/\s*\{/)[0]).toBe('{');

                });

            }

        });

    });

});
