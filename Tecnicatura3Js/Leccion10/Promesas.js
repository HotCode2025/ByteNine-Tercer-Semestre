let miPromesa = new Promise((resolver, rechazar) => {
    let expresion = false;
    if(expresion){
        resolver('Resolvió correctamente');
    } else {
        rechazar('Se produjo un error');
    }
});

miPromesa.then(
    valor => console.log(valor),
    error => console.log(error)
);