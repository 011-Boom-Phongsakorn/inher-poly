"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SMSNotification = void 0;
class SMSNotification {
    constructor(title) {
        this.title = title;
        this.title = title;
    }
    send(message) {
        console.log(`${this.title} ${message}`);
    }
}
exports.SMSNotification = SMSNotification;
