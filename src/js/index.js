import "../style/main.scss";
import iconA from "../image/emoji.png";
import generatJoke from "./generatJoke";

const image = document.createElement("img");
image.src = iconA;

const imageContainer = document.getElementById("img-tag");

imageContainer.append(image);

const button = document.querySelector("button");

button.addEventListener("click", generatJoke);
generatJoke();
