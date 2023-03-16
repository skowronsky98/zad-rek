import { NotFoundException } from '@nestjs/common';

export const USER_NOT_FOUND = new NotFoundException('User not found');
