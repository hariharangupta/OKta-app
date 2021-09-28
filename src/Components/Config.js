const oktaAuthConfig = {
    issuer:"https://dev-30313942.okta.com/oauth2/default",
    clientId:"0oa1sv7crxyRylWSI5d7",
    redirectUri:"http://localhost:3000",
    scopes: ['openid', 'profile', 'email'],
    pkce: true,
    
}


const oktaSignInConfig = {
    baseUrl: 'https://dev-30313942.okta.com',
    clientId:"0oa1sv7crxyRylWSI5d7",
    redirectUri: window.location.origin + '/login/callback',
   
  };
  
  export { oktaAuthConfig, oktaSignInConfig };

  
// const REACT_APP_CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
// const REACT_APP_OKTA_DOMAIN = process.env.REACT_APP_OKTA_DOMAIN;
// const REACT_APP_PORT = process.env.REACT_APP_PORT;

// export const oktaAuthConfig = {
//   clientId: `${REACT_APP_CLIENT_ID}`,
//   issuer: `https://${REACT_APP_OKTA_DOMAIN}/oauth2/default`,
//   redirectUri: `http://localhost:${REACT_APP_PORT}/login/callback`, // this makes it so redirects to login if not logged in for secure routes
//   scopes: ["openid", "profile", "email"],
//   pkce: true,
//   disableHttpsCheck: true,
// };

// export const oktaSignInConfig = {
//       baseUrl: 'https://dev-30313942.okta.com',
//       clientId:"0oa1s17f95zeCK8ro5d7",
//       redirectUri: window.location.origin + '/login/callback',
//       authParams: {
//         pkce: true,
//       }
//     };
 

      
