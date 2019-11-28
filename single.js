// The reader and writer of textual content.
const text = require('./src/text')

// The debugger needs to be there for our output.
const bugger = require('debug')

// And an instance of the debugger, too, why the heck not?
const debug = bugger('postmodernismBot:single')

// Enable the debugger
bugger.enable('postmodernismBot:*')

// Show me the money.
text.GenerateSentence()
