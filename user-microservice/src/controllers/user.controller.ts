import { Controller, Body, Get, Post, Param } from '@nestjs/common';
import { UserService } from '../providers/services/user.service';
import { SessionProvider } from '../providers/crossFunctions/session.provider';

import { LoginDTO, LoginResponseDTO } from "../dto/user.dto";

@Controller('u')
export class UserController {
    constructor(private readonly userService: UserService, private sessionProvider: SessionProvider) { }

    @Post('login')
    login(@Body() loginDTO: LoginDTO): LoginResponseDTO {
        return this.userService.login(loginDTO);
    }

    @Get('cards')
    getAllCards(): string[] {
        return this.userService.getAllCards();
    }

    @Post('add/card')
    addCard(@Body('card') card: string | string[]) {
        return this.userService.addCard(card);
    }

    @Get('remove/card')
    removeCard(@Param('cardId') cardId): boolean {
        return this.userService.removeCard(cardId);
    }






    @Get('test')
    getHello2(): string {
        return `SessionProvider: ${this.sessionProvider.getLoggedIn} and ${this.sessionProvider.getUsername()}`
    };

}
