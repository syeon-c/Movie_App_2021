import { waitForDomChange } from "@testing-library/react"
import React from "react"

function Food({ name, picture }) {
  return <div>
    <h2>I like { name }</h2>
    <img src = { picture }></img> 
  </div>
}

const foodILike = [
  {
    id: 1,
    name: "Kimchi",
    image: 
      "https://www.maangchi.com/wp-content/uploads/2014/06/whole-cabbage-kimchi.jpg"
  },
  {
    id: 2,
    name: "Malatang",
    image: 
      "https://3.bp.blogspot.com/-WUyJMm6cKUY/XPLxAmFAVpI/AAAAAAAA5G4/CgNVF0tTdQ85HYMX7oPnc_igTz-FcIhMgCK4BGAYYCw/s1600/image1-781362.jpeg"
  },
  {
    id: 3,
    name: "Cake",
    image: 
      "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimg1.cookinglight.timeinc.net%2Fsites%2Fdefault%2Ffiles%2Fstyles%2F4_3_horizontal_-_1200x900%2Fpublic%2F1542062283%2Fchocolate-and-cream-layer-cake-1812-cover.jpg%3Fitok%3DR_xDiShk"
  }
];

function renderFood(dish) {
  console.log(dish)
  return <Food key={ dish.id} name={ dish.name } picture={ dish.image } />
}

function App() {
  return (
    <div>
      {foodILike.map(renderFood)}
    </div>
  );
}

export default App;
