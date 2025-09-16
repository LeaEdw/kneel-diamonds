import { setStyle } from "./TransientState.js";

const handleStyleChoice = (event) => {
  if (event.target.name === "styles") {
    let updatedStyleOption = parseInt(event.target.value)
    setStyle(updatedStyleOption)
    console.log(updatedStyleOption)
  }
};

export const StyleOptions = async () => {
  const response = await fetch("http://localhost:8088/styles");
  const styles = await response.json();

  document.addEventListener("change", handleStyleChoice);

  let html = `<h2>Styles</h2>`;

  const stylesHTML = styles.map((style) => {
    return `<div>
                <input type="radio" name="styles" value='${style.id}' data-price="${style.price}"/> ${style.style}
            </div>`;
  });

  html += stylesHTML.join("");

  return html;
};
