import { Notification } from "./Notification";

export class PushNotification implements Notification {
    constructor(private title: string){
        this.title = title
    }

    send(message: string): void {
        console.log(`${this.title} ${message}`)
    }
}