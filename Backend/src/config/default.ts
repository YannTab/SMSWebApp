export const config = new Map<string, any>([
  ['envMode', process.env.NODE_ENV],
  ['port', process.env.port || 8081]
]);
