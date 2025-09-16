export const OrdersList = async () => {
  // Fetch the orders from the API

  const response = await fetch("http://localhost:8088/orders?_expand=metal&_expand=style&_expand=size");

  const orders = await response.json();

  let html = `<div id="orders_list">
                    <h2>Custom Jewelry Orders</h2>

            `;

  // Generate HTML for each submission using .map()
  

  let ordersHTML = orders.map((order) => {
    let orderID = String(order.id).padStart(6, "0");

    const orderTotal = order.metal.price + order.size.price + order.style.price

    return `
    <div>
    <p>Order Number: ${orderID}</p>
    <p> -\tTotal: $${orderTotal}</p>
    </div>
        `;
  });

  html += ordersHTML.join("");
  html += `</div>`;

  return html;
};
