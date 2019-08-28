import auth0 from "auth0-js";
import Cookies from "js-cookie";
import jwt from "jsonwebtoken";
import Axios from "axios";

import { getCookieFromReq } from "../helpers/utils";

const CLIENT_ID = process.env.CLIENT_ID;

class Auth0 {
  constructor() {
    this.auth0 = new auth0.WebAuth({
      domain: "dev-jhu1v8c8.auth0.com",
      clientID: CLIENT_ID,
      redirectUri: `${process.env.BASE_URL}/callback`,
      responseType: "token id_token",
      scope: "openid profile"
    });

    //Bind to auth0
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.handleAuthentication = this.handleAuthentication.bind(this);
  }

  handleAuthentication() {
    return new Promise((resolve, reject) => {
      this.auth0.parseHash((err, authResult) => {
        if (authResult && authResult.accessToken && authResult.idToken) {
          this.setSession(authResult);
          resolve();
        } else if (err) {
          reject(err);
          console.log(err);
        }
      });
    });
  }

  setSession(authResult) {
    //Set time of Access Token expiration - ms multiplied into seconds
    const expiresAt = JSON.stringify(
      authResult.expiresIn * 1000 + new Date().getTime()
    );

    Cookies.set("jwt", authResult.idToken);
  }

  logout() {
    Cookies.remove("jwt");

    this.auth0.logout({
      returnTo: "",
      clientID: CLIENT_ID
    });
  }

  login() {
    this.auth0.authorize();
  }

  async getJWKS() {
    //Get request to endpoint to retrieve JWKS object
    const res = await Axios.get(
      "https://dev-jhu1v8c8.auth0.com/.well-known/jwks.json"
    );
    const jwks = res.data;
    return jwks;
  }

  async verifyToken(token) {
    if (token) {
      //If have a token, decoding it
      //complete: true must be set to access JWKS header
      const decodedToken = jwt.decode(token, { complete: true });
      //Return undefined if token not found
      if (!decodedToken) {
        return undefined;
      }
      //Retrieving JWKS
      const jwks = await this.getJWKS();
      //Accessing first element of keys
      const jwk = jwks.keys[0];

      //Build certificate
      let cert = jwk.x5c[0];
      //Using match method and regex to return array with first 64 characters, and then joining with new line
      cert = cert.match(/.{1,64}/g).join("\n");
      //Add begin certificate to start of string and end certificate to end of certificate
      cert = `-----BEGIN CERTIFICATE-----\n${cert}\n-----END CERTIFICATE-----\n`;

      //Comparing JWK key ID with decoded certificate
      if (jwk.kid === decodedToken.header.kid) {
        try {
          const verifiedToken = jwt.verify(token, cert);
          const expiresAt = verifiedToken.exp * 1000;

          return verifiedToken && new Date().getTime() < expiresAt
            ? verifiedToken
            : undefined;
        } catch (err) {
          return undefined;
        }
      }
    }

    return undefined;
  }

  async clientAuth() {
    const token = Cookies.getJSON("jwt");
    const verifiedToken = await this.verifyToken(token);

    return verifiedToken;
  }

  async serverAuth(req) {
    if (req.headers.cookie) {
      const token = getCookieFromReq(req, "jwt");
      const verifiedToken = await this.verifyToken(token);
      return verifiedToken;
    }
    return undefined;
  }
}

const auth0Client = new Auth0();

export default auth0Client;
