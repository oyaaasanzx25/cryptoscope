/* firebase-config.js — konfigurasi Firebase web CryptoScope.
   SATU sumber config untuk portal (cryptoscope-1.html), landing
   (index.html), dan admin (admin.html) — refactor 25 Nov 2026.
   Nilai di bawah ini PUBLIK (bukan rahasia): keamanan diatur oleh
   Firestore Rules di konsol Firebase, bukan oleh config ini. */
export const firebaseConfig = {
  apiKey: "AIzaSyBer_ApDX_0ivVTEuHolzOisK4unmtUZls",
  authDomain: "cryptoscope-id.firebaseapp.com",
  projectId: "cryptoscope-id",
  storageBucket: "cryptoscope-id.firebasestorage.app",
  messagingSenderId: "913089346916",
  appId: "1:913089346916:web:7b1346ba6cc7f980028e71"
};
