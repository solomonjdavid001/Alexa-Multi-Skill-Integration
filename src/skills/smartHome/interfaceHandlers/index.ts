export const interfaceHandler = async (event, context) => {
  let { namespace } = event.directive.header;
  let interfaceNamespace = import(`./${namespace}`);

  console.log(`Routing to Interface Type: ${interfaceNamespace}`);
  (await interfaceNamespace).handleRequest(event, context);
};
