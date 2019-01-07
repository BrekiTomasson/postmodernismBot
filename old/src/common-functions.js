const fs = require('fs')
const path = require('path')

module.exports = {
  getFileContents: file => {
    return fs.readFileSync(path.resolve(file), 'utf8')
  },
  getRandomInt: (min, max) => {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min)) + min
  }
}
