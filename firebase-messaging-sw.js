importScripts('https://www.gstatic.com/firebasejs/8.4.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.4.1/firebase-messaging.js');

   /*Update with yours config*/
   const firebaseConfig = {
  apiKey: 'AIzaSyBod8_-pXOgFi4OcmtM83JZLhYz92fAhEM',
  appId: '1:905646809594:web:e51c97929896a01c118443',
  messagingSenderId: '905646809594',
  projectId: 'ownerspos',
  authDomain: 'ownerspos.firebaseapp.com',
  storageBucket: 'ownerspos.appspot.com',
  };
  firebase.initializeApp(firebaseConfig);
  const messaging = firebase.messaging();

  /*messaging.onMessage((payload) => {
  console.log('Message received. ', payload);*/
  messaging.onBackgroundMessage(function(payload) {
    console.log('Received background message ', payload);

    const notificationTitle = payload.notification.title;
    const notificationOptions = {
      body: payload.notification.body,
    };

    self.registration.showNotification(notificationTitle,
      notificationOptions);
  });