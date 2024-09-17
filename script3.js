const heading = document.getElementById("heading");

heading.style.textAlign = "center";
heading.style.color = "white";
heading.style.background = "black";
heading.style.borderRadius = "6px";
heading.style.padding = "10px 0";
// btn parent
let btnParent = document.getElementById("btnParent");
btnParent.style.position = "relative";
btnParent.style.display = "flex";
btnParent.style.textAlign = "center";
btnParent.style.justifyContent = "center";
// button
const btn = document.getElementById("btn");
btn.style.position = "fixed";
btn.style.top = "50%";
btn.style.left = "50%";
btn.style.background = "yellow";
btn.style.fontSize = "30px";
btn.style.fontWeight = "bold";
btn.style.border = "none";
btn.style.borderRadius = "8px";
btn.style.padding = "6px 16px";
btn.style.cursor = "pointer";
btn.style.userSelect = "none";
// list
btn.addEventListener("click", () => {
const item = document.createElement("li");
item.textContent ="I belive you can do it.";
userlist.appendChild(item);

})





