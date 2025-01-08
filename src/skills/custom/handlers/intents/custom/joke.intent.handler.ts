import { HandlerInput, RequestHandler } from 'ask-sdk-core';
import { Response } from 'ask-sdk-model';

import axios from 'axios';
import { config } from '@config/config';

const JokeIntentHandler: RequestHandler = {
  canHandle(handlerInput: HandlerInput): boolean {
    const request = handlerInput.requestEnvelope.request;
    return request.type === 'IntentRequest' && request.intent.name === 'JokeIntent';
  },

  async handle(handlerInput: HandlerInput): Promise<Response> {
    const speechText = await getJoke();
    return handlerInput.responseBuilder.speak(speechText).withSimpleCard('Joke Skill', speechText).getResponse();
  },
};

const getJoke = async (): Promise<string> => {
  const response = await axios.get(config.jokeApiUrl);
  if (response.data.joke) return response.data.joke;

  const { setup, delivery } = response.data;
  return `${setup}\n${delivery}`;
};

export default JokeIntentHandler;
