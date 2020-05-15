const DOMNodeCollection = require("./dom_node_collection.js")

window.$l = $l
function $l(selectedClass) {
    if (selectedClass instanceof HTMLElement === true) {
      const elementList = new DOMNodeCollection([selectedClass]);
      return elementList;
  } else if(typeof selectedClass === "string") { 
    const elementList = document.querySelectorAll(selectedClass);
    const collect = Array.from(elementList);
    return new DOMNodeCollection(collect);
  }
}