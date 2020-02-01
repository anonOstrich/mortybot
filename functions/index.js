const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//

const {WebhookClient} = require('dialogflow-fulfillment');





const movieDetails =  {
  titanic: {
    director: '',
    year: ''
  },
  twilight: {
    director: '',
    year: ''
  },
  toinen: {
    director: '',
    year: ''
  }
}


const handleDirector = (agent) => {
  const context = agent.getContext("movie-has-been-chosen")
  const movie =  ''// context.parameters.movie, or however the entity value can be fetched
  const year = movieDetails(movie).year
  agent.add(`The movie ${movie} was made in ${year}`)
}


const handleYear = (agent) => {

  const context = agent.getContext("movie-has-been-chosen")

  const movie =  ''// context.parameters.movie, or however the entity value can be fetched

  const director = movieDetails(movie).director
  agent.add(`The movie ${movie} was directed by ${director}`)
}


exports.dialogflowFirebaseFulfillment = functions.https.onRequest((request, response) => {
  const agent = new WebhookClient({ request, response });
  let intentMap = new Map();
  // ennen boilerplate

  intentMap.set('Director', handleDirector);
  intentMap.set('What year was it made?', handleYear)

  // jälkeen boilerplate
  agent.handleRequest(intentMap);
  });
