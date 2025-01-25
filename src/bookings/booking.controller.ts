import { Controller, Post, Body } from '@nestjs/common';
import { BookingsService } from './booking.service';

@Controller('bookings')
export class BookingsController {
  constructor(private readonly bookingsService: BookingsService) {}

  @Post()
  create(
    @Body()
    bookingData: {
      user_name: string;
      user_email: string;
      user_phone: string;
      session_id: number; 
    },
  ) {
    return this.bookingsService.create(bookingData);
  }
}