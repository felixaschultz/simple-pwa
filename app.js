const iframe = document.querySelector("iframe");
document.querySelector("#allowGeo").addEventListener("click", () => {
    navigator.geolocation.getCurrentPosition(position => {
        console.log("Latitude:", position.coords.latitude);
        console.log("Longitude:", position.coords.longitude);
        const { latitude, longitude } = position.coords;
        iframe.src = `https://www.openstreetmap.org/export/embed.html?bbox=${longitude},${latitude}&marker=${latitude},${longitude}`;
    });
});

document.querySelector("#notify").addEventListener("click", () => {
    Notification.requestPermission().then(permission => {
        if (permission === "granted") {
            navigator.serviceWorker.ready.then(registration => {
                const notificationContent = {
                    title: "Hello, World!",
                    body: "This is a notification from the app!",
                    vibrate: [200, 100, 200, 100, 200, 100, 200],
                    tag: "notification-tag",
                };
                const message = document.querySelector("#notification").value;
                if(message == ""){
                    registration.showNotification(notificationContent.title, notificationContent).then((e) => {
                        console.log("Notification sent!", e);
                        /* e.onclick = function() {
                            window.open("https://www.google.com", "_blank");
                        }; */
                    });
                }else{
                    registration.showNotification(message).then((e) => {
                        console.log("Notification sent!", e);
                        /* e.onclick = function() {
                            window.open("https://www.google.com", "_blank");
                        }; */
                    });
                }
            });
        }
    });
})