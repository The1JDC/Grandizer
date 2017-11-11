'use strict';

const authorizer = require('./authorizer');
//const interactive = require('./interactive');
//const processevents = require('./processevents');
const messagebuilder = require('./messagebuilder'); //internal








module.exports.authorization = (event, context, callback) => {
  const code = event.queryStringParameters.code;
  console.log(code);



  authorizer(code)
  .then(() => {

    // todo write a proper welcome message on successful Authorization
    // similar to the one on https://www.youtube.com/watch?v=9RZ5TjBPtR8
    // or https://api.slack.com/tutorials/intro-to-message-buttons

    const response = {
      statusCode: 200,
      body: JSON.stringify({
        message: 'Authorization was called',
        input: event,
      }),
    };

    callback(null, response);
  })
  .catch((error) => {
    console.log('ERRRORORR');

    const response = {
      statusCode: 500,
      body: JSON.stringify({
        message: error,
        input: event,
      }),
    };

    callback(null, response);
  });
};

module.exports.interactive = (event, context, callback) => {

console.log(JSON.stringify(event));
  const response = {

    // todo process event
    // retun a properly formatted message
    statusCode: 200,
    body: JSON.stringify({
      message: 'response to event!!',
      input: event,
      }),

  };

  callback(null, response);

};

module.exports.happyhour = (event, context, callback) => {


  var message = messagebuilder();
  const response = {

    // todo process event
    // retun a properly formatted message
    statusCode: 200,
    body: JSON.stringify(message),
    /*body: JSON.stringify({
      message: 'Happy hour time!',
      input: event,
      }),
      */
  };

  callback(null, response);

};
