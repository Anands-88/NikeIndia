
showfeeddata();
async function showfeeddata() {
  let res = await fetch("https://myfirssstapinodejs.herokuapp.com/sneakerFeed");
  let data = await res.json();

  // console.log(data);
  sneakerfeed(data);
  //   console.log(res)
}

function sneakerfeed(res) {
  res.map((elem) => {
    let feeddiv = document.createElement("div");
    feeddiv.setAttribute("class", "feeddiv");

    let imag = document.createElement("img");
    imag.src = elem.product_image[0];

    let categ = document.createElement("p");
    categ.innerHTML = elem.product_category;
    categ.setAttribute = ("class", "categ");

    let nam = document.createElement("p");
    nam.innerHTML = elem.product_name;
    nam.setAttribute = ("class", "nam");

    let comingsoonbut = document.createElement("button");
    comingsoonbut.setAttribute = ("class", "comingsoonbutton");
    comingsoonbut.innerHTML = "Coming Soon";

    feeddiv.append(imag, categ, nam, comingsoonbut);

    document.getElementById("feed-main").append(feeddiv);
  });
}


showinstockdata();
async function showinstockdata() {
  let res = await fetch("https://myfirssstapinodejs.herokuapp.com/sneakersInstock");
  let data = await res.json();

  // console.log(data);
  inStock(data);

}


const inStock = (data) => {
  data.map((elem) => {
    let stockdiv = document.createElement("div");
    stockdiv.setAttribute("class", "stockdiv");

    let imag = document.createElement("img");
    imag.src = elem.product_image[0];

    stockdiv.append(imag);
    document.getElementById("instock-main").append(stockdiv);
  });
};


showUpcomingdata();
async function showUpcomingdata() {
  let res = await fetch("https://myfirssstapinodejs.herokuapp.com/sneakersUpcoming");
  let data = await res.json();

  // console.log(data);
  sneakerUpcoming(data);

}

function sneakerUpcoming(data) {
  console.log("data75",data)
  data.map((elem) => {
    let feeddiv = document.createElement("div");
    feeddiv.setAttribute("class", "feeddiv");

    let imag = document.createElement("img");
    imag.src = elem.product_image[0];

    let categ = document.createElement("p");
    categ.innerHTML = elem.product_category;
    categ.setAttribute = ("class", "categ");

    let nam = document.createElement("p");
    nam.innerHTML = elem.product_name;
    nam.setAttribute = ("class", "nam");

    let comingsoonbut = document.createElement("button");
    comingsoonbut.setAttribute = ("class", "comingsoonbutton");
    comingsoonbut.innerHTML = "Coming Soon";

    feeddiv.append(imag, categ, nam, comingsoonbut);

    document.getElementById("feed-main").append(feeddiv);
  });
}
// function but(){
//   document.querySelector(".feeddiv").addEventListener("click",function(){
//     document.querySelector(".categ").style.display="none"
//     document.querySelector(".nam").style.display="none"
//     document.querySelector(".comingsoonbutton").style.display="block"
//   })
// }

function InStockPage() {
  window.location.href = "sneakersinstock.html";
}
function FeedPage() {
  window.location.href = "sneakersfeed.html";
}
function UpcomingPage() {
  window.location.href = "sneakersupcoming.html";
}
