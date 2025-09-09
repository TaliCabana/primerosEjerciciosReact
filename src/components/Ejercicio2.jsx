// Hello world (parte 2)- Modificar el componente anterior y enviar mediante props el valor “My friend” de manera que el mensaje quede de la siguiente forma: "Hello mi amiga! ♥"

const Ejercicio2 = ({amiga}) => {
    return (
        <h1>
            Hello {amiga}! ♥
        </h1>
    );
};

export default Ejercicio2;