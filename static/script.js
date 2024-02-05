let sliders = document.getElementsByClassName("sliders");

function getTotal() {
  let songVal = parseInt(document.getElementById("songs").value);
  let plotVal = parseInt(document.getElementById("plot").value);
  let castVal = parseInt(document.getElementById("cast").value);
  let boredVal = parseInt(document.getElementById("bored").value);
  let technicalVal = parseInt(document.getElementById("tech").value);
  let originalityVal = parseInt(document.getElementById("originality").value);
  let memorabilityVal = parseInt(document.getElementById("memorability").value);
  let gutVal = parseInt(document.getElementById("gut").value);

  let total =
    songVal +
    plotVal +
    castVal +
    boredVal +
    technicalVal +
    originalityVal +
    memorabilityVal +
    gutVal;
  console.log(total);
  document.getElementById("total").value = total;
  return total;
}

Array.from(sliders).forEach(function (sliders) {
  sliders.addEventListener("click", getTotal);
});

// Get list from database
fetch("http://localhost:3000/list")
  .then((response) => response.json())
  .then((data) => {
    for (let i = 0; i < data.length; i++) {
      list.innerHTML += `
        <li>
        ${data[i].showName}
        </li>
        `;
    }
  });

// Get new show
let btn = document.getElementById("new-show-submit");
let list = document.getElementById("list");

btn.addEventListener("submit", (e) => {
  // e.preventDefault();
  fetch(`http://localhost:3000/list`)
    .then((response) => response.json())
    .then((data) => {
      list.innerHTML = `<li>${data.showName}</li>`;
      console.log(data.showName);
    });
});
