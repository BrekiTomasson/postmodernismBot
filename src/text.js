/* eslint camelcase: "off" */
const Text = require('markov-chains-text').default
const debug = require('debug')('postmodernismBot:textgen')
const CorpusConfig = require('./corpus.js')
const nlp = require('compromise')
const ucc = require('uppercamelcase')
const generator = new Text(CorpusConfig.corpus, CorpusConfig)

const defaultMaxLength = CorpusConfig.maxLength
const defaultMinLength = 20

function GenerateSentence() {
  return new Promise((resolve, reject) => {
    let sentence = ''

    debug('Generating new sentence.')
    sentence = nlp(generator.makeSentence())
    debug('Generated sentence: ' + sentence.trim().out('text'))

    if (longEnough(sentence) && notTooLong(sentence)) {
      resolve(sentence.trim().out('text'))
    } else {
      GenerateSentence()
    }
  })
}

function longEnough(variable) {
  return variable.trim().out('text').length >= defaultMinLength
}

function notTooLong(variable) {
  return variable.trim().out('text').length <= defaultMaxLength
}

function GenerateTweet() {
  debug('Generating tweet')
  GenerateSentence((sentence, err) => {
    const topics = nlp(sentence).topics().out('array')

    if (topics.length >= 1) {
      debug('Generating hashtags')

      topics.forEach(item => {
        sentence = (`${sentence} #${ucc(item).replace("'", '').replace(',', '')}`)
      })
    }

    if (sentence.length <= defaultMaxLength) return sentence
    debug('Sentence is too long. restarting')
    GenerateTweet()
  })
}

module.exports = {
  GenerateSentence: GenerateSentence,
  GenerateTweet: GenerateTweet
}
