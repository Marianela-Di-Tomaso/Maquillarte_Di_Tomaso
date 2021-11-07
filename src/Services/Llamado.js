const Productos = [
    { id: 1 , nombre: "Pestañas XL" , descripcion: "pestañas para maquillaje artistico", precio: "$2600" , foto: 'https://i.ibb.co/h9C7Zhh/card1.jpg'},
    { id: 2 , nombre: "Pestañas XL" , descripcion: "pestañas para maquillaje artistico", precio: "$2600" , foto: 'https://i.ibb.co/h9C7Zhh/card1.jpg'},
    { id: 3 , nombre: "Pestañas XL" , descripcion: "pestañas para maquillaje artistico", precio: "$2600" , foto: 'https://i.ibb.co/h9C7Zhh/card1.jpg'},
    { id: 4 , nombre: "Pestañas XL" , descripcion: "pestañas para maquillaje artistico", precio: "$2600" , foto: 'https://i.ibb.co/h9C7Zhh/card1.jpg'},
    { id: 5 , nombre: "Pestañas XL" , descripcion: "pestañas para maquillaje artistico", precio: "$2600" , foto: 'https://i.ibb.co/h9C7Zhh/card1.jpg'},
    { id: 6 , nombre: "Pestañas XL" , descripcion: "pestañas para maquillaje artistico", precio: "$2600" , foto:'https://i.ibb.co/h9C7Zhh/card1.jpg'}
]


export const llamado = new Promise ((resolve , reject)=> {
    const condicion = true
    if (condicion){
        setTimeout(()=>{
            resolve(Productos)
        }, 3000)
    } else{
        setTimeout(()=>{
            reject ('error')
        }, 3000)
    }
})