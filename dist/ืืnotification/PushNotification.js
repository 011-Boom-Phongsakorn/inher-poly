"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PushNotification = void 0;
class PushNotification {
    constructor(title) {
        this.title = title;
        this.title = title;
    }
    send(message) {
        console.log(`${this.title} ${message}`);
    }
}
exports.PushNotification = PushNotification;
