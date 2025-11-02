import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AlarmEntity } from "./entities/alarm.entity";
import { Alarm } from "src/alarms/domain/alarm";
import { OrmAlarmRepository } from "./repositories/alarm.repository";
import { AlarmRepository } from "src/alarms/application/ports/alarm.repository";

@Module({
    imports: [TypeOrmModule.forFeature([AlarmEntity])],
    providers: [{
        provide:AlarmRepository,
        useClass:OrmAlarmRepository
    }],
    exports: [AlarmRepository]
})
export class OrmAlarmPersistenceModule {}
