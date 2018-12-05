console.log("Loaded service worker!");

self.addEventListener("push", ev => {
  const data = ev.data.json();
  console.log("Got push", self, data);
  self.registration.showNotification(data.data.title, {
    body: data.data.title_link,
    icon: "http://mongoosejs.com/docs/images/mongoose5_62x30_transparent.png"
  });
});
self.addEventListener("activate", function(e) {
  console.log("dit nhau", self.registration);
  // self.registration.showNotification("dit nhau", {
  //   body: "Hello, World!",
  //   icon: ""
  // });
});
