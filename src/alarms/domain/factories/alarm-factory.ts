import { Injectable } from "@nestjs/common";
import { randomUUID } from "crypto";
import { AlarmSeverity } from "../value-objects/alarm-severity";

@Injectable()
export class AlarmFactory {
create (name:string,severity:string){
    const id = randomUUID();
    const alarmSeverity = new AlarmSeverity(severity as AlarmSeverity['value']);
    return {id, name, severity: alarmSeverity};
}
}