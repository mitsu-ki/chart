"use strict";

function chart(el, data) {
  let svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttributeNS(null, "version", "1.1");
  svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  svg.setAttribute("xmlns:xlink", "http://www.w3.org/1999/xlink");

  let text = document.createElementNS("http://www.w3.org/2000/svg", "text");
  text.setAttribute("x", 10);
  text.setAttribute("y", 15);
  text.textContent = "It is under development now.";

  svg.appendChild(text);

  el.appendChild(svg);
}

export default chart;
