const config = {
    s3: {
      REGION: "us-east-1",
      BUCKET: "notes-api-bernabei",
    },
    apiGateway: {
      REGION: "us-east-1",
      URL: "https://cyqkr5ey03.execute-api.us-east-1.amazonaws.com/prod",
    },
    cognito: {
      REGION: "us-east-1",
      USER_POOL_ID: "us-east-1_qn727189P",
      APP_CLIENT_ID: "79lb5tu13dcp8u3orgkrff4t51",
      IDENTITY_POOL_ID: "us-east-1:62a9922a-0dee-4212-8f46-d3ba59a30efa",
    },
  };
  
  export default config;