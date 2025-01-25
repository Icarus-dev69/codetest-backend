import { Controller, Get, Query, NotFoundException, Param, Post,Body } from '@nestjs/common';
import { SessionsService } from './sessions.service';
import { CreateSessionDto } from './dto/create-session.dto';

@Controller('sessions')
export class SessionsController {
  constructor(private readonly sessionsService: SessionsService) {}

  @Get()
  findAll(
    @Query('type') type?: string, // Filter by session type
    @Query('trainer') trainer?: string, // Filter by trainer
  ) {
    return this.sessionsService.findAll(type, trainer);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    try {
      return await this.sessionsService.findOne(+id);
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw new NotFoundException(error.message);
      }
      throw error;
    }
  }

  @Post()
  create(@Body() createSessionDto: CreateSessionDto) {
    return this.sessionsService.create(createSessionDto);
  }
}