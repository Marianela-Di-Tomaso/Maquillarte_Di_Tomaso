const Productos = [
    { id: 1 , nombre: "Pestañas XL" ,categoria: "base" ,descripcion: "pestañas para maquillaje artistico", precio: "$2600" , foto: 'https://i.ibb.co/dQVyyB6/base.jpg'},
    { id: 2 , nombre: "Pestañas M" ,categoria: "base" ,descripcion: "pestañas para maquillaje artistico", precio: "$2400" , foto: 'https://i.ibb.co/dQVyyB6/base.jpg'},
    { id: 3 , nombre: "Pestañas S" ,categoria: "base" ,descripcion: "pestañas para maquillaje artistico", precio: "$2500" , foto: 'https://i.ibb.co/dQVyyB6/base.jpg'},
    { id: 4 , nombre: "Base piel morena" ,categoria: "pestaña" ,descripcion: "pestañas para maquillaje artistico", precio: "$2000" , foto: 'https://i.ibb.co/h9C7Zhh/card1.jpg'},
    { id: 5 , nombre: "Base shine" ,categoria: "pestaña" ,descripcion: "pestañas para maquillaje artistico", precio: "$1800" , foto: 'https://i.ibb.co/h9C7Zhh/card1.jpg'},
    { id: 6 , nombre: "Base mate" ,categoria: "pestaña" ,descripcion: "pestañas para maquillaje artistico", precio: "$3000" , foto:'https://i.ibb.co/h9C7Zhh/card1.jpg'}
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