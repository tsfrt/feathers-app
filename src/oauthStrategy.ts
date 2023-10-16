import { AuthenticationService, JWTStrategy } from '@feathersjs/authentication'
import { OAuthStrategy, oauth } from '@feathersjs/authentication-oauth'
import type { Application } from './declarations'

declare module './declarations' {
    interface ServiceTypes {
        authentication: AuthenticationService
    }
}

export const authentication = (app: Application) => {
    const authentication = new AuthenticationService(app)

    //authentication.register('jwt', new JWTStrategy())
    authentication.register('appsso', new OAuthStrategy())
    console.log(authentication)
    app.use('authentication', authentication)
    app.configure(oauth())
}