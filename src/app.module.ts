import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SessionsModule } from './sessions/sessions.module';
import { BookingsModule } from './bookings/booking.module';

@Module({
  imports: [
    ConfigModule.forRoot(), // Load environment variables
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres', // Use PostgreSQL
        url: configService.get<string>('postgresql://root:YcIYSdGM4nuVjT14xtJk7dbRvx18fFLt@dpg-cuag47lds78s739msg0g-a/matchable0db'), // Use the connection string directly
        entities: [__dirname + '/**/*.entity{.ts,.js}'],
        synchronize: true, // Automatically create tables (for development only)
      }),
      inject: [ConfigService],
    }),
    SessionsModule,
    BookingsModule,
  ],
})
export class AppModule {}