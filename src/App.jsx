import React from "react";
import { createRoot } from 'react-dom';

const Pet = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("h2", {}, props.animal),
    React.createElement("h2", {}, props.breed),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      animal: "Dog",
      name: "Tiger",
      breed: "Labradore",
    }),
    React.createElement(Pet, { animal: "Bird", name: "Tota", breed: "Parrot" }),
    React.createElement(Pet, {
      animal: "Fish",
      name: "Goldy",
      breed: "Gold-fish",
    }),
  ]);
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(React.createElement(App, {}, null));
