
export class AlarmSeverity {
    constructor(public value: 'critical' | 'low' | 'medium' | 'high') {}
        equals(severity: AlarmSeverity) {
            return this.value === severity.value;
        }   

    }
