import {
  getDatabase,
  ref,
  set,
  get,
  child,
  onValue,
  remove,
} from 'firebase/database';
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';

import { createFirebaseApp } from '@/lib/firebaseConfig';

export default function useFirebase() {
  const router = useRouter();
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
      return currentUser;
    } else {
      return null;
    }
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

  async function readDbData(dbNode: string) {
    const db = initializeDB();
    const dataRef = ref(db);
    return await get(child(dataRef, dbNode)).then((snapshot) => {
      return snapshot.val();
    });
  }

  function readData(dbNode: string, dataValue: any, setData: any) {
    const db = initializeDB();
    const dataRef = ref(db, dbNode);
    return onValue(dataRef, (snapshot) => {
      const data = snapshot.val();
      if (dataValue === null) {
        setData(data);
      }
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
      writeData(JSON.stringify(user), `/users/${user.uid}/`).then(() => {
        toast.success(`Welcome, ${user?.displayName}`);
        setShowOverlay(false);
      });
    });
  }

  function googleProviderReviewer() {
    const app = initFB();
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider).then((result) => {
      const user = result.user;
      writeData(JSON.stringify(user), `/reviewers/${user.uid}/`).then(() => {
        toast.success(`Welcome reviewer, ${user?.displayName}`);
      });
      router.push('/cv/reviewer/dashboard');
    });
  }

  function authSignOut() {
    const app = initFB();
    const auth = getAuth(app);
    return signOut(auth);
  }

  return {
    getAuthdetails,
    initFB,
    writeData,
    readData,
    deleteData,
    authSignOut,
    googleProvider,
    googleProviderReviewer,
    readDbData,
  };
}
