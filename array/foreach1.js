const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']
 
aprovados.forEach(function(nome, indice){  // Nome do aprovado, e indice no array
    console.log(`${indice+1} - ${nome}`)
})

aprovados.forEach(nome => console.log(nome)) // Retorna todos os nomes do array