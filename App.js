import { useState } from "react";
import "./App.css";
import CountryForm, { countriesData } from "./components/CountryForm";

function App() {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [population, setPopulation] = useState(null);

  const handleCountrySelect = (selectedCountryName) => {
    const selectedCountryData = countriesData.find(
      (country) => country.name === selectedCountryName
    );

    if (selectedCountryData) {
      setSelectedCountry(selectedCountryName);
      setPopulation(selectedCountryData.population);
    } else {
      setSelectedCountry("");
      setPopulation(null);
    }
  };

  return (
    <div>
      <h1>App</h1>
      <CountryForm onCountrySelect={handleCountrySelect} />
      {selectedCountry && population !== null && (
        <p>
          El país {selectedCountry} posee {population} habitantes.
        </p>
      )}
    </div>
  );
}

export default App;

// Este código define un componente React llamado `App` y explica cómo funciona:

// 1. `const [selectedCountry, setSelectedCountry] = useState("");` y `const [population, setPopulation] = useState(null);`: Estas líneas
// utilizan el hook `useState` para definir dos estados locales en el componente `App`. `selectedCountry` se usa para almacenar el nombre del
// país seleccionado y `population` se utiliza para almacenar la población del país seleccionado. Inicialmente, ambos se establecen
// en un valor vacío (`""`) y `null`, respectivamente.

// 2. `const handleCountrySelect = (selectedCountryName) => { ... }`: Esto define una función llamada `handleCountrySelect`.
// Esta función toma el nombre del país seleccionado como argumento (`selectedCountryName`).

//    - Dentro de `handleCountrySelect`, se utiliza el método `find` en el arreglo `countriesData` para buscar un objeto de país
// que tenga el mismo nombre que el `selectedCountryName`. Si se encuentra un país que coincide, se almacena en `selectedCountryData`.

//    - Luego, se verifica si `selectedCountryData` es válido. Si es así, se actualiza el estado `selectedCountry` con el nombre del país
// seleccionado (`setSelectedCountry`) y se actualiza el estado `population` con la población del país seleccionado (`setPopulation`).

//    - Si no se encuentra un país coincidente, se restablece `selectedCountry` a un valor vacío y `population` a `null`.

// 3. En la función `return`, se define la estructura de la interfaz de usuario del componente `App`.

//    - El componente `CountryForm` se representa utilizando `<CountryForm onCountrySelect={handleCountrySelect} />`. Aquí, se pasa la
// función `handleCountrySelect` como una prop llamada `onCountrySelect` al componente `CountryForm`. Esto permite que `CountryForm`
// notifique al componente `App` cuando un país es seleccionado.

//    - Luego, se utiliza una expresión condicional para mostrar el mensaje "El país {selectedCountry} posee {population} habitantes"
// solo si `selectedCountry` y `population` son valores válidos (diferentes de `null` y no vacíos). Esto evita mostrar el mensaje antes
// de que se seleccione un país.

// En resumen, el componente `App` maneja el estado de la selección de país y la población, y pasa una función (`handleCountrySelect`) al
// componente `CountryForm` para manejar la selección del país. Cuando el usuario selecciona un país en `CountryForm`,
// se actualizan los estados en `App` y se muestra el mensaje con el país y la población seleccionados.
