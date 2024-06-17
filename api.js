import { initializeApp } from "firebase/app";
import {
    getFirestore,
    collection,
    doc,
    getDocs,
    getDoc,
    query,
    where
} from "firebase/firestore/lite"


const firebaseConfig = {
  apiKey: "AIzaSyBdLLmvJ4W44GNFisCj35b6U_Vy1Itx7YU",
  authDomain: "ea-dental-36bd1.firebaseapp.com",
  projectId: "ea-dental-36bd1",
  storageBucket: "ea-dental-36bd1.appspot.com",
  messagingSenderId: "131376040750",
  appId: "1:131376040750:web:9d1308cfb7b190b78348bf",
  measurementId: "G-6PL6TW5S8C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

const categosCollecRef = collection(db, "categories")

export async function categories() {
    const querySnapshot = await getDocs(categosCollecRef)
    const dataArr = querySnapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id
    }))
    return dataArr
}

export async function getVan(collectionName) {
    const collecRef = collection(db, collectionName)
    const querySnapshot = await getDocs(collecRef)

    const dataArr = querySnapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id
    }))
    return dataArr
}

// export async function getVan(id) {
//     const docRef = doc(db, "vans", id)
//     const vanSnapshot = await getDoc(docRef)
//     return {
//         ...vanSnapshot.data(),
//         id: vanSnapshot.id
//     }
// }

export async function getHostVans() {
    // const q = query(categosCollecRef, where("hostId", "==", "123"))
    // const querySnapshot = await getDocs(q)
    // const dataArr = querySnapshot.docs.map(doc => ({
    //     ...doc.data(),
    //     id: doc.id
    // }))
    // return dataArr
}

export async function loginUser(creds) {
    const res = await fetch("/api/login",
        { method: "post", body: JSON.stringify(creds) }
    )
    const data = await res.json()

    if (!res.ok) {
        throw {
            message: data.message,
            statusText: res.statusText,
            status: res.status
        }
    }

    return data
}