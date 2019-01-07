import neo4j from 'neo4j-driver'
import { posWord } from './nlp';

export default class Database {
  driver: neo4j.Driver
  session: neo4j.Session;

  constructor () {
    this.driver = neo4j.driver('bolt://localhost:7687', neo4j.auth.basic('neo4j', 'trustno1'))
    this.session = this.driver.session()
  }

  add (object: posWord) {
      this.session.run('MERGE ({oValue}:{oPos} {normal:"{oNormal}", lemma:"{oLemma}" }) RETURN *', {
        oValue: object.value,
        oTag: object.tag,
        oNormal: object.normal,
        oPos: object.pos,
        oLemma: object.lemma ? object.lemma : null
      }).subscribe({
        onNext: (record: neo4j.Record) => {
        return record.get('word')
        }
      })
  }

  count (object: posWord) {
    this.session.run(
      'MATCH (word {' +
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
        onNext: (record: neo4j.Record) => {
        return record.get('count')
        }
      })
  }

  quit () {
    this.session.close(() => {
      return true
    })
  }


}
