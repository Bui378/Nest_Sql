import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Score {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  playerName: string;

  @Column('int')
  score: number;
}
