import { Body, Controller, ParseIntPipe, Post } from "@nestjs/common";
import { AuthServices } from "./auth.service";
import { AuthDto } from "./dto";

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthServices) {}

        @Post('signup')
        signup(@Body() dto: AuthDto) {
            return this.authService.signup(dto);
        }

        @Post('signin')
        signin(@Body() dto: AuthDto) {
            return this.authService.signin(dto);
        }
}