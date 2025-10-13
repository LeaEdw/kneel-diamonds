import { OrdersList } from "./GetTotals.js";
import { MetalOptions } from "./MetalOptions.js";
import { SizeOptions } from "./SizeOptions.js";
import { StyleOptions } from "./StyleOptions.js";
import { SettingChoice } from "./SettingSelector.js";
import { SubmissionButton } from "./SubmitSelections.js";

const container = document.querySelector("#container");

const render = async () => {
  const metalOptionsHTML = await MetalOptions();
  const sizeOptionsHTML = await SizeOptions();
  const styleOptionsHTML = await StyleOptions();
  const buttonHTML = SubmissionButton();
  const ordersHTML = await OrdersList();
  const settingHTML = SettingChoice();

  const composedHTML = `

        <article class="allChoices">
            <section class="choices">
                ${metalOptionsHTML}
            </section>

            <section class="choices">
                ${sizeOptionsHTML}
            </section>

            <section class="choices">
                ${styleOptionsHTML}
            </section>

            
            <section class="choices">
                ${settingHTML}
            </section>
        </article>
            <div class="submit-button-section">
                ${buttonHTML}
            </div>
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
