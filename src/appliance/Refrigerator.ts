import { Appliance } from "./Appliance";

enum PowerState {
    OFF,
    ON
}

export class Refrigerator implements Appliance {
    private state: PowerState = PowerState.OFF
    private plug: boolean = false
    
    
    turnOn(): boolean {
        if(this.state === PowerState.OFF){
            console.log(`Refrigerator is now ON`)
            this.state = PowerState.ON
        }
        return this.state === PowerState.ON
    }

    turnOff(): boolean {
        if(this.state === PowerState.ON){
            console.log(`Refrigerator is now OFF`)
            this.state = PowerState.OFF
        }
        return this.state === PowerState.OFF
    }
}