import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/config";

export async function getProductos() {
    const querySnapshot = await getDocs(collection(db, 'productos'))

    const productos = querySnapshot.docs.map(doc => ({
        id: doc.id, ...doc.data(),
    }))

    return productos;
}
