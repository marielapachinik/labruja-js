/* Mi algoritmo consiste en efectuar la carga de personas con un cupo maximo indicado por el usuario.
No se permite ingresar valores nulos */



// 1-Declaro las variables en 0 o con texto vacío para poder emplearlas dentro del for

nombre=" ";
edad=0;
let cupo= Number(prompt("Ingrese el cupo de personas permitido"))

for (i=0; nombre!="-1"; i<=cupo) {
    nombre= prompt("Ingrese un nombre o -1 para terminar");

    // 2- Utilizo un ciclo while que no me permita ingresar valores nulos en el nombre
    
    while(nombre==""){
        alert('No se ingresó ningún nombre');
        nombre= prompt("Ingrese un nombre o -1 para terminar");  
    }
    
    // 3-Establezco el condicional que me permita cerrar el ciclo con -1 en caso de querer terminar la carga
    
    if(nombre==-1){
        
        break;
    }
    
    // 4- Implemento un mensaje cuando el cupo de carga de 5 personas permitidas está lleno y el break para que termine
    
    if(i==cupo){
        alert(`Cupo lleno. El maximo permitido es de ${cupo} personas.\n Presione ACEPTAR para cerrar`);
        break;

    }else{
        edad= Number(prompt("Ingrese la edad"));

        // 5-Utilizo un ciclo while que no me permita ingresar valores nulos en la edad
        
        while(edad==""){
            alert('No se ingresó edad');
            edad= Number(prompt("Ingrese la edad"));  
        }
        i++;
    }
    // Concateno cada nombre con la edad ingresada con un mensaje para continuar
    let resultado = nombre+ " " + edad;
    alert(nombre +"," +" "+ edad +" "+ "años \nPresione ACEPTAR para continuar");

    
}


