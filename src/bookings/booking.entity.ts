import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Session } from '../sessions/session.entity';

@Entity()
export class Booking {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  user_name: string;

  @Column({ length: 100 })
  user_email: string;

  @Column({ length: 20 })
  user_phone: string;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  total_cost: number;

  @ManyToOne(() => Session, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'session_id' })
  session: Session;
}