"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const EmailNotification_1 = require("./EmailNotification");
const PushNotification_1 = require("./PushNotification");
const SMSNotification_1 = require("./SMSNotification");
const emailnotification = new EmailNotification_1.EmailNotification('Top');
emailnotification.send('Where r u?');
const sMSNotification = new SMSNotification_1.SMSNotification('Chatgpt');
sMSNotification.send(`An AI program that creates conversational, high-performance chatbots.`);
const pushNotification = new PushNotification_1.PushNotification('Blockchain');
pushNotification.send(`It is a type of data storage network, stored in blocks linked together on the network like a chain.
`);
