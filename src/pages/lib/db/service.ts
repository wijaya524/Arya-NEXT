import { collection,  getDocs, getFirestore, doc, getDoc } from "firebase/firestore";
import app from "./firebase";

const firestore = getFirestore(app);

export async function  retrieveData(collectionName: string) {
    const snapshot = await getDocs(collection(firestore, collectionName));
    const data =  snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
    }));
    return data;
}

export async function  retrieveDataById(collectionName: string, id: string) {
    const snapshot = await getDoc(doc(firestore, collectionName, id));
    const data =  snapshot.data()
    return data;
}
