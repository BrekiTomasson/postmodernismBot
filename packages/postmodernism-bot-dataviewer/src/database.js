"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var neo4j_driver_1 = __importDefault(require("neo4j-driver"));
var Database = /** @class */ (function () {
    function Database() {
        this.driver = neo4j_driver_1.default.driver('bolt://localhost:7687', neo4j_driver_1.default.auth.basic('neo4j', 'trustno1'));
        this.session = this.driver.session();
    }
    Database.prototype.add = function (object) {
        this.session.run('MERGE ({oValue}:{oPos} { ' +
            'normal: "{ oNormal }",' +
            'lemma: "{ oLemma }",' +
            ' }) RETURN * AS word', {
            oValue: object.value,
            oTag: object.tag,
            oNormal: object.normal,
            oPos: object.pos,
            oLemma: object.lemma ? object.lemma : null
        }).subscribe({
            onNext: function (record) {
                return record.get('word');
            }
        });
    };
    Database.prototype.count = function (object) {
        this.session.run('MATCH (word {' +
            'value: "{oValue}",' +
            'tag: "{oTag}",' +
            'normal: "{oNormal}",' +
            'pos: "{oPos}"' +
            '}) RETURN COUNT(word) AS count', {
            'oValue': object.value,
            'oTag': object.tag,
            'oNormal': object.normal,
            'oPos': object.pos,
        })
            .subscribe({
            onNext: function (record) {
                return record.get('count');
            }
        });
    };
    Database.prototype.quit = function () {
        this.session.close(function () {
            return true;
        });
    };
    return Database;
}());
exports.default = Database;
