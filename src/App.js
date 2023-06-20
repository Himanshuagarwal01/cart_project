import Header from "./container/Header";
import { Auth0Provider } from "@auth0/auth0-react";

function App() {
  return (
    <>
      <Auth0Provider
        domain="dev-hhprjwsr48p61yre.us.auth0.com"
        clientId="e4o4df0KYJdUNyYDLeEX7XL2rGdfn6EA"
        authorizationParams={{
          redirect_uri: window.location.origin,
        }}
      >
        <Header />
      </Auth0Provider>
    </>
  );
}

export default App;
