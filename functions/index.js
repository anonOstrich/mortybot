const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//

const {WebhookClient} = require('dialogflow-fulfillment');



exports.helloWorld = functions.https.onRequest((request, response) => {
  response.send("Hello from Firebase!");
});


exports.dialogflowFirebaseFulfillment = functions.https.onRequest((request, response) => {
  const agent = new WebhookClient({ request, response });

  let response = ""
  switch(agent.intent){
    case 'roska':
      agent.addResponse_("Testiresponse")
    default: 
      agent.addResponse_("Hämmennysresponse")
      break;
  }
  });
