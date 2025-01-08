export const handleAuthorization = async (event, context) => {
  const payload = {};
  const header = event.request.header;
  header.name = 'AcceptGrant.Response';
  console.log(`AcceptGrant Response: ${JSON.stringify({ header, payload })}`);
  context.succeed({ event: { header, payload } });
};
