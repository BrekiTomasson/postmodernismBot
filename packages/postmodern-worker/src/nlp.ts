import natural = require('natural')
import { default as Tagger } from 'wink-pos-tagger'

const TfIdf = natural.TfIdf

interface tokenCallback {
  (error: Error | null, tokens: string[]): void
}

interface PosCallback {
  (error: Error | null, tokens: PosObject): void
}

export interface PosObject {
  value: string,
  tag: string,
  normal: string,
  pos: string,
  lemma: string | undefined
}

export class NLP {
  public tfidf: natural.TfIdf
  public tokenizer: natural.sentenceTokenizer
  public tagger: Tagger

  constructor() {
    this.tfidf = new TfIdf()
    this.tokenizer = new natural.SentenceTokenizer()
    this.tagger = new Tagger()
  }

  public parse(corpus: string, callback: tokenCallback) {
    let parsedCorpus = this.tokenizer.tokenize(corpus)
    callback(null, parsedCorpus)
  }

  public addDocument(document: string) {
    this.tfidf.addDocument(document)
  }

  public posTag(sentence: string, callback: PosCallback) {
    console.log(`Doing stuff with sentence: ${sentence}`)
    callback(null, this.tagger.tagSentence(sentence))
  }

}
