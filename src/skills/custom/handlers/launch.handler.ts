import { HandlerInput, RequestHandler } from 'ask-sdk-core';
import { Response } from 'ask-sdk-model';

export const LaunchRequestHandler: RequestHandler = {
  canHandle(handlerInput: HandlerInput): boolean {
    const request = handlerInput.requestEnvelope.request;
    return request.type === 'LaunchRequest';
  },

  handle(handlerInput: HandlerInput): Response {
    const speechText = 'Welcome to Jokes Skill';
    return handlerInput.responseBuilder
      .speak(speechText)
      .reprompt(speechText)
      .withSimpleCard('Joke Skill', speechText)
      .getResponse();
  },
};

export default LaunchRequestHandler;
