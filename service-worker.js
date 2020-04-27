importScripts("/precache-manifest.5f6d35e742224983ce7f3c4f868b9e8e.js", "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

//Web Push Notifications//
// Import and configure the Firebase SDK
//importScripts('https://www.gstatic.com/firebasejs/7.13.1/firebase-app.js');
//importScripts('https://www.gstatic.com/firebasejs/7.13.1/firebase-messaging.js');

//firebase.initializeApp({
//  apiKey: "AIzaSyC457-gC0a0NqwoWhSrEp-VFgcVnBrKy3w",
//  authDomain: "nlle-b0128.firebaseapp.com",
//  databaseURL: "https://nlle-b0128.firebaseio.com",
//  projectId: "nlle-b0128",
//  storageBucket: "nlle-b0128.appspot.com",
//  messagingSenderId: "177081285221",
//  appId: "1:177081285221:web:1991e8331996687330a48c"
//});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
//const messaging = firebase.messaging();

//messaging.setBackgroundMessageHandler(function(payload) {
//  console.log('Handling background message ', payload);
///  
//  return self.registration.showNotification(payload.data.title, {
//    body: payload.data.body,
//    icon: payload.data.icon,
//    tag: payload.data.tag,
//    data: payload.data.link
//  });
//});
