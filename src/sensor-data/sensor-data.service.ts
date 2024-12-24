import { Injectable, OnModuleInit } from '@nestjs/common';
import { SensorDatum } from './entities/sensor-datum.entity';
import * as mqtt from 'mqtt';
import { Cron, CronExpression } from '@nestjs/schedule';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class SensorDataService implements OnModuleInit {
  private client: mqtt.MqttClient;

  // constructor(private readonly sensorDataRepository: Repository<SensorDatum>) {}
  constructor(
    @InjectRepository(SensorDatum)
    private readonly sensorDataRepository: Repository<SensorDatum>,
  ) {}

  onModuleInit() {
    this.client = mqtt.connect('mqtt://mqtt5:1883');
    this.client.on('connect', () => {
      console.log('MQTT Publisher is connected');
      this.client.subscribe('sensor/data');
    });

    this.client.on('message', async (topic: string, payload: Buffer) => {
      console.log('Received message:', topic, payload.toString());
      if (topic === 'sensor/data') {
        const data = JSON.parse(payload.toString());
        console.log('Received data:', data);
        await this.saveSensorData(data);
      }
    });
  }

  @Cron(CronExpression.EVERY_10_SECONDS)
  handleCron() {
    console.log('Cron job running: ', new Date().toISOString());
    const data = {
      temperature: (Math.random() * (30 - 20) + 20).toFixed(2),
      humidity: (Math.random() * (60 - 40) + 40).toFixed(2),
    };

    this.client.publish('sensor/data', JSON.stringify(data));
  }

  async saveSensorData(data: { temperature: string; humidity: string }) {
    const sensorData = new SensorDatum();
    sensorData.temperature = data.temperature;
    sensorData.humidity = data.humidity;
    sensorData.createdAt = new Date();

    await this.sensorDataRepository.save(sensorData);
    console.log('Sensor data saved:', sensorData);
  }
}
