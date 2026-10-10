export{}
interface AppNotification {
  send(message: string): void;
}
class EmailNotification implements AppNotification {
  send(message: string): void {
    console.log(`Email Notification: ${message}`);
  }
}
class SMSNotification implements AppNotification {
  send(message: string): void {
    console.log(`SMS Notification: ${message}`);
  }
}
class PushNotification implements AppNotification {
  send(message: string): void {
    console.log(`Push Notification: ${message}`);
  }
}
const notifications: AppNotification[] = [
  new EmailNotification(),
  new SMSNotification(),
  new PushNotification()
];
notifications.forEach((notification) => {
  notification.send("Hello Everyone");
});