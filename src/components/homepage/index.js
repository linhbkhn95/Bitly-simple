import React from "react";
import FormInput from "./components/FormInput";
import ListResult from "./components/ListResult";
import { connect } from "react-redux";
import axios from "axios";
import { apiBase } from "../../client/config";

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

// if ("serviceWorker" in navigator) {
//   console.log("Registering service worker");

//   run().catch(error => console.error(error));
// }

async function run(registration) {
  console.log("Registering service worker", registration);
  // const registration = await navigator.serviceWorker.register("/worker.js", {
  //   scope: "/"
  // });
  console.log("Registered service worker", registration.pushManager);

  console.log("Registering push");
  const subscription = await registration.pushManager.subscribe({
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

class Homepage extends React.Component {
  componentDidMount() {
    // navigator.serviceWorker.register("./worker.js").then(function(reg) {
    //   if (reg.installing) {
    //     console.log("Service worker installing");
    //   } else if (reg.waiting) {
    //     console.log("Service worker installed");
    //   } else if (reg.active) {
    //     console.log("Service worker active");
    //   }
    //   // Include below mentioned validations
    // });
    //  navigator.serviceWorker.ready.then(function(reg) {  })
    if (navigator.serviceWorker) {
      navigator.serviceWorker.register("/worker.js", { scope: "/" }).then(
        function(reg) {
          var serviceWorker;
          if (reg.installing) {
            serviceWorker = reg.installing;
            // console.log('Service worker installing');
          } else if (reg.waiting) {
            serviceWorker = reg.waiting;
            // console.log('Service worker installed & waiting');
          } else if (reg.active) {
            serviceWorker = reg.active;
            // console.log('Service worker active');
          }

          if (serviceWorker) {
            console.log("sw current state", serviceWorker.state);
            if (serviceWorker.state == "activated") {
              run(reg).catch(error => console.error(error));

              //If push subscription wasnt done yet have to do here
              console.log("sw already activated - Do watever needed here");
            }
            serviceWorker.addEventListener("statechange", function(e) {
              //   console.log("sw statechange : ", e.target.state);
              if (e.target.state == "activated") {
                // use pushManger for subscribing here.
                run(reg).catch(error => console.error(error));

                console.log(
                  "Just now activated. now we can subscribe for push notification"
                );
                // subscribeForPushNotification(reg);
              }
            });
          }
        },
        function(err) {
          console.error("unsuccessful registration with ", "./worker.js", err);
        }
      );
    }
    // if ("serviceWorker" in navigator) {
    //   console.log("Registering service worker");

    //   run().catch(error => console.error(error));
    // }
  }
  render() {
    return (
      <div className="home-page">
        <h1 className="page-title text-center">
          HARNESS EVERY CLICK, TAP AND SWIPE.{" "}
        </h1>
        <div className="text-mini text-center">
          Brand, track and optimize every touchpoint with Bitly, the world's
          leading link management platform.
          <a className="link-more">
            Learn More{" "}
            <i style={{ fontSize: "19px" }} className="fas fa-arrow-right" />
          </a>
        </div>
        <FormInput />
        <ListResult />
      </div>
    );
  }
}

export default Homepage;
