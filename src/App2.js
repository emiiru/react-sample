
import './App.css';
//import { User } from "./User";
import { Planet } from "./Planet";

function App() {
  //const names = ["Emil", "Gia", "Cody", "Lara"];

  // const users = [
  //   { name: "Emil", age: 29 },
  //   { name: "Gia", age: 28 },
  //   { name: "Cody", age: 15 },
  //   { name: "Lara", age: 18 }
  // ]

  // return (
  //   <div className="App">
  //     {users.map((user, key) => {
  //       return <User name={user.name} age={user.age} />
  //     })}
  //   </div>
  // );

  const planets = [
    { name: "Mars", isGasPlanet: false },
    { name: "Earth", isGasPlanet: false },
    { name: "Jupiter", isGasPlanet: true },
    { name: "Venus", isGasPlanet: false },
    { name: "Neptune", isGasPlanet: true },
    { name: "Uranus", isGasPlanet: true }
  ]

  return (
    <div className="App">
      {planets.map((planet, key) => 
        planet.isGasPlanet && <Planet name={planet.name} /> 
        
      )}
    </div>
  );

}




export default App;
