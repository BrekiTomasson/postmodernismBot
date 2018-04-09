/* eslint camelcase: "off" */
const Text = require('markov-chains-text').default
const debug = require('debug')('postmodernismBot:textgen')
const CorpusConfig = require('./corpus.js')
const nlp = require('compromise')
const ucc = require('uppercamelcase')
const generator = new Text(CorpusConfig.corpus, CorpusConfig)

const defaultMaxLength = 280
const defaultMinLength = 20

function GenerateSentence (maxLength = defaultMaxLength) {
  let loop = true
  let sentence = ''

  while (loop === true) {
    debug('looping...')
    sentence = nlp(generator.makeSentence())
    if (sentence.trim()
      .out('text').length >= defaultMinLength && sentence.trim()
        .out('text').length <= maxLength) loop = false
    else {
      debug('disqualifying sentence:', sentence.trim()
        .out('text'))
    }
  }

  return sentence.trim()
    .out('text')
}

function GenerateTweet (maxLength = defaultMaxLength) {
  debug('Generating tweet')
  let sentence = GenerateSentence(maxLength)
  const topics = nlp(sentence)
    .topics()
    .out('array')

  if (topics.length >= 1) {
    debug('Generating hashtags')

    topics.forEach(item => {
      sentence = (`${sentence} #${ucc(item)
        .replace("'", '')
        .replace(',', '')}`)
    })
  }

  if (sentence.length <= maxLength) return sentence
  debug('sentence too long. restarting')
  GenerateTweet()
}

module.exports = {
  GenerateSentence: GenerateSentence,
  GenerateTweet: GenerateTweet
}
