function sumar(array)
{
    let resultado = 0 
    for (let i = 0; i < array.length; i ++) {
    resultado += array[i]    
        
    }
    console.log (resultado)
}

console.log(sumar([1, 2, 3])) // 6
console.log(sumar([10, 8, 12, 5])) // 35
console.log(sumar([])) // 0
