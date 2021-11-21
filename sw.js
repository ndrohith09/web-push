// self.addEventListener('push' , ()=>{
//     self.ServiceWorkerRegistration.sendNotification('Hello World!' , {});
// });

self.addEventListener('push', function(e) {
    var options = {
        body : "this is notify",
        vibrate : [100, 50, 100],
        data : {
            dateOfArrival : Date.now(),
            primaryKey : 2
        },
        actions : [
            {action : 'explore', title : 'explore this new world' , 
            // icon : 'images/checkmark.png'
        },
        {action : 'close', title : 'close this new world' ,
            // icon : 'images/xmark.png'
    }]
    };
    e.waitUntil(
        self.registration.showNotification('Hello world!', options)
    );
  });