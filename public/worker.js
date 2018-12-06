console.log("Loaded service worker!");

self.addEventListener("push", ev => {
  const data = ev.data.json();
  console.log("Got push", self, data);
  if(data&&data.data)
  self.registration.showNotification(data.data.title, {
    body: data.data.title_link,
    icon: "http://mongoosejs.com/docs/images/mongoose5_62x30_transparent.png"
  });
});
self.addEventListener("activate", async function(e) {
  console.log("dit nhau", self.registration);
  // self.registration.showNotification("dit nhau", {
  //   body: "Hello, World!",
  //   icon: ""
  // });
  const subscription = await self.registration.pushManager.subscribe({
    userVisibleOnly: true,
    applicationServerKey: urlBase64ToUint8Array(publicVapidKey)
  });
  console.log("Registered push", JSON.stringify(subscription));

  await axios.post(`${apiBase}/subscribe`, subscription, {
    headers: {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json"
      }
    }
  });
});
