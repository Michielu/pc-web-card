import { SessionProvider } from './crossFunctions/session.provider';
import { AppService } from './services/app.service';
import { UserService } from './services/user.service';

export default [
    AppService, UserService, SessionProvider
]
