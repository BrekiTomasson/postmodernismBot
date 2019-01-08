import { fs } from 'fs'
import { path } from 'path'

export class Func {
  constructor() {
  }

  public getFileContents(file: string): string {
    return fs.readFileSync(path.resolve(file), 'utf8');
  }

  public getRandomInt(smallest: number, largest: number): number {
    return Math.floor(
      Math.random() * (Math.floor(largest) - Math.ceil(smallest)) + Math.ceil(smallest)
    );
  }

}
