import { getDatabase, ref, set, onValue, remove } from 'firebase/database';
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';

import { createFirebaseApp } from '@/lib/firebaseConfig';
import axios from 'axios';

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
      return undefined;
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
      writeData(JSON.stringify(user), `/users/${user.uid}/`).then(() => {
        axios.post('/api/send-email', {
          subject: 'Welcome to NEAR-RESUMÉ',
          title: 'Thanks for log in to NEAR-RESUMÉ',
          message:
            'Glad you chose NEAR-RESUMÉ, as the platform to create your resume. Our professional resume template are easy to customize and personalize with your details. \n You can also hire reviewers to review your resume and suggest tips to make you ace your interview, make payment with NEAR tokens. \n Rate our resume and stand a chance to earn 0.1 NEAR token',
          receipent: user.email,
        });
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
    return signOut(auth).then(() => {
      toast.success("You're logged out.");
    });
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
  };
}
