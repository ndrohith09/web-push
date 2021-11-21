var push = require('web-push');
// let vapidKeys = push.generateVAPIDKeys(); 
let vapidKeys = {
    publicKey: 'BKOiRPfsD008p0P9mcKiPKBRtuGG4tinQp0plQaxL1VkwbOizhGC94nzOdLdKBEua-yAAmDhJ12iegPlpcARxNk',
    privateKey: 'MxtLBVQ-iUhmx5H9A32sO2R377TdlRlHZ8_M9rKEAtE'
  }
console.log(vapidKeys);

push.setVapidDetails('mailto:ndrohith09@gmail.com' , vapidKeys.publicKey , vapidKeys.privateKey);
let sub = {};
push.sendNotification(sub , 'Hello World!');