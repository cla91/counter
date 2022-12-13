const counterContainer = document.querySelector(".counter-container");

function addElement(anchor, elem, elemProperties) {
  let newElem = document.createElement(elem);
  
  elemProperties.classes.length &&
    newElem.classList.add(...elemProperties.classes);

  newElem.innerHTML = elemProperties.innerHTML;
  anchor.append(newElem);

  if (Object.entries(elemProperties.attributes).length != 0) {
    for (let [attribute, attributeValue] of Object.entries(
      elemProperties.attributes
    )) {
      newElem.setAttribute(attribute, attributeValue);
    }
  }

  return newElem;
}

const minusButtonProperties = {
  innerHTML: "-",
  classes: ["operator"],
  attributes: {
    "data-counter-operator": "minus",
  },
};
const plusButtonProperties = {
  innerHTML: "+",
  classes: ["operator"],
  attributes: {
    "data-counter-operator": "plus",
  },
};
const resetButtonProperties = {
  innerHTML: "Reset",
  classes: ["reset"],
  attributes: {
    "data-counter-reset": "",
  },
};
const numberTextProperties = {
  innerHTML: "0",
  classes: ["value"],
  attributes: {
    "data-number": "",
  },
};
const minusButton = addElement(counterContainer,"button", minusButtonProperties);
const numberText = addElement(counterContainer, "div", numberTextProperties);
const plusButton = addElement(counterContainer, "button", plusButtonProperties);
const resetButton = addElement(counterContainer, "button", resetButtonProperties);

counterContainer.addEventListener("click", changeValue);

function changeValue(event) {
  let target = event.target.closest("BUTTON");

  switch (target) {
    case plusButton:
      numberText.innerHTML++;
      break;

    case minusButton:
      numberText.innerHTML--;
      break;

    case resetButton:
      numberText.innerHTML = 0;
      break;
  }
}
