import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SessionsModule } from './sessions/sessions.module';
import { BookingsModule } from './bookings/booking.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql', 
      host: 'fdb1030.awardspace.net',
      port: 3306, 
      username: '4580381_matchable', 
      password: '1NR5.x*W5M2y)xGe', 
      database: '4580381_matchable', 
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true, 
    }),
    SessionsModule,
    BookingsModule,
  ],
})
export class AppModule {}