export function gallery(data, parent) {
  data.forEach(d => {
    const t = createElement("img");
    t.src = "imgs/" + d.i;
    parent.appendChild(t);
  });
}

function createElement(type) {
  return document.createElement("img");
}
