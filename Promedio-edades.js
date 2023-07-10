function calcularPromedioEdades(nombre,edad){
  const promedioEdades = personas.reduce((acc,cur)=>acc+cur.edad,0)/personas.length;
   return promedioEdades;}
const personas = [
    { nombre: 'Juan', edad: 20 },
    { nombre: 'María', edad: 18 },
    { nombre: 'Pedro', edad: 22 }
  ];

  const promedioEdades = calcularPromedioEdades(personas);
  console.log(promedioEdades);  