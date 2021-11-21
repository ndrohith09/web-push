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
            {action : 'explore', title : 'explore' , 
            icon : 'a2.png'
        },
        {action : 'close', title : 'close' ,
            icon : 'a3.png'
    }]
    };
    e.waitUntil(
        self.registration.showNotification('Hello world!', options)
    );
  });