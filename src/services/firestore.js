import { initializeApp } from "firebase/app";
import { getFirestore, collection,doc, getDocs, getDoc, query,where, addDoc } from "firebase/firestore";

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

export async function createBuyOrder(orderData) {
    const collectionRef = collection(firestore, "orders");
    let respuesta = await addDoc(collectionRef, orderData);
    
    return respuesta.id;
}

export async function getSingleOrder(idParams) {
    const docRef = doc (firestore, "orders", idParams);
    const docSnapshot = await getDoc (docRef);
    return { ...docSnapshot.data(), id: docSnapshot.id}
}

export async function ExportDataToFirestore () {
    const data =
    [
        {
            id: 1,
            title: "CLASICO",
            description: "Salm??n crudo, palta y queso Philadelphia (Arroz-Alga)",
            img:"https://img.freepik.com/foto-gratis/rollos-sushi-pescado-crudo-fresco_23-2148502481.jpg?w=740&t=st=1665591409~exp=1665592009~hmac=f8ee490eaaea2e0c3f8b4c2f7ea98e6db5ae82992517e319c911498763d81115",
            // para las img "/assets/sushi/1.img"
            price: 1200,
            stock: 10,
            category: "crudo",

        },
        {
            id: 2,
            title: "PALTOSO",
            description: "Salm??n crudo, palta y queso Philadelphia (Arroz-Alga-Palta)",
            img: "https://img.freepik.com/foto-gratis/surtido-sushi-plato_23-2148502509.jpg?w=740&t=st=1665591478~exp=1665592078~hmac=77fb444dd1db8d31cee3d563cf440493eca0d1e779daa485ef5104bf8229a5b1",
           
            price: 1300,
            stock: 8,
            category: "crudo",
        },
        {
            id: 3,
            title: "PASTA DE ATUN",
            description: "Pasta de Salm??n cocido con verdeo y queso Philadelphia (Arroz-Alga)",
            img:"https://img.freepik.com/foto-gratis/plato-sabrosos-peajes-sushi_23-2148502567.jpg?w=740&t=st=1665591491~exp=1665592091~hmac=8c09a204c2ba1d73c0c45ff0c06637ccfbe76c329de4be8577a0962445ee8419",
           
            price: 1200,
            stock: 5,
            category: "cocido",
        },
        {
            id: 4,
            title: "ATUN COCIDO",
            description: "Pasta de At??n cocido con verdeo y queso Philadelphia (Arroz-Alga",
            img: "https://img.freepik.com/foto-gratis/rollos-sushi-pescado-crudo_23-2148502467.jpg?w=740&t=st=1665591546~exp=1665592146~hmac=14a605b1b5b80b208554a9fed16bbaeb3a96a17179591c64bca72b1c5ec8baaa",
            price: 1000,
            stock: 10,
            category: "cocido",
        },
        {
            id: 5,
            title: "LANGOSTINO",
            description: "Langostino frito, queso Philadelphia y pepino (Arroz-Alga)",
            img: "https://img.freepik.com/foto-gratis/plato-espacio-copia-sushi_23-2148502555.jpg?w=740&t=st=1665591560~exp=1665592160~hmac=dca6b8b9274ced2a4e47d2c1a71f13e899f4f2f6df9c7729e62e9045027a3506",
            price: 1200,
            stock: 15,
            category: "sin salmon",
        },
        {
            id: 6,
            title: "FRITO PANKO",
            description: "Salm??n Crudo, palta y queso cremoso (Arroz-Alga-Panko)",
            img: "https://img.freepik.com/foto-gratis/varios-platos-sushi-sobre-fondo-azul_23-2148326379.jpg?w=740&t=st=1665591972~exp=1665592572~hmac=3ed27d194016bcaaef1dc31c5fac179dfd15b15a2b1167bb721ab07804eb9edc",
            price: 1500,
            stock: 8,
            category: "crudo",
        },
        {
            id: 7,
            title: "FRITO LANGOSTINO",
            description: "Langostino, Palta y queso cremoso",
            img: "https://img.freepik.com/foto-gratis/delicioso-sushi-mesa-blanca_23-2148326339.jpg?w=740&t=st=1665591814~exp=1665592414~hmac=8b0c1d932a4dd1052ea825266870209b0988cccdc54533ab70d20b47a73e50f4",
            price: 1350,
            stock: 4,
            category: "sin salmon",
        },
        {
            id: 8,
            title: "CANICAMA",
            description: "Canicama, palta y queso Philadelphia",
            img: "https://img.freepik.com/foto-gratis/plato-cuadrado-sushi_23-2147762765.jpg?w=740&t=st=1665591746~exp=1665592346~hmac=4fdba67b2f5bfccc5d7bfa789982dd19e2c5c316f70e34bc2933f113813b012b ",
            price: 1100,
            stock: 16,
            category: "sin salmon",
        },
        {
            id: 9,
            title: "AT??N CRUDO",
            description: "At??n crudo, palta y queso Brie (Arroz-Alga) ",
            img: "https://img.freepik.com/foto-gratis/plato-sushi-plano-palillos-salsa-soja_23-2148440460.jpg?size=338&ext=jpg&ga=GA1.2.1417122394.1653845364",
            price: 1300,
            stock: 4,
            category: "sin salmon",
        },
        {
            id: 10,
            title: "ACEVICHADO",
            description: "Salm??n y langostino acevichado con verdeo, cilandro y lima (Arroz-Alga-Boniato Frito)",
            img: "https://img.freepik.com/foto-gratis/vista-superior-rollos-sushi-servidos-salsa-soja-wasabi-jengibre_140725-315.jpg?w=740&t=st=1665591861~exp=1665592461~hmac=63763b585d45614a6551b47773205b75ae11ececc41467f44f112d7b67c4b742",
            price: 1300,
            stock: 10,
            category: "cocido",
        }
    ];

    const collectionRef = collection(firestore, "menus");
    for (let item of data) {
        
         const newDoc =  await addDoc (collectionRef, item) ;
         console.log("Doc created", newDoc.id)
    }
}



export default firestore;


