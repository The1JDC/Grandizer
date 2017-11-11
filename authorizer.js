'use strict'

module.exports= (code) => {

console.log('Authorizer was called');
const clientID = process.env.SLACK_CLIENT_ID;
const clientSecret = process.env.SLACK_CLIENT_SECRET;

const OAuthURL='https://slack.com/api/oauth.access?' +
'client_id' + clientId + '&' +
'client_secret' + clientSecret + '&' +
'code' + code;

console.log(OAuthURL);
}
