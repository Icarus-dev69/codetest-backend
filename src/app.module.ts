import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SessionsModule } from './sessions/sessions.module';
import { BookingsModule } from './bookings/booking.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql', 
      host: 'localhost',
      port: 3306, 
      username: 'root', 
      password: '1234', 
      database: 'matchable', 
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true, 
    }),
    SessionsModule,
    BookingsModule,
  ],
})
export class AppModule {}