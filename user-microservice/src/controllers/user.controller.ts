import { Controller, Body, Get, Post } from '@nestjs/common';
import { UserService } from '../services/user.service';
import { LoginDTO, LoginResponseDTO } from "../dto/user.dto";

@Controller('u')
export class UserController {
    constructor(private readonly userService: UserService) { }

    @Post('login')
    login(@Body() loginDTO: LoginDTO): LoginResponseDTO {
        return this.userService.login(loginDTO);
    }

    @Get('test')
    getHello2(): string {
        return 'this.appService.getHello()';
    }
}

// - login
// - logout
// - register