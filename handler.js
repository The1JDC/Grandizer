
'use strict';
//main handler

const authorizer = require('./authorizer');

module.exports.authorization = (event, context, callback) => {

  const code = event.queryStringParameters.code;
  console.log(code);
  authorizer(code);

  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Authorization was deployed',
      input: event,
    }),
  };

  callback(null, response);

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // callback(null, { message: 'Go Serverless v1.0! Your function executed successfully!', event });
};


module.exports.happyhour = (event, context, callback) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Happy hour time!',
      input: event,
    }),
  };

  callback(null, response);

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // callback(null, { message: 'Go Serverless v1.0! Your function executed successfully!', event });
};
