//Hello world (parte 3) - Modificar el programa anterior agregando al componente un state con la clave msj: “(from changed state)”, además agregar un botón al presionar este botón (onClick), el state de la clave msj se debe mostrar por pantalla de la siguiente manera: "Hello my friend (from change state)! + boton que diga 'click me' "
import {useState} from 'react';

const Ejercicio3 = () => {
    // estado definido:
    const [mensaje, setMensaje] = useState("Hola mundo ♥")

    // funcion par cambiar el mensaje al hacer click:
    const handleClick = () =>{
        setMensaje("Hola Pini! 🤗 (desde el cambio de estado)!")
    }

    return (
        <div>
            <h1>{mensaje}</h1>
            <button onClick={handleClick}>Click me</button> 
            {/*handleClick: actualiza el mensaje*/}
        </div>
    );
};

export default Ejercicio3;