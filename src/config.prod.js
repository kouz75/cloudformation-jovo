const https = require('https');

module.exports = {
  db: {
    DynamoDb: {
      tableName: 'poc-jovo-session',
      awsConfig: {
        region: 'eu-west-1',
        endpoint: 'https://dynamodb.eu-west-1.amazonaws.com',
        httpOptions: {
          agent: new https.Agent({keepAlive: true}),
        },
      },
    },
  },
};
