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
                const notification = {
                    title: "Hello, World!",
                    body: "This is a notification from the app!",
                    icon: "icon.png"
                };
                const message = document.querySelector("#notification").value;
                if(message == ""){
                    registration.showNotification(notification.title, notification);
                }else{
                    registration.showNotification(message);

                }
            });
        }
    });
})