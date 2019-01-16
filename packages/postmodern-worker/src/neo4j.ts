import { default as neo4j } from 'neo4j-driver'
import { PosObject } from './nlp'

function makeInsertStatement(word: PosObject): string {
  if (word.tag === 'punctuation') word.pos = 'PUNC'
  let statement = word.lemma ? [
    `MERGE (word:${word.pos} { normal: "${word.normal}", tag: "${word.tag}",`,
    `lemma: "${word.lemma}", pos: "${word.pos}", value: "${word.value}" })`,
    `RETURN word.value as value`
  ] : [
      `MERGE (word:${word.pos} { normal: "${word.normal}", tag: "${word.tag}",`,
      `pos: "${word.pos}", value: "${word.value}" })`,
      `RETURN word.value as value`
    ]
  return statement.join(' ')
}


function makeRelationshipStatement(word: PosObject, previous: PosObject): string {
  if (word.tag === 'punctuation') word.pos = 'PUNC'
  if (previous.tag === 'punctuation') previous.pos = 'PUNC'

  let relationship = [
    `MATCH (a { pos: "${previous.pos}", value: "${previous.value}" })`,
    `MATCH (b { pos: "${word.pos}", value: "${word.value}" })`,
    `MERGE (a)-[r:${word.pos}]->(b)`,
    `RETURN a,r,b`
  ]
  return relationship.join(' ')
}

function reportError(err: Error) {
  console.log('=== ERROR =================================================')
  console.log('= The following error has occurred:                       =')
  console.log('===========================================================')
  console.log('')
  console.log(err)
  console.log('')
  process.exit(1)
}

export class Neo4j {
  driver: neo4j.Driver
  session: neo4j.Session

  constructor() {
    this.driver = neo4j.driver('bolt://neo4j:7687')
    this.session = this.driver.session();
  }

  insertWords(words: PosObject) {
    if (Object(words).length != 0) {

      for (let index = 0; index < Object(words).length; index++) {
        let element: PosObject = words[index];
        let session = this.driver.session();
        let statement = makeInsertStatement(element)
        let transaction = session.run(statement)
          .then(function (result) {
            result.records.forEach(function (record) {
              console.log(record.get('value'))
            })
          })
          .catch(function (err) {
            reportError(err)
          })

        console.log(transaction)

        if (index !== 0) {
          let previous: PosObject = words[index - 1]
          let relationshipStatement = makeRelationshipStatement(element, previous)

          this.session.run(relationshipStatement).subscribe({
            onNext: function (relation) {
              console.log(relation)
            },
            onCompleted: function (result) {
              console.log(result)
            },
            onError: function (err) {
              reportError(err)
            }
          })

          this.session.close()

        }
      }
    }
  }
}
