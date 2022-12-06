const counterContainer = document.querySelector(".counter-container");
        
        function addElement(anchor, elem, classes, innerHTML, attribute, attributeValue) {
            let newElem = document.createElement(elem);
            newElem.classList.add(classes);
            newElem.innerHTML = innerHTML;
            anchor.append(newElem);
            newElem.setAttribute(attribute, attributeValue);
            return newElem; 
        }
        
        const minusButton = addElement(counterContainer, "button", "operator", "-", "data-counter-operator", "minus");
        const numberText = addElement(counterContainer, "div", "value", "0", "data-number", "");
        const plusButton = addElement(counterContainer, "button", "operator", "+", "data-counter-operator", "plus");
        const resetButton = addElement(counterContainer, "button", "reset", "Reset", "data-counter-reset", "");

        counterContainer.addEventListener("click", changeValue);

        function changeValue(event) {
            let target = event.target.closest("BUTTON");
            
            switch(target) {
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