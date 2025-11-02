import { DynamicModule, Type, Module } from '@nestjs/common';
import { AlarmsController } from '../presentation/htpp/alarms.controller';
import { AlarmsService } from './alarms.service';
import { AlarmFactory } from '../domain/factories/alarm-factory';

@Module({
  controllers: [AlarmsController],
  providers: [AlarmsService,AlarmFactory]
})
export class AlarmsModule {
  static withInfrastucture(infrastructureModule: Type | DynamicModule) {
    return {
      module: AlarmsModule,
      imports: [infrastructureModule]
    }
    
  }
}
