import { MongoClient } from 'mongodb'

export class Mongo {

  public mongoCfg = {
    url: 'mongodb://root:password@mongo:27017',
    dbName: 'postmodernismBot',
    options: {
      user: 'root',
      password: 'password',
      useNewUrlParser: true,
    }
  }
  public db = new MongoClient(this.mongoCfg.url, this.mongoCfg.options)

  addTaggedSentence = (taggedSentence: any[]) => {
    this.db.connect((err, client) => {
      const db = client.db(this.mongoCfg.dbName)

      db.collection('sentences').insertMany(taggedSentence, (error, result) => {
        if (err) {
          console.log('=== ERROR =========================================')
          throw err
        } else {
          console.log('=== RESULT ========================================')
          console.log(result)
        }
      })
      client.close()
    })
  }

}
