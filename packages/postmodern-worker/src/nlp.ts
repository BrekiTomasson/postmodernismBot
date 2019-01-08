import winkNlpUtils from 'wink-nlp-utils';
import winkPosTagger from 'wink-pos-tagger';

const pos = winkPosTagger();

export interface PosWord {
  value: string;
  tag: string;
  normal: string;
  pos: string;
  lemma: string | undefined;
}

export class NLP {
  public corpus: Set<string> = new Set();
  public tokens: string[];

  constructor() {
    this.corpus = new Set();
    this.tokens = [];
  }

  public add(sentences: string) {
    winkNlpUtils.string.sentences(sentences.replace(/\n|\r\n|\r/g, ' '))
      .forEach((sentence: string) => {
        console.log('got one!');
        if (!this.corpus.has(sentence.trim())) {
          this.corpus.add(sentence.trim());
          console.log(this.tag(sentence.trim()));
        }
      });
  }

  public tag(sentence: string): PosWord {
    return pos.tagSentence(sentence);
  }

}
