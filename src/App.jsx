import { createRoot } from 'react-dom';
import Pet from "./Pet";

const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <Pet name = "Tiger" animal = "Dog" breed = "Labrador"/>
      <Pet name = "Tota" animal = "Bird" breed = "Parrot"/>
      <Pet name = "Goldy" animal = "Fish" breed = "Gold-fish"/>
    </div>
  )
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App/>);
