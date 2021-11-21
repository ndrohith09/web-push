var push = require('web-push');
// let vapidKeys = push.generateVAPIDKeys(); 
let vapidKeys = {    
        publicKey: 'BPMd2UB5GiddhZn1NjFRqCNs_WsCxaKLpkIhRpCXfqIwqbv3w3axBqKXV5p71fEOYIR-LFARcEBeB_UyNxqvvBg',
        privateKey: '2-_dTYnUkNAebrZBfbSOetT3eV7BEUnprIRBLQTLPjI'   
} 
console.log(vapidKeys);

push.setVapidDetails('mailto:ndrohith09@gmail.com' , vapidKeys.publicKey , vapidKeys.privateKey);
let sub = {};
push.sendNotification(sub , 'Hello World!');