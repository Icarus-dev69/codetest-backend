import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookingsController } from './booking.controller';
import { BookingsService } from './booking.service';
import { Booking } from './booking.entity';
import { SessionsModule } from '../sessions/sessions.module'; // Import SessionsModule

@Module({
  imports: [TypeOrmModule.forFeature([Booking]), SessionsModule], // Add SessionsModule
  controllers: [BookingsController],
  providers: [BookingsService],
})
export class BookingsModule {}