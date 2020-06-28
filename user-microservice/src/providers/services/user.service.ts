import { Injectable } from '@nestjs/common';
import { SessionProvider } from '../crossFunctions/session.provider'

@Injectable()
export class UserService {
    constructor(private session: SessionProvider) {

    }

    getAllUsers(): string {
        return 'Initial user-microservice!';
    }

    login({ username, password }) {
        //Check db for user

        //Cache this with provider? 
        console.log("username: ", username, password)
        this.session.setUsername(username);
        this.session.setLogin(true);


        return {
            success: true,
            reason: `User login ${username} and ${password}`,
            username: "useruser"
        };
    }
}
