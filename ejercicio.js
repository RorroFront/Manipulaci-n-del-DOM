const h1 = document.querySelector("h1");

const p = document.querySelector("p");

const parrafito = document.querySelector(".p")

const pid = document.querySelector("#pid")

const input = document.querySelector("input")

const img = document.createElement("img");


const formulario = document.querySelector("#form");
const input1 = document.querySelector("#calculo1");
const input2 = document.querySelector("#calculo2");
const btn = document.querySelector("#btn");
const resultado = document.querySelector("#result")




// ESTAS LINEAS DE CODIGO RESUELVEN EL PROBLEMA DE LA RECAGRA DE PAGINA AÑADIENDO UN .preventDefault al evento de submit del formulario
// formulario.addEventListener("submit", sumatoria);


// function sumatoria (event) {
//     console.log({event});
//     event.preventDefault();
//     let suma = input1.value + input2.value

//      resultado.innerText = "Este es el resultado:" + suma

// }

// ESTAS LINEAS DE CODIGO RESUELVEN EL PROBLEMA DE LA RECAGRA DE PAGINA AÑADIENDO UN .preventDefault al evento de submit del formulario



// --ESTAS LINEAS DE CODIGO RESUELVEN EL PROBLEMA SIMPLEMENTE AÑADIENDO DESDE HTML UN "TYPE" A LA ETIQUETA HTML "BUTTON" QUE SEA tipe ="button"--

btn.addEventListener('click', sumatoria);

function sumatoria (){

    let suma = input1.value + input2.value;
    resultado.innerText = "Este es el resultado:" + suma

}

// --ESTAS LINEAS DE CODIGO RESUELVEN EL PROBLEMA SIMPLEMENTE AÑADIENDO DESDE HTML UN "TYPE" A LA ETIQUETA HTML "BUTTON" QUE SEA tipe ="button"--








// img.setAttribute("src","https://www.fayerwayer.com/resizer/j5t99xUsygsnO8VAhqzTEvzC9l8=/800x0/filters:format(jpg):quality(70)/cloudfront-us-east-1.images.arcpublishing.com/metroworldnews/55QHEOQRQBEPTF5LRJK57MDEP4.jpg")
// // pid.innerHTML = "";
// console.log(img)
// pid.replaceWith(img)

// console.log(h1);

// console.log(p);


// console.log({
//     h1,
//     p,
//     parrafito,
//     pid,
//     input,
// })



