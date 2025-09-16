import { OrdersList } from "./GetTotals.js";
import { MetalOptions } from "./MetalOptions.js";
import { SizeOptions } from "./SizeOptions.js";
import { StyleOptions } from "./StyleOptions.js";
import { SubmissionButton } from "./SubmitSelections.js";

const container = document.querySelector("#container");

const render = async () => {
  const metalOptionsHTML = await MetalOptions();
  const sizeOptionsHTML = await SizeOptions();
  const styleOptionsHTML = await StyleOptions();
  const buttonHTML = SubmissionButton();
  const ordersHTML = await OrdersList();

  const composedHTML = `

        <article class="choices__metals options">
            <section>
                ${metalOptionsHTML}
            </section>

            <section class="choices__sizes options">
                ${sizeOptionsHTML}
            </section>

            <section class="choices__styles options">
                ${styleOptionsHTML}
            </section>

            <section class="button">
                ${buttonHTML}
            </section>
        
        </article>

        <article class="customOrders">
                ${ordersHTML}

        </article>
    `;

  container.innerHTML = composedHTML;
};

document.addEventListener("newSelectionCreated", (event) => {
    console.log("State of data has changed... regenerating HTML...");
    render();
});

render();

