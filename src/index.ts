import { customSkillHandler } from './skills/custom';

export const handler = async (event, context) => {
  console.log(`REQUEST: ${JSON.stringify(event)}`);

  if ('session' in event) {
    console.log('Routing to Custom Skill Handler');
    return await customSkillHandler(event, context);
  }
};
