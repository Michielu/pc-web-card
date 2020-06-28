import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
    getAllUsers(): string {
        return 'Initial user-microservice!';
    }

    login({ username, password }) {
        //Cache this with provider? 
        return {
            success: true,
            reason: `User login ${username} and ${password}`,
            username: "useruser"
        };
    }
}
