const iframe = document.querySelector("iframe");
document.querySelector("#allowGeo").addEventListener("click", () => {
    navigator.geolocation.getCurrentPosition(position => {
        console.log("Latitude:", position.coords.latitude);
        console.log("Longitude:", position.coords.longitude);
        iframe.src = `https://www.openstreetmap.org/#map=18/${position.coords.latitude}/${position.coords.longitude}`;
    });
});