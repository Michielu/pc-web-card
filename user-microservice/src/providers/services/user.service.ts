import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { SessionProvider } from '../crossFunctions/session.provider'
import { User } from '../../entity/user.entity';
@Injectable()
export class UserService {
    constructor(
        private session: SessionProvider,
        @InjectRepository(User)
        private usersRepository: Repository<User>,) {

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

    getAllCards(): string[] {
        return this.session.getCards();
    }

    addCard(card: string | string[]) {
        if (Array.isArray(card)) {
            card.forEach(c => { this.session.addCards(c) })
        } else {
            this.session.addCards(card);
        }
    }

    removeCard(card: string): boolean {
        return this.session.removeCard(card);
    }

    //Example repository 
    // findAll(): Promise<User[]> {
    //     return this.usersRepository.find();
    // }

    // findOne(id: string): Promise<User> {
    //     return this.usersRepository.findOne(id);
    // }

    // async remove(id: string): Promise<void> {
    //     await this.usersRepository.delete(id);
    // }
}
