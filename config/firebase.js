import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
import Constants from "expo-constants"

const firebaseConfig = {
  apiKey: Constants.manifest.extra.apiKey,
  authDomain: Constants.manifest.extra.authDomain,
  projectId: Constants.manifest.extra.projectId,
  storageBucket: Constants.manifest.extra.storageBucket,
  messagingSederId: Constants.manifest.extra.messagingSederId,
  appId: Constants.manifest.extra.appId,
  databaseURL: Constants.manifest.extra.databaseURK,
}

initializeApp(firebaseConfig);
export const auth = getAuth();
export const database = getFirestore()
