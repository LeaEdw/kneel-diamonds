import { setMetal } from "./TransientState.js";

const handleMetalChoice = (event) => {
  if (event.target.name === "metal") {
    let updatedMetalOption = parseInt(event.target.value)
    setMetal(updatedMetalOption);
    console.log(updatedMetalOption)
  }
};

export const MetalOptions = async () => {
  const response = await fetch("http://localhost:8088/metals");
  const metals = await response.json();

  document.addEventListener("change", handleMetalChoice);

  let html = `<h2>Metals</h2>`;

  const metalsHTML = metals.map((metal) => {
    return `<div>
                <input type="radio" name="metal" value='${metal.id}' data-price="${metal.price}" /> ${metal.metal}
            </div>`;
  });

  html += metalsHTML.join("");

  return html;
};
