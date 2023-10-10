
const calculate = () =>{
    let ancho = document.getElementById ('ancho').value;
    let longitud = document.getElementById('longitud').value;
    let area = longitud * ancho;
    let perimetro = (longitud * 2) + (ancho * 2);


document.getElementById("mensaje").innerHTML = "Area del rectangulo : "+area;
document.getElementById("mensajePerimetro").innerHTML = "Perimetro del rectangulo: "+perimetro;

} 


