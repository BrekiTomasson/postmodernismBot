import glob = require('glob')
import path = require('path')
import fs = require('fs')
import { NLP } from './nlp'
import { Mongo } from './mongo'
import { Neo4j } from './neo4j'

export class Worker {
  public fileList: string[]
  public nlp: NLP
  protected fileContent: string[] | undefined
  protected db: {
    mongo: Mongo;
    neo4j: Neo4j;
  }

  constructor() {
    this.fileList = glob.sync('../corpus/*.txt');
    this.nlp = new NLP
    this.db = {
      mongo: new Mongo,
      neo4j: new Neo4j
    }
  }

  public init(): any {
    this.fileList.forEach((filename: string) => {
      console.log('a')
      fs.readFile(path.resolve(filename), { encoding: 'UTF8' }, (err, fileContent) => {
        if (err) throw err
        console.log('b')
        this.nlp.parse(fileContent.replace(/\n|\n\r|\r/g, ' '), (err, sentences) => {
          if (err) throw err
          console.log('c')
          sentences.forEach((sentence: string) => {
            // this.nlp.addDocument(sentence)
            console.log('d')
            this.nlp.posTag(sentence, (err, taggedSentence) => {
              if (err) throw err
              console.log('e')
              this.db.mongo.addTaggedSentence(taggedSentence)
            })
          })
        })
      })
    })
  }

}


