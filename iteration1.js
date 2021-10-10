/* 1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el 
evento click que ejecute un console log con la información del evento del click

1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input.

1.3 Añade un evento 'input' que ejecute un console.log con el valor del input. */

/* let pulsar=(event)=>{
    console.log('me estas pulsando');
} */

document.querySelector('#btnToClick').addEventListener('click',()=>{
    console.log('me estas pulsando');
});

////////
document.querySelector('.focus').addEventListener('focus',()=>{
    console.log('escriba su nombre');
});

/////////////
let valor=document.querySelector('.value');
valor.addEventListener('input',()=>{
    console.log(valor.value);
})
