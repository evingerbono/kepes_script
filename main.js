window.addEventListener("load", init);

function init(){
  const tartalomElem = document.getElementById("tartalom");
  console.log(tartalomElem);

  const tartalomElemEz = document.querySelectorAll(".tart");
  console.log(tartalomElemEz);
  console.log(tartalomElemEz[1]);

  let szoveg = "Szia:)"
  tartalomElemEz[0].innerHTML = "<p>" + szoveg + "</p>";

  let kajaLista = ["Rántott hús", "Gulyásleves", "Gőzgombóc", "Palacsinta", "Húsleves"];
  let kajak = "<ul>";
  for (let index = 0; index < kajaLista.length; index++) {
    kajak += `<li>${kajaLista[index]}</li>`;
  }
  kajak += "</ul>";
  tartalomElem.innerHTML += kajak;

  kepekmegjelenitese();
}

function kepekmegjelenitese() {
  const tartalomKep = document.querySelectorAll("#kepes");
  const kepek = ["./kepek/gozgomboc.jpg", "./kepek/gulyasleves.jpg", "./kepek/husleves.jpg", "./kepek/palacsinta.jpg", "./kepek/rantotthus.jpg"];
  for (let index = 0; index < kepek.length; index++) {
    tartalomKep[0].innerHTML += `<img src="${kepek[index]}" alt="étel"/>`;
  }
}