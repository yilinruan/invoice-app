import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() body: { email: string; password: string }) {
    // Call the login method from AuthService
    const { token, user } = await this.authService.login(body.email, body.password);
    
    // Return both the token and user information
    return { access_token: token, user }; // Return the token and user info
  }
}
