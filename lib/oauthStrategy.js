"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authentication = void 0;
const authentication_1 = require("@feathersjs/authentication");
const authentication_oauth_1 = require("@feathersjs/authentication-oauth");
const authentication = (app) => {
    const authentication = new authentication_1.AuthenticationService(app);
    authentication.register('jwt', new authentication_1.JWTStrategy());
    authentication.register('appsso', new authentication_oauth_1.OAuthStrategy());
    app.use('authentication', authentication);
    app.configure((0, authentication_oauth_1.oauth)());
};
exports.authentication = authentication;
//# sourceMappingURL=oauthStrategy.js.map