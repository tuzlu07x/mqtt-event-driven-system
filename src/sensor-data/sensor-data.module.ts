import { Module } from '@nestjs/common';
import { SensorDataService } from './sensor-data.service';
import { SensorDataController } from './sensor-data.controller';
import { SensorDatum } from './entities/sensor-datum.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ScheduleModule } from '@nestjs/schedule';

@Module({
  imports: [TypeOrmModule.forFeature([SensorDatum]), ScheduleModule.forRoot()],
  controllers: [SensorDataController],
  providers: [SensorDataService],
  exports: [TypeOrmModule],
})
export class SensorDataModule {}
