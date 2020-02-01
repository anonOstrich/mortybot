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
  twilight: "Kuka lie"
}

exports.helloWorld = functions.https.onRequest((request, response) => {
  response.send("Hello from Firebase!");
});


const welcome = (agent)  => {
  agent.add(`Test webhook!`);
}

const handleDirector = (agent) => {
  const year = 
}





exports.dialogflowFirebaseFulfillment = functions.https.onRequest((request, response) => {
  const agent = new WebhookClient({ request, response });
  let intentMap = new Map();
  // ennen boilerplate
  intentMap.set('Roska', welcome);
  intentMap.set('Director', handleDirector);
  intentMap.set('What year was it made?', handleYear)
  
  // jälkeen boilerplate
  agent.handleRequest(intentMap);
  });
