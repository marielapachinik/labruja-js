

//Declaro las variables en 0 o con texto vacío para poder emplearlas dentro del for

nombre=" ";
edad=0;

for (i=0; nombre!="-1"; i<=5) {
    nombre= prompt("Ingrese un nombre o -1 para terminar");
    
    
    if(nombre==-1){
        alert('Carga de personas finalizada')
        break;
    }
    
    if(i==5){
        alert('Cupo lleno. El maximo permitido es de 5 personas.\n Presione ACEPTAR para cerrar');
        break;
  
    }else{
        edad= Number(prompt("Ingrese la edad"));
        i++;
    }
    let resultado = nombre+ " " + edad;
    alert(nombre +" "+ edad+"\nPresione ACEPTAR para continuar");
    
}


