import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Booking } from './booking.entity';
import { SessionsService } from '../sessions/sessions.service';

@Injectable()
export class BookingsService {
  constructor(
    @InjectRepository(Booking)
    private bookingsRepository: Repository<Booking>,
    private sessionsService: SessionsService, // Inject SessionsService
  ) {}

  async create(bookingData: {
    user_name: string;
    user_email: string;
    user_phone: string;
    session_id: number;
  }): Promise<Booking> {
    // Find the session by ID (throws NotFoundException if not found)
    const session = await this.sessionsService.findOne(bookingData.session_id);

    // Create a new booking
    const newBooking = this.bookingsRepository.create({
      user_name: bookingData.user_name,
      user_email: bookingData.user_email,
      user_phone: bookingData.user_phone,
      session, // Assign the session object
      total_cost: session.price, // Calculate total cost
    });

    // Save the booking to the database
    return this.bookingsRepository.save(newBooking);
  }
}