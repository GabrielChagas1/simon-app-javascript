//Initial References
const countValue = document.getElementById("count");
const colorPart = document.querySelectorAll(".color-part");
const container = document.querySelector(".container");
const startButton = document.querySelector("#start");
const result = document.querySelector("#result");
const wrapper = document.querySelector(".wrapper");
//Mapping Colors By Creating Colors Object
const colors = {
  color1: {
    current: "#068e06",
    new: "#11e711",
  },
  color2: {
    current: "#950303",
    new: "#fd2a2a",
  },
  color3: {
    current: "#01018a",
    new: "#2062fc",
  },
  color4: {
    current: "#919102",
    new: "#fafa18",
  },
};
