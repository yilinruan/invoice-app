// auth.service.ts
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly prisma: PrismaService,
  ) {}

  // Login function
  async login(email: string, password: string): Promise<{ token: string; user: { name: string; email: string } }> {
    // Find user by email
    const user = await this.prisma.user.findUnique({
      where: { email },
    });

    // Check if user exists
    if (!user) {
      throw new UnauthorizedException('Invalid email or password');
    }

    // Directly compare the provided password with the stored password
    if (user.password !== password) {
      throw new UnauthorizedException('Invalid email or password');
    }

    // Generate JWT token
    const token = await this.generateToken(user);
    console.log(`Login successful! Token: ${token}, user ${user.name} and ${user.email}`);
    
    // Return both token and user info (name and email)
    return { token, user: { name: user.name, email: user.email } }; // Adjust according to your user model
  }

  // Function to generate JWT token
  async generateToken(user: any): Promise<string> {
    const payload = { sub: user.id, email: user.email };
    return this.jwtService.sign(payload, { expiresIn: '5m' }); // Set expiration to 5 minutes
  }
}
