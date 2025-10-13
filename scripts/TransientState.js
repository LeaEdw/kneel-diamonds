const transientState = {
  metalId: "",
  sizeId: 0,
  styleId: "",
  settingId: 0,
  id: 0,
};

export const setMetal = (metalSelection) => {
  transientState.metalId = metalSelection;
};

export const setSize = (sizeSelection) => {
  transientState.sizeId = sizeSelection;
};

export const setStyle = (styleSelection) => {
  transientState.styleId = styleSelection;
};

export const setSetting = (settingSelection) => {
  transientState.settingId = settingSelection;
}

export const saveCustomSelections = async () => {
    // Get the current transient state ->
    const ordersToSave = { ... transientState };

    // Validate before sending

    if (
        ordersToSave.metalId === "" ||
        ordersToSave.sizeId === 0 ||
        ordersToSave.styleId === ""
    ) { window.alert("Please complete all selections before submitting");
        return;
    }
  const postSelections = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify(ordersToSave),
  };
  // Send the data to the API
  const response = await fetch("http://localhost:8088/orders", postSelections);

  const newCustomOrder = new CustomEvent("newSelectionCreated");
  document.dispatchEvent(newCustomOrder);
}