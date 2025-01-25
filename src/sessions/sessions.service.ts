import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Session } from './session.entity';
import { CreateSessionDto } from './dto/create-session.dto';

@Injectable()
export class SessionsService {
  constructor(
    @InjectRepository(Session)
    private sessionsRepository: Repository<Session>,
  ) {}

  findAll(type?: string, trainer?: string): Promise<Session[]> {
    const query = this.sessionsRepository.createQueryBuilder('session');
  
    if (type) {
      query.andWhere('session.type LIKE :type', { type: `%${type}%` }); // Partial match for type
    }
  
    if (trainer) {
      query.andWhere('session.trainer LIKE :trainer', { trainer: `%${trainer}%` }); // Partial match for trainer
    }
  
    console.log('Generated SQL:', query.getSql()); // Debug log
    return query.getMany();
  }

  async findOne(id: number): Promise<Session> {
    const session = await this.sessionsRepository.findOne({ where: { id } });
    if (!session) {
      throw new NotFoundException(`Session with ID ${id} not found`);
    }
    return session;
  }

  async create(createSessionDto: CreateSessionDto): Promise<Session> {
    const session = this.sessionsRepository.create(createSessionDto);
    return this.sessionsRepository.save(session);
  }
}