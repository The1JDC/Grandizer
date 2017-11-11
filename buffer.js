
VERIFICATION_TOKEN = "2Q0h4Xh9z0ZALSBHA2OI4MXd";
ACCESS_TOKEN = "xoxp-261600932966-260716082290-270298047873-742aef838372533d34b88ab79a1da598";

function verify(data, callback)
{
    //console.log("verify in");

    if (data.token === VERIFICATION_TOKEN) callback(null, data.challenge);
    else callback("verification failed");
}
module.exports.processevents = (event, context, callback) => {

    console.log("handler in");
     switch (event.type) {
         case "url_verification": verify(event, callback); break;
         case "event_callback": //process(data.event, callback);
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
         break;
         default: break;
       }


  callback(null, response);

};
