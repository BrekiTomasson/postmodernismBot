import debug from 'debug'
import { Glob } from 'glob'
import { Func } from './func'
import { NLP } from './nlp'
const path = require('path')

const nlp = new NLP;

export class Worker {
  public corpus: any[];
  public fileList: string[];

  constructor() {
    this.corpus = [];
    this.fileList = Glob.sync('./corpus/*.txt');
  }

  public init(): any {
    this.processFiles(this.fileList);
  }

  public processFiles(files: string[]) {
    files.forEach((filename: string) => {
      this.processFile(filename);
    });
  }

  public processFile(file: string) {
    debug(`### Loading: ${file}`);
    this.processString(Func.getFileContents(path.resolve(file)));
  }

  public processString(string: string) {
    nlp.add(string);
  }
}
