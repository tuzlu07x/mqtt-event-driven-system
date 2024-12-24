import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SensorDataModule } from './sensor-data/sensor-data.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SensorDatum } from './sensor-data/entities/sensor-datum.entity';
import { SensorDataService } from './sensor-data/sensor-data.service';
import { BullModule } from '@nestjs/bullmq';
import { ScheduleModule } from '@nestjs/schedule';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'db',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'warehouse',
      entities: [SensorDatum],
      synchronize: true,
    }),
    SensorDataModule,
  ],
  controllers: [AppController],
  providers: [AppService, SensorDataService],
})
export class AppModule {}
