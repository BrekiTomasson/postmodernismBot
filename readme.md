# postmodernismBot

[![NPM](https://nodei.co/npm/postmodernismBot.png)](https://nodei.co/npm/postmodernismBot/)

For as long as I can remember I've been fascinated with language. The ability that we have to string together twenty-six
characters together in various combinations, and then use that to create every single thought and idea known to man, now
and in any possible future. I just knew, when I started programming, that a lot of what I was going to be building would
be focused on language, in one way or another.

# `postmodernismBot`

## History

Enter `postmodernismBot`. Fairly early on, I made a Twitter bot using a large degree of copy-pasted Python code. It's no
work of art, but it was a fun little project. I fed him a bunch of research papers and thesis essays from various fields
in sociology, feminism and other liberal arts and had a Markov chain develop sentences that it would tweet at randomized
times - I think I set it to have a 1% chance of tweeting every minute using a Cron job. Something like that. The bot was
funny and sometimes insightful, offering up sentences like:

- "Lacan suggests the use of these rights, demonstrating links between rationalization and power."
- "I mean that sexuality is not in the spotlight."
- "Adventure Time as a series of weaknesses and inadmissible attachments that establish it as common as possible."
- "Studying the complex issues of political repression of sexuality in Western societies."
- "Its opposite pole can only be the action of other people."

They're not works of art, but they were clever at times, and I had a lot of fun tweaking the formulae which created them
and even picked up some Python along the way - but I wasn't happy. Tweets like "How can civil society, which the subject
of reason." were too common, and I got tired of him suggesting that: "Because sexuality in the cases of the new Left and
and who had died in illegal abortions, and to others." I knew I had to rebuild him, better than he was - in a language I
could master.

So a year later, when I was starting to feel comfortable with NodeJS, I decided it was about time to rebuild my bot. I'd
indulge myself, not hurry too much, and make sure to learn all I could about the language through the perspectives given
to me as I went down one path and then another. I'll tell you this - it was a journey.

## Present Day

In the current iteration, `postmodernismBot` is a NodeJS application made up of an intricate system of modules, all tied
together by a central script. If you read through the code, you'll find some fairly strange things, I'm sure. Most of it
can be explained by: "Oh, I wrote that during the week I was learning to make factories in Node" or "Oh, that thing made
sense when the software was doing this other thing, but doesn't any longer. I'll get around to refactoring it. Not soon,
though, I have these other things that I want to finish first."

There were even times when there were two different bots running from the same codebase at the same time, using slightly
different versions of the same set of code by being called from different execution scripts, just so that I could test a
version of an idea at the same time as I'm testing a version of another idea. It was a mess, I'll tell you that. But I'm
still quite happy with what we've got now, and I think the next few weeks and months should see this developing to be my
crown achievement.

Or not, as the case may be, when I see him posting tweets like "Even in this earthly world where she was but a mushy bog
of misery" and "It seems as if the number twenty-six were determined by the number of pigs he or she owns".

# Backlog, Checklist, Version History, Herp the Derp.

I have a hard time making a proper list of features that I can work on, since there are so many separate branches that I
want to explore. Instead of naming them outright, let me describe a couple of things the bot can do now and things I can
imagine it doing in the near future:

- [ ] Centralize the configuration in one place so that it is easier to make other versions.
- [x] Post to Twitter on irregular intervals.
- [ ] Reply to tweets and maintain some modicum of context.
- [x] Post to Telegram when somebody calls on it.
- [ ] To do so with some kind of understanding that the reply has to match the message.
- [ ] The ability to understand synonyms for words and more flexibly build its corpus.
- [ ] The ability to understand that certain words are exchangable with other words.
- [ ] Markov chaining on phrase level, not just individual word level.
- [ ] Machine learning on a sentence quality level in order to better judge newly generated sentences.
- [ ] A better understanding of permitted sentence structure.
- [ ] An understanding of time, so it doesn't mix past, present and future in the same sentence.
- [ ] An understanding of subject and object and the ability to refer back to them.
- [ ] Dockerize the entire thing.

You can tell that there's still a lot of work left to be done here, of course, and that most of it has to do with giving
the bot the ability to understand language better than it does at the moment.

# Usage

1. Clone the repo.
2. `npm install` to get the third party modules it requires.
3. Copy any amount of `.txt` files into the folder called `./corpus`
4. ???
5. Profit!

# Addendum

By the way - did you notice that every single line in this `README.md` file is exactly one hundred and twenty characters
long? That's how much I love language - I jump through complicated hoops just in order to make sure that it plays nicely
with whatever self-imposed restrictions and limitations that I set up for myself. It started as a little bit of a hobby,
but I've been enjoying this kind of thing so much lately that most of the `README` files that I create tend to fall into
that same pattern of either being exactly eighty or exactly one hundred and twenty characters wide. For no real purpose,
of course, other than my own personal amusement and the feeling of accomplishment when I manage to solve a problem or do
a task with an artificially imposed limitation of some sort.
