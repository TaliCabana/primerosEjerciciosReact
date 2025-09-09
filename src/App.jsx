import Hello from "./components/Hello";
import Ejercicio2 from "./components/ejercicio2";
import Ejercicio3 from "./components/Ejercicio3";

function App() {
  return (
    <div>
      <h2>Ejercicio 1☝🏽</h2>
      <Hello></Hello>

      <h2>Ejercicio 2 ✌🏽</h2>
      <Ejercicio2 amiga="Nori"></Ejercicio2>

      <h2>Ejercicio 3 👌🏽</h2>
      <Ejercicio3></Ejercicio3>
    </div>
  );
}

export default App;
