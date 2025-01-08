import { handleDiscovery } from './core/handleDiscovery';
import { handleAuthorization } from './core/handleAuthorization';
import { interfaceHandler } from './interfaceHandlers';

export const smartHomeSkillHandler = async (event, context) => {
  console.log(`Invoked directives for Smart Home Skill`);

  let { namespace, name } = event?.directive?.header;

  if (namespace === 'Alexa.Discovery' && name === 'Discover') {
    console.log('Discovery Request');
    await handleDiscovery(event, context);
    console.log('Successfuly executed Discovery Request');
  } else if (namespace === 'Alexa.Authorization' && name === 'AcceptGrant') {
    console.log('Authorization Request');
    await handleAuthorization(event, context);
    console.log('Successfuly executed Authorization Request');
  } else {
    console.log('Device Control Request');
    await interfaceHandler(event, context);
    console.log('Successfuly executed Device Control Request');
  }
};
