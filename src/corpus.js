const path = require('path')
const debug = require('debug')('postmodernismBot:corpusLoader')
const fileList = require('glob')
  .sync('./corpus/*.txt')
const func = require('../src/common-functions.js')
const Lexer = require('lexed').Lexed

const CorpusContent = fileList.map(filename => {
  filename = path.resolve(filename)
  debug('Loading %s', filename, '...')
  const content = new Lexer(func.getFileContents(filename))
.sentenceLevel()

  return content.join(' ')
})

module.exports = {
  corpus: CorpusContent.join(' ')
    .replace(/(\r\n|\n|\r)/gm, ' '),
  maxIterations: 999999999,
  maxLength: 280,
  maxOverlapRatio: 0.5,
  maxOverlapTotal: 0,
  stateSize: 4,
  tries: 999999999
}

module.exports.corpuscontent = CorpusContent
