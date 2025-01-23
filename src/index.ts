import { customSkillHandler } from './skills/custom';
import { smartHomeSkillHandler } from './skills/smartHome';

export const handler = async (event, context) => {
  console.log(`REQUEST: ${JSON.stringify(event)}`);

  if ('session' in event) {
    console.log('Routing to Custom Skill Handler');
    return await customSkillHandler(event, context);
  }

  if ('directive' in event) {
    console.log('Routing to Smart Home Skill Handler');
    const response = await smartHomeSkillHandler(event, context);
    return response;
  }
};
