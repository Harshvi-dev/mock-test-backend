import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Registration {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  email: string;

  @Column()
  password: string;
}
