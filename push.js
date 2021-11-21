var push = require("web-push");
// let vapidKeys = push.generateVAPIDKeys();
let vapidKeys = {
  publicKey:
    "BKOiRPfsD008p0P9mcKiPKBRtuGG4tinQp0plQaxL1VkwbOizhGC94nzOdLdKBEua-yAAmDhJ12iegPlpcARxNk",
  privateKey: "MxtLBVQ-iUhmx5H9A32sO2R377TdlRlHZ8_M9rKEAtE",
};
console.log(vapidKeys);

push.setVapidDetails(
  "mailto:ndrohith09@gmail.com",
  vapidKeys.publicKey,
  vapidKeys.privateKey
);
let sub = {
  endpoint:
    "https://wns2-sg2p.notify.windows.com/w/?token=BQYAAACejS1Pns%2ftoPBxqRjAyASCEjXacKnFwA4XBlwudQIDpJbUJu352vORCPkPApuLgaArfc1BFehFw%2bA6WADw3kiFiiG5C47ihPIcp4B4nop2Q2k5NeP%2f0OY2xuJcVsBWTcQRndtFEqbeGXtKamAhfhvdWVjrWfc4CvKir3tOVjNYNlnXwXjuQ6Kb0JzotJQQgknrsx94Jm0%2fFUYy%2f0qiId9XSIoPMfNRDRXzCouj0RdXtRIz0jBRJXTqwBZUaIyMdHo9crlwDdJwxAxnD87SySJR61%2bE3s17mCLWUXZm8CZvMiwj6ZOs24LahH4zFJVsR5Sm3NqJWYboLXKVQDk0Rgt5uzFrlw%2fF1fO%2fE2RJwYsF0g%3d%3d",
  expirationTime: null,
  keys: {
    p256dh:
      "BJBebu6RnCoATb-D0E4h8YDgO8mPdDJPK0WQ2N-OjFr2r0oBppnq4N1Faz2MowV-ggrHXMppt4HiMTWeDQTN5LU",
    auth: "N-A0B9ppvBUAk-UXpw76bg",
  },
};
push.sendNotification(sub, "Push World!");
