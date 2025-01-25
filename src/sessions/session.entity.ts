import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Session {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 50 })
  type: string;

  @Column({ type: 'timestamp' })
  time_slot: Date;

  @Column()
  duration: number;

  @Column({ length: 100 })
  trainer: string;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  price: number;
}