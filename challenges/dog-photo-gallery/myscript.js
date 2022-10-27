const ul = document.getElementById("listDogPhotos");
function getRandomDogPhoto() {
  fetch(`https://dog.ceo/api/breeds/image/random`)
    .then((response) => response.json())
    .then((urlImage) => {
      // console.log(urlImage.message);
      let li = document.createElement("li");
      ul.appendChild(li);
      let image = document.createElement("img");
      image.className = "images";
      li.appendChild(image);
      image.src = urlImage.message;
      // console.log(urlImage.message);
    })
    .catch((error) => {
      alert("The API of the image not found" + error);
    });
}
