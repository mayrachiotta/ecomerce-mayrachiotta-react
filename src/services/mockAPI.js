const data =
    [
        {
            id: 1,
            title: "CLASICO",
            description: "Salmón crudo, palta y queso Philadelphia (Arroz-Alga)",
            img: "/assets/sushi/menu1.jpg",
            // para las img "/assets/sushi/1.img"
            price: 1200,
            stock: 10,
            category: "crudo",

        },
        {
            id: 2,
            title: "PALTOSO",
            description: "Salmón crudo, palta y queso Philadelphia (Arroz-Alga-Palta)",
            img: "/assets/sushi/menu1.jpg",
            price: 1300,
            stock: 8,
            category: "crudo",
        },
        {
            id: 3,
            title: "PASTA DE ATUN",
            description: "Pasta de Salmón cocido con verdeo y queso Philadelphia (Arroz-Alga",
            img: "/assets/sushi/menu1.jpg",
            price: 1200,
            stock: 5,
            category: "cocido",
        },
        {
            id: 4,
            title: "ATUN COCIDO",
            description: "Pasta de Atún cocido con verdeo, queso Philadelphia y palta (Arroz-Alga)",
            img: "/assets/sushi/menu1.jpg",
            price: 1000,
            stock: 10,
            category: "cocido",
        },
        {
            id: 5,
            title: "LANGOSTINO",
            description: "Langostino frito, queso Philadelphia y pepino (Arroz-Alga)",
            img: "/assets/sushi/menu1.jpg",
            price: 1200,
            stock: 15,
            category: "sin salmon",
        },
        {
            id: 6,
            title: "FRITO PANKO",
            description: "Salmón Crudo, palta y queso cremoso (Arroz-Alga-Panko)",
            img: "/assets/sushi/menu1.jpg",
            price: 1500,
            stock: 8,
            category: "crudo",
        },
        {
            id: 7,
            title: "FRITO LANGOSTINO",
            description: "Langostino, Palta y queso cremoso (Arroz-Alga-Panko-Coco)",
            img: "/assets/sushi/menu1.jpg",
            price: 1350,
            stock: 4,
            category: "sin salmon",
        },
        {
            id: 8,
            title: "CANICAMA",
            description: "Canicama, palta y queso Philadelphia (Arroz-Alga-Semillas de sésamo)",
            img: "/assets/sushi/menu1.jpg",
            price: 1100,
            stock: 16,
            category: "sin salmon",
        },
        {
            id: 9,
            title: "ATÚN CRUDO",
            description: "Atún crudo, palta y queso Brie (Arroz-Alga) ",
            img: "/assets/sushi/menu1.jpg",
            price: 1300,
            stock: 4,
            category: "sin salmon",
        },
        {
            id: 10,
            title: "ACEVICHADO",
            description: "Salmón y langostino acevichado con verdeo, cilandro y lima (Arroz-Alga-Boniato Frito)",
            img: "/assets/sushi/menu1.jpg",
            price: 1300,
            stock: 10,
            category: "cocido",
        }
    ];

export default function getItems () {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve(data);
        }, 1500)
    })
} 

export function getItemsbyCategory (categ) {
    console.log('categ', categ)
    return new Promise ((resolve, reject) => {

        let itemFind= data.filter((item) => {
            return item.category === categ;
        });

        setTimeout(() => {
            if(itemFind) resolve(itemFind);
            else 
            reject(new Error ("item no encontrado"))
        }, 1500);
    })
} 

export function getSingleItem (idItem) {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            let itemFind = data.find (item => item.id === parseInt(idItem))
            if(itemFind) 
            resolve(itemFind);
            else 
            reject(new Error ("item no encontrado"))
        }, 1500);
    })
} 