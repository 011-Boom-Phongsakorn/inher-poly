import { Notification } from "./Notification"

export class EmailNotification implements Notification {
    constructor(private email: string){
        this.email = email
    }

    send(message: string): void{
        console.log(`Send Email: ${this.email} | Message:  ${message}`)
    }
}