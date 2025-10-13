export const OrdersList = async () => {
  // Fetch the orders from the API

  const response = await fetch(
    "http://localhost:8088/orders?_expand=metal&_expand=style&_expand=size&_expand=setting"
  );

  const orders = await response.json();

  let html = `<div id="orders_list">
                    <h2>Custom Jewelry Orders</h2>

            `;

  // Generate HTML for each submission using .map()

  let ordersHTML = orders.map((order) => {
    let orderID = String(order.id).padStart(6, "0");

    let settingMultiplier = parseInt(order.settingId);

    const { metal, size, style } = order;
    let orderTotal = metal.price + size.price + style.price;

    if (settingMultiplier === 1) { 
      orderTotal *= 1
    } else if (settingMultiplier === 2 ) {
      orderTotal *= 2
    } else if (settingMultiplier === 3) {
      orderTotal *= 3
    } 

    return `
    <div class="receipt-items">
    <p>Order Number: ${orderID}</p>
    <p 
    data-metal="${metal.metal}"
    data-style="${size.carats}"
    data-size="${style.style}"
    data-setting="${order.settingId}"
    > -\tTotal: ($${parseFloat(orderTotal).toFixed(2)})</p>
    </div>
        `;
  });

  html += ordersHTML.join("");
  html += `</div>`;

  return html;
};
