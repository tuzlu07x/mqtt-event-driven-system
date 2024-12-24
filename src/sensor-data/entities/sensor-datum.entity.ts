import { Column, Entity, PrimaryGeneratedColumn, Table } from 'typeorm';

@Entity({ name: 'sensor_data' })
export class SensorDatum {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  temperature: string;

  @Column()
  humidity: string;

  @Column()
  createdAt: Date;
}
