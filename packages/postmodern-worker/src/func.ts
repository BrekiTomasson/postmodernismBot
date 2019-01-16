import fs = require('fs')
import path = require('path')

let [flo, cei, rnd] = [Math.floor, Math.ceil, Math.random]

interface Func {
  readfile(file: string)
  rand(smallest: number, largest: number): number
}

export const func: Func = {

  readfile: (file: string) => {
    return fs.createReadStream(path.resolve(file));
  },

  rand: (smallest: number, largest: number): number => {
    return flo(rnd() * (flo(largest) - cei(smallest)) + cei(smallest));
  }

}
