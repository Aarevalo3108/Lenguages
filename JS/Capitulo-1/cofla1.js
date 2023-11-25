dineroCofla = prompt("Ingresa tu cantidad de dinero, Cofla: ");
dineroRoberto = prompt("Ingresa tu cantidad de dinero, Roberto: ");
dineroPedro = prompt("Ingresa tu cantidad de dinero, Pedro: ");

precioHeladoAgua = 0.6
precioHeladoCrema = 1
precioHeladoHeladix = 1.6
precioHeladoHeladovich = 1.7
precioHeladoHelardo = 1.8
precioHeladoConfites = 2.9
precioHeladoCuarto = 2.9

if (dineroCofla >= 0.6 && dineroCofla < 1) {
    alert("Comprate el helado de agua pelotudo")
}

else if (dineroCofla >= 1 && dineroCofla < 1.6) {
    alert("Comprate el helado de crema")
}
else if (dineroCofla >= 1.6 && dineroCofla < 1.7) {
    alert("Comprate el Heladix")
}
else if (dineroCofla >= 1.7 && dineroCofla < 1.8) {
    alert("Comprate el Heladovich")
}
else if (dineroCofla >= 1.8 && dineroCofla < 2.9) {
    alert("Comprate el Helardo")
}
else if (dineroCofla >= 2.9){
    alert("Comprate el Confites o el pote de cuarto de kilo")
}
else{
    alert("No te alcanza para nada pelotudo!")
}
