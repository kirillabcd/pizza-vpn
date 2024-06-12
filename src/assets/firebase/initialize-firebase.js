import { initializeApp } from 'firebase/app'

const firebaseConfig = {
    apiKey: 'AIzaSyBw8LgM01G3WnFyKPJOvIEd5cNmOASs4eA',
    authDomain: 'pizzavpn-bf635.firebaseapp.com',
    databaseURL: 'https://pizzavpn-bf635-default-rtdb.firebaseio.com',
    projectId: 'pizzavpn-bf635',
    storageBucket: 'pizzavpn-bf635.appspot.com',
    messagingSenderId: '344706182034',
    appId: '1:344706182034:web:49cd6108b3c9ec88326f4b',
    measurementId: 'G-6LF7M7T5GG',
}

export const app = initializeApp(firebaseConfig)
