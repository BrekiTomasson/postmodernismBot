const natural = require('natural')
const debug = require('debug')('postmodernismBot:classifier')
const fs = require('fs')
const brainfile = './brain/classifier.json'
let classifier = module.exports.classifier = new natural.BayesClassifier()

module.exports.add = (sentence, classification) => {
  debug(`Saving "${sentence}" as ${classification}.`)
  classifier.addDocument(sentence, classification)
  classifier.train()
}

module.exports.test = sentence => {
  return classifier.classify(sentence)
}

module.exports.train = () => {
  debug(`Braining the train!`)
  classifier.train()
}

module.exports.save = () => {
  fs.writeFileSync(brainfile, JSON.stringify(classifier))
  debug('Saved the current state of the classifier.')
}

module.exports.load = () => {
  debug(`Booting up the old brain!!`)
  classifier = natural.BayesClassifier.restore(JSON.parse(fs.readFileSync(brainfile)))
}
