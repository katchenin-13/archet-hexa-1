import { Body, Controller, Get, Post } from '@nestjs/common';
import { AlarmsService } from 'src/alarms/application/alarms.service';
import { CreateAlarmCommand } from 'src/alarms/application/commands/create-alarm-command';
import { createAlarmDto } from './dto/create-alarm.dto';

@Controller('alarms')
export class AlarmsController {
    constructor(private readonly alarmsService: AlarmsService){}
    @Post()
    create(@Body() createAlarmDto: createAlarmDto){
        return this.alarmsService.createAlarm(
            new CreateAlarmCommand(
                createAlarmDto.name, 
                createAlarmDto.severity
            )
        );
        }
    @Get()
    findAll() {
        return this.alarmsService.findAll();
    }
}
