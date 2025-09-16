import { setSize } from "./TransientState.js";

const handleSizeChoice = (event) => {
  if (event.target.name === "size") {
    let updateSizeOption = parseInt(event.target.value)
    setSize(updateSizeOption);
    console.log(updateSizeOption)
  }
};

export const SizeOptions = async () => {
  const response = await fetch("http://localhost:8088/sizes");
  const sizes = await response.json();

  document.addEventListener("change", handleSizeChoice);

  let html = `<h2>Carats</h2>
                <select required name="size" id="sizes-dropdown">
                    <option  value="0" disabled selected > Select a size </option>
                `;

  const sizesHTML = sizes.map((size) => {
    return `
                <option value="${size.id}" data-price="${size.price}">${size.carats}</option>
            `;
  });

  html += sizesHTML.join("");

  html += `</select>`;

  return html;
};
