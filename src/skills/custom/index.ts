import { Skill, SkillBuilders } from 'ask-sdk-core';
import LaunchRequestHandler from './handlers/launch.handler';
import HelpIntentHandler from './handlers/intents/amazon/help.intent.handler';
import CancelAndStopIntentHandler from './handlers/intents/amazon/cancelAndStop.intent.handler';
import SessionEndedRequestHandler from './handlers/sessionEnded.handler';
import ErrorHandler from './handlers/error.handler';
import JokeIntentHandler from './handlers/intents/custom/joke.intent.handler';

let skill: Skill;

export const customSkillHandler = async (event, context) => {
  console.log(`REQUEST: ${JSON.stringify(event)}`);
  if (!skill) {
    skill = SkillBuilders.custom()
      .addRequestHandlers(
        LaunchRequestHandler,
        HelpIntentHandler,
        CancelAndStopIntentHandler,
        SessionEndedRequestHandler,
        JokeIntentHandler,
      )
      .addErrorHandlers(ErrorHandler)
      .create();
  }

  const response = await skill.invoke(event, context);
  console.log(`RESPONSE: ${JSON.stringify(response)}`);

  return response;
};
