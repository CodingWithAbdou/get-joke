import axios from "axios";

const generatJoke = () => {
  axios("https://icanhazdadjoke.com/", {
    headers: { Accept: "application/json" },
  }).then(
    (res) => (document.getElementById("laugh-info").innerHTML = res.data.joke)
  );
};

export default generatJoke;
