class usuario
{
    nombre= "";
    apellido = "";
    libros=[];
    mascotas=[];

        constructor(nomb,apell,librosLista,mascLista)
        {
            this.nombre = nomb;
            this.apellido= apell;
            this.libros =librosLista;
            this.mascotas = mascLista;
        }
}

class libro
{    
    nombre ="";
    autor ="";
    constructor(nomb,aut)
    {
        this.nombre = nomb;
        this.autor = aut;
    }
}

let datos=
{
    nombre1: "Mayra",
    apellido1: "Lapalma",
    nombre2: "Benjamin",
    apellido2: "Montenegro",
    libro1: "todavia",
    autor1: "Benedetti",
    libro2: "Renuncio",
    autor2: "Casciari",
    mascota1:"Mandy",
    mascota2: "Katara"
}


let libro1= new libro(datos.libro1,datos.autor1);
console.log(libro1.nombre);
console.log(libro1.autor);

let libro2= new libro(datos.libro2,datos.autor2);
console.log(libro2.nombre)
console.log(libro2.autor);

let librosLista =[libro1,libro2];
mascLista = [datos.mascota1,datos.mascota2]

let usu1 = new usuario(datos.nombre1,datos.apellido1,librosLista,mascLista)
console.log(usu1);

getFullName = (nombre,apellido) =>
{
    let nombreMayus= (nombre +" "+ apellido).toUpperCase();
    // este es un ejemplo para mi de algo similar pero con menos codigo
    // let apellidoMayus= (nombre +" "+apellido);
    //return apellidoMayus.toUppercase();

return nombreMayus;
}
console.log(getFullName(usu1.nombre,usu1.apellido));

addMascota();




// countMascotas();
// addBook("","");
// getBookNames([]);

// ejercicio clase 13/9
// res.status(200).json({ frase: `${frase}` });
// });

// app.get("/api/letras/:num", (req, res) => {
//   const { num } = req.params;
//   res.status(200).json({ letra: `${frase[num]}` });
// });

// app.get("/api/palabras/:num", (req, res) => {
//   const { num } = req.params;
//   frase2 = frase.split(" ");
// (split es para dividir un string en un array)
//   res.status(200).json({ palabra: `${frase2[num]}` });
// });


// En el split le pasas un parametro donde te divide
// Por ejemplo si pones un espacio, te cortas las palabras por el espacio
