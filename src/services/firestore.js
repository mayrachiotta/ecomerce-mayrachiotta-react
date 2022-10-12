import { initializeApp } from "firebase/app";
import { getFirestore, collection,doc, getDocs, getDoc, query,where } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDupmhT8mAl94mq5nuR05QXDy3y3VuUsTs",
    authDomain: "paulosushireact.firebaseapp.com",
    projectId: "paulosushireact",
    storageBucket: "paulosushireact.appspot.com",
    messagingSenderId: "846761402024",
    appId: "1:846761402024:web:86f7359cdf51cac2a6ac9d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
export async function getItems() {
    const mismenus = collection(firestore, "menus");
    let respuesta = await getDocs(mismenus);
    let dataDocs = respuesta.docs.map((documento) => {
        let docFormateado = { ...documento.data(), id: documento.id };
        return docFormateado;
        
    }); 
    return dataDocs;
}

export async function getSingleItem(idParams) {
 const docRef = doc (firestore, "menus", idParams);
 const docSnapshot = await getDoc (docRef);
 return { ...docSnapshot.data(), id: docSnapshot.id}
 
}

export async function getItemsbyCategory(categParams) {
    const collectionRef = collection (firestore, "menus");
    const queryCategory = query(
        collectionRef,
        where ("category", "==", categParams)
    );
        const respuesta = await getDocs(queryCategory);
        let dataDocs = respuesta.docs.map((documento) => {
            let docFormateado = {...documento.data(), id: documento.id};
            return docFormateado
        });
        return dataDocs;


}





export default firestore;


