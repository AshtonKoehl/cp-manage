import { Auth0Provider } from "@auth0/auth0-react";
import React from "react";
import { useNavigate } from "react-router-dom";

export const Auth0ProviderWithNavigate = ({ children }) => {
  const navigate = useNavigate();

  const domain = process.env.REACT_APP_AUTH0_DOMAIN;
  const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;
  const redirectUri =
    process.env.REACT_APP_VERCEL_ENV === "production"
      ? `https://${window.location.hostname}/callback`
      : process.env.REACT_APP_AUTH0_CALLBACK_URL;

  const onRedirectCallback = (appState) => {
    navigate(appState?.returnTo || window.location.pathname);
  };

  if (!(domain && clientId && redirectUri)) {
    return null;
  }

  return (
    <Auth0Provider
      domain="dev-j0podihq6bzun606.us.auth0.com"
      clientId="B2sv3YdPzUlJhDymIMbX6SsFmASDjqdl"
      authorizationParams={{ redirect_uri: window.location.origin }}
    >
      {children}
    </Auth0Provider>
  );
};
