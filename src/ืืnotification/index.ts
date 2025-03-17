import { EmailNotification } from "./EmailNotification";
import { PushNotification } from "./PushNotification";
import { SMSNotification } from "./SMSNotification";


const emailnotification = new EmailNotification('Top')
emailnotification.send('Where r u?')

const sMSNotification = new SMSNotification('Chatgpt')
sMSNotification.send(`An AI program that creates conversational, high-performance chatbots.`)

const pushNotification = new PushNotification('Blockchain')
pushNotification.send(`It is a type of data storage network, stored in blocks linked together on the network like a chain.
`)