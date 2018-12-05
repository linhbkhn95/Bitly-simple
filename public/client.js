const publicVapidKey =
  "BCd-NNalv04tT2HKYxWcv4nqEd2jUeW173il04IjQXRu_H6XTQ_7tz9ovPDfAandOeVHj6hyeZqqQBSooqtlJoo";
// navigator.serviceWorker.register("sw.js").then(function(reg) {
//   if (reg.installing) {
//     console.log("Service worker installing");
//   } else if (reg.waiting) {
//     console.log("Service worker installed");
//   } else if (reg.active) {
//     console.log("Service worker active");
//   }
//   // Include below mentioned validations
// });

if ("serviceWorker" in navigator) {
  console.log("Registering service worker");

  run().catch(error => console.error(error));
}

async function run() {
  console.log("Registering service worker");
  const registration = await navigator.serviceWorker.register("/worker.js", {
    scope: "/"
  });
  console.log("Registered service worker");

  console.log("Registering push");
  const subscription = await registration.pushManager.subscribe({
    userVisibleOnly: true,
    applicationServerKey: urlBase64ToUint8Array(publicVapidKey)
  });
  console.log("Registered push");

  console.log("Sending push3333");
  await fetch("http://localhost:4000/subscribe", {
    method: "POST",
    body: JSON.stringify(subscription),
    headers: {
      "content-type": "application/json",
      "access-control-allow-origin": "*"
      // "access-control-allow-credentials": "true"
    }
  });
  console.log("Sent push");
}

// Boilerplate borrowed from https://www.npmjs.com/package/web-push#using-vapid-key-for-applicationserverkey
function urlBase64ToUint8Array(base64String) {
  const padding = "=".repeat((4 - (base64String.length % 4)) % 4);
  const base64 = (base64String + padding)
    .replace(/\-/g, "+")
    .replace(/_/g, "/");

  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);

  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
}
