"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tagger = require('wink-pos-tagger')();
var NLP = /** @class */ (function () {
    function NLP() {
        this.tagger = tagger;
    }
    NLP.prototype.tag = function (sentence) {
        return this.tagger.tagSentence(sentence);
    };
    return NLP;
}());
exports.default = NLP;
