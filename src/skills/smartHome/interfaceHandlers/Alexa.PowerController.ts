export const handleRequest = async (event, context) => {
  console.log(`Alexa Power Controller`);

  // get device ID passed in during discovery
  const requestMethod = event.directive.header.name;
  const responseHeader = event.directive.header;
  responseHeader.namespace = 'Alexa';
  responseHeader.name = 'Response';
  responseHeader.messageId = responseHeader.messageId + '-R';

  // get user token pass in request
  let requestToken = event.directive.endpoint.scope.token;
  let powerResult: string;

  if (requestMethod === 'TurnOn') {
    // Make the call to your device cloud for control
    // powerResult = stubControlFunctionToYourCloud(endpointId, token, request);
    powerResult = 'ON';
  } else if (requestMethod === 'TurnOff') {
    // Make the call to your device cloud for control and check for success
    // powerResult = stubControlFunctionToYourCloud(endpointId, token, request);
    powerResult = 'OFF';
  }
  // Return the updated powerState.  Always include EndpointHealth in your Alexa.Response
  // Datetime format for timeOfSample is ISO 8601, `YYYY-MM-DDThh:mm:ssZ`.
  let contextResult = {
    properties: [
      {
        namespace: 'Alexa.PowerController',
        name: 'powerState',
        value: powerResult,
        timeOfSample: '2022-09-03T16:20:50.52Z', //retrieve from result.
        uncertaintyInMilliseconds: 50,
      },
      {
        namespace: 'Alexa.EndpointHealth',
        name: 'connectivity',
        value: {
          value: 'OK',
        },
        timeOfSample: '2022-09-03T22:43:17.877738+00:00',
        uncertaintyInMilliseconds: 0,
      },
    ],
  };
  let response = {
    context: contextResult,
    event: {
      header: responseHeader,
      endpoint: {
        scope: {
          type: 'BearerToken',
          token: requestToken,
        },
        endpointId: 'sample-bulb-01',
      },
      payload: {},
    },
  };
  console.log('DEBUG | Alexa.PowerController ', JSON.stringify(response));
  context.succeed(response);
};
