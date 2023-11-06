export const countriesData = [
  { code: "ARG", name: "Argentina", population: 45810000 },
  { code: "FRA", name: "Francia", population: 67750000 },
  { code: "GER", name: "Alemania", population: 83200000 },
];

function CountryForm({ onCountrySelect }) {
  return (
    <div>
      <p>Selecciona un país:</p>
      <select onChange={(e) => onCountrySelect(e.target.value)}>
        <option value="">Selecciona un país</option>
        {countriesData.map((country) => (
          <option key={country.code} value={country.name}>
            {country.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default CountryForm;

// Esta parte de código en React es responsable de definir un componente llamado `CountryForm` que muestra un mensaje aclaratorio y un elemento
// `select` (un dropdown o menú desplegable) con una lista de países. Aquí está cómo funciona:

// 1. `export const countriesData = [...]`: Esto define una constante llamada `countriesData` que almacena un arreglo de objetos,
// cada uno representando información sobre un país. Cada objeto tiene tres propiedades: `code` (código del país), `name` (nombre del país) y
// `population` (población del país). Estos datos son exportados para que puedan ser utilizados en otros componentes o archivos de tu aplicación.

// 2. `function CountryForm({ onCountrySelect })`: Esto define una función que representa un componente React llamado `CountryForm`.
// El componente acepta una prop llamada `onCountrySelect`, que es una función que se pasará desde el componente padre (`App` en este caso)
// y se utilizará para manejar la selección de un país.

// 3. El componente `CountryForm` renderiza un elemento `div` que contiene un mensaje aclaratorio y un elemento `select`. Dentro del `select`
// , se utiliza un bucle `map` para generar una serie de `option` elementos basados en los datos de `countriesData`. Cada `option` representa
// un país y muestra su nombre. El `value` de cada `option` se establece en el nombre del país.

// 4. El `select` tiene un evento `onChange` que está configurado para llamar a la función `onCountrySelect` cuando el usuario selecciona un
// país en el menú desplegable. La función `onCountrySelect` recibe el valor seleccionado, que en este caso es el nombre del país.

// En resumen, este componente `CountryForm` se utiliza para mostrar un menú desplegable con una lista de países, y cuando el usuario
// selecciona un país, llama a la función `onCountrySelect` para manejar esa selección en el componente padre. Los datos de los países se
// toman del arreglo `countriesData` que se exporta desde este archivo.
