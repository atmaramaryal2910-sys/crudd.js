import { createSingleItem } from "./single-item.js";

// Create Items Container
export function createItems(itemsArray, onClear) {
  const container = document.createElement("div");
  container.className = "items";

  if (itemsArray.length === 0) {
    container.innerHTML = `
      <div class="empty-state">
        <i class="fa-solid fa-cart-shopping"></i>
        <p>Your list is empty</p>
      </div>
    `;
    return container;
  }

  itemsArray.forEach((item) => {
    const itemElement = createSingleItem(item);
    container.appendChild(itemElement);
  });

  // Add Clear All Button
  const clearButton = document.createElement("button");
  clearButton.className = "clear-btn";
  clearButton.textContent = "clear items";
  clearButton.addEventListener("click", onClear);
  container.appendChild(clearButton);

  return container;
}
