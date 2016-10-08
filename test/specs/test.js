const fs = require('fs');

const assert = require('assert');

const depre = require('../../de-pre.js');

describe('de-pre.js', function () {

    it('Testing removal of spaces.', function (done) {

        fs.readFile('test/fixtures/a-spaces.html', 'utf8', function (err, data) {

            document.body.innerHTML = data;

            depre('pre');

            assert.equal(document.querySelector('pre').textContent.match(/\s*\{/)[0], '{');

            done();

        });

    });

    it('Testing removal of spaces without specifying tag.', function (done) {

        fs.readFile('test/fixtures/a-spaces.html', 'utf8', function (err, data) {

            document.body.innerHTML = data;

            depre();

            assert.equal(document.querySelector('pre').textContent.match(/\s*\{/)[0], '{');

            done();

        });

    });

    it('Testing removal of tabs.', function (done) {

        fs.readFile('test/fixtures/a-tabs.html', 'utf8', function (err, data) {

            document.body.innerHTML = data;

            depre('pre');

            assert.equal(document.querySelector('pre').textContent.match(/\s*\{/)[0], '{');

            done();

        });

    });

    it('Testing removal of mixed whitespace.', function (done) {

        fs.readFile('test/fixtures/a-mixed.html', 'utf8', function (err, data) {

            document.body.innerHTML = data;

            depre('pre');

            assert.equal(document.querySelector('pre').textContent.match(/\s*\{/)[0], '{');

            done();

        });

    });

});
