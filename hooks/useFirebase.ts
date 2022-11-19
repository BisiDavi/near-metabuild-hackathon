import { getDatabase, ref, set, onValue, remove } from 'firebase/database';
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import { toast } from 'react-toastify';
import axios from 'axios';

import { createFirebaseApp } from '@/lib/firebaseConfig';

export default function useFirebase() {
  function initFB() {
    const app = createFirebaseApp();
    return app;
  }
  function getAuthdetails() {
    const app = initFB();
    const auth = getAuth(app);
    const user = auth.currentUser;
    const currentUser: any = {};
    if (user !== null) {
      currentUser.displayName = user.displayName;
      currentUser.email = user.email;
      currentUser.photoURL = user.photoURL;
      currentUser.emailVerified = user.emailVerified;
      currentUser.uid = user.uid;
    }
    return currentUser;
  }

  function initializeDB() {
    const app = initFB();
    const db = getDatabase(app);
    return db;
  }

  function writeData(data: any, dbNode: string) {
    const db = initializeDB();
    return set(ref(db, dbNode), data);
  }

  function readData(dbNode: string) {
    const db = initializeDB();
    const dataRef = ref(db, dbNode);
    onValue(dataRef, (snapshot) => {
      const data = snapshot.val();
      return data;
    });
  }

  function deleteData(dbNode: string) {
    const db = initializeDB();
    const dataRef = ref(db, dbNode);
    return remove(dataRef);
  }

  function googleProvider(setShowOverlay: any) {
    const app = initFB();
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider).then((result) => {
      const user = result.user;
      axios
        .post('/api/email/send-signup-email', {
          email: user.email,
          name: user.displayName,
        })
        .then((response) => console.log('email response', response))
        .catch((err) => console.log('email error', err));
      writeData(JSON.stringify(user), `/users/${user.uid}/`).then(() => {
        toast.success(`Welcome, ${user?.displayName}`);
        setShowOverlay(false);
      });
    });
  }

  return {
    getAuthdetails,
    initFB,
    writeData,
    readData,
    deleteData,
    googleProvider,
  };
}
