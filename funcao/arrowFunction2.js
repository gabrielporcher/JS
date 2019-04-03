let comparaComThis = function(param){
    this.comparaComThis = param
}

//comparaComThis(global)
console.log(comparaComThis(5))



comparaComThisArrow = (param) =>{
    this.comparaComThisArrow = param
} // Funcionamento diferente da função sem arrow
console.log(comparaComThisArrow(5))
//comparaComThisArrow(this)

//comparaComThisArrow = comparaComThisArrow.bind(obj)
//comparaComThisArrow(obj) // Arrow function é mais prevalente que o bind e o this