let comicImage = document.getElementById("comicImage");
let comicSource = document.getElementById("comicSource");
function getLatestComic() {
  fetch(`https://xkcd.now.sh/?comic=latest`)
    .then((response) => response.json())
    .then((data) => {
      // console.log(data);
      comicImage.src = data.img;
      comicSource.innerText = comicImage.src;
      comicImage.alt = data.alt;
    })
    .catch((error) => {
      alert("The API of the comic was not found" + error);
    });
}

getLatestComic();
