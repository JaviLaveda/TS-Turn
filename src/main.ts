import "./style.css";

//set initial count
let count: number = 0;

//value & btns input selection

const value = document.querySelector("#value");

const btns = document.querySelectorAll(".btn");

// const selfInput = (document.getElementById("#input") as HTMLInputElement).value;

//btns event selector (increase+decrease+reset+input)

btns.forEach(function (btn) {
  btn.addEventListener("click", function (event) {
    if (event.currentTarget !== null) {
      const styles = (event.currentTarget as Element).classList;

      if (styles.contains("decrease") && count !== 0) {
        count--;
      } else if (styles.contains("increase")) {
        count++;
      } else if (styles.contains("reset")) {
        count = 0;
        // } else if (styles.contains("input")) {
        //   count = selfInput;
      }

      //get value
      if (value !== null) {
        value.textContent = count.toString().padStart(2, "0");
      }
    }
  });
});
