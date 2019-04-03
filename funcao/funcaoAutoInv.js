//Serve para fugir do escopo global, só funciona o que esta dentro do escopo

(function (){
    console.log('Será executado na hora!')
    console.log('Foge do escopo mais abrangente!')
})()