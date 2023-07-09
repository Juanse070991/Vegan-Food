export const firebaseConfig = {
    apiKey: "AIzaSyA_6EWObS7xbrGZB_X7OJs-ShWbTyrk3SU",
    authDomain: "vegan-eco.firebaseapp.com",
    projectId: "vegan-eco",
    storageBucket: "vegan-eco.appspot.com",
    messagingSenderId: "585357306983",
    appId: "1:585357306983:web:3329b15ec0d7b26b81b8c2"
  };

  export const actionCodeSettingsVerification = {
    url:
      process.env.NODE_ENV === "development"
        ? "http://localhost:3000/"
        : "https://vegan-eco.web.app",
  };
  export const actionCodeSettingsForgotPassword = {
    url:
      process.env.NODE_ENV === "development"
        ? "http://localhost:3000/login"
        : "https://vegan-eco.web.app",
  };