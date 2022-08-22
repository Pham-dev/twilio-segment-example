const Analytics = require('analytics-node');

async function identifyPerson(context, number) {
  const analytics = new Analytics('DDfPTPFkmiSgND2M0Qzf87IpinDJAI1Q', { flushAt: 1 });
  

  analytics.identify({
    userId: number,
    traits: {
      name: 'Michael Bolton',
      email: 'mbolton@example.com',
      phone: number
    }
  });

  analytics.track("Identified", {
    plan: "Pro Annual",
    accountType: "Facebook"
  });
  
  console.log("WORKED");
}

exports.handler = async function(context, event, callback) {
  
  console.log(context.SEGMENT_WRITE_KEY);
  const client = context.getTwilioClient();
  const response = new Twilio.Response();

  const { number } = event;

  await identifyPerson(context, number);
  console.log("hello sir");
  response.setStatusCode(200);
  response.setBody({success: "Hooray!"});
  return callback(null, response);
};
