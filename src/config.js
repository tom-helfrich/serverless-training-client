const config = {
  MAX_ATTACHMENT_SIZE: 5000000,

  s3: {
    REGION: 'us-east-2',
    BUCKET: 'notes-app-uploads-february-2021',
  },
  apiGateway: {
    REGION: 'us-east-2',
    URL: 'https://mglsk704h1.execute-api.us-east-2.amazonaws.com/prod',
  },
  cognito: {
    REGION: 'us-east-2',
    USER_POOL_ID: 'us-east-2_mDcCHnc8I',
    APP_CLIENT_ID: '4i2kpqidgd9ptqi9dg0cqvpj1s',
    IDENTITY_POOL_ID: 'us-east-2:d3c01f38-c114-4337-b558-6c59bfea4ee5',
  },
};

export default config;
