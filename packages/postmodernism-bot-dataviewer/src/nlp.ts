const tagger = require('wink-pos-tagger')()

export interface posWord {
  value: string,
  tag: string,
  normal: string,
  pos: string,
  lemma: string | undefined
}

export default class NLP {
  tagger: any;

  constructor () {
    this.tagger = tagger
  }

  tag (sentence: string) : posWord {
    return this.tagger.tagSentence(sentence)
  }

}
