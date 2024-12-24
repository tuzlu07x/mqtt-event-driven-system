import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { SensorDataService } from './sensor-data.service';

@Controller()
export class SensorDataController {
  constructor(private readonly sensorDataService: SensorDataService) {}

  // @MessagePattern('createSensorDatum')
  // create(@Payload() createSensorDatumDto: CreateSensorDatumDto) {
  //   return this.sensorDataService.create(createSensorDatumDto);
  // }

  // @MessagePattern('findAllSensorData')
  // findAll() {
  //   return this.sensorDataService.findAll();
  // }

  // @MessagePattern('findOneSensorDatum')
  // findOne(@Payload() id: number) {
  //   return this.sensorDataService.findOne(id);
  // }

  // @MessagePattern('updateSensorDatum')
  // update(@Payload() updateSensorDatumDto: UpdateSensorDatumDto) {
  //   return this.sensorDataService.update(updateSensorDatumDto.id, updateSensorDatumDto);
  // }

  // @MessagePattern('removeSensorDatum')
  // remove(@Payload() id: number) {
  //   return this.sensorDataService.remove(id);
  // }
}
