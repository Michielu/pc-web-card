//DTO data transfer object

export class LoginDTO {
    username: string;
    password: string;
}

export class LoginResponseDTO {
    success: boolean;
    reason: string;
    username: string;
}