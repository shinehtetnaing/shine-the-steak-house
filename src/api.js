import { initializeApp } from "firebase/app";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  limit,
  orderBy,
  query,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDxEtM2k5qZmPU-PDefc6T07lQgzilPdEg",
  authDomain: "steak-house-3cbdd.firebaseapp.com",
  projectId: "steak-house-3cbdd",
  storageBucket: "steak-house-3cbdd.appspot.com",
  messagingSenderId: "871117732997",
  appId: "1:871117732997:web:93e3ccad826152cbd0fdec",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const menuCollectionRef = collection(db, "menu");

export async function getMenu() {
  const querySnapshot = await getDocs(menuCollectionRef);
  const dataArr = querySnapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));

  return dataArr;
}

export async function getMenuDetail(id) {
  const docRef = doc(db, "menu", id);
  const menuSnapshot = await getDoc(docRef);

  return {
    ...menuSnapshot.data(),
    id: menuSnapshot.id,
  };
}

export async function getBestMenu() {
  const q = query(menuCollectionRef, orderBy("price", "desc"), limit(3));
  const querySnapshot = await getDocs(q);
  const dataArr = querySnapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));

  return dataArr;
}
