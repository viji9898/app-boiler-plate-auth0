import { Auth0Provider } from "@auth0/auth0-react";
import React from "react";

export const Auth0ProviderWithConfig = ({ children }) => {
  const domain = process.env.REACT_APP_AUTH0_DOMAIN;
  const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;
  const redirectUri = process.env.REACT_APP_AUTH0_CALLBACK_URL;
  const audience = process.env.REACT_APP_AUDIENCE;

  if (!(domain && clientId && redirectUri)) {
    return null;
  }

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={redirectUri}
      audience={audience}
      scope={"read:current_user update:current_user_metadata"}
    >
      {children}
    </Auth0Provider>
  );
};
