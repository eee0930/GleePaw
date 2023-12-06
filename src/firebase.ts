import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBzKCdcqWuwxwKyh6p-Wh5ZHi6t7jkLk3I',
  authDomain: 'glee-paw.firebaseapp.com',
  projectId: 'glee-paw',
  storageBucket: 'glee-paw.appspot.com',
  messagingSenderId: '76953814765',
  appId: '1:76953814765:web:5df3f1da24e1452c8eaee4',
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
