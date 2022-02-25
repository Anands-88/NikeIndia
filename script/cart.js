var temparr =  JSON.parse(localStorage.getItem("cart"))||[]
// console.log(temparr)

// this function is for adding item in cart
let handling = 150;
const displaycart = (temparr)=>{
  let subtotal = 0;
  
  let grandtotal = 0;
  document.getElementById("cart-div").innerHTML = null;
 temparr.map((elem,index)=>{
  let cartdiv = document.createElement("div");
  cartdiv.setAttribute("class","cart-items");

  let imagediv = document.createElement("div");
  let imag = document.createElement("img");
  imag.src = elem.prodimg[0];
  imagediv.append(imag)

  let detailsdiv = document.createElement("div")

  let categ = document.createElement("p")
  categ.innerHTML = elem.prodcat

  let title = document.createElement("p")
  title.innerHTML = elem.prodtitle

  let remove = document.createElement("button")
  remove.innerHTML = "Remove"
  remove.setAttribute = ("class","remove-button")
  detailsdiv.append(title,categ,remove)

  remove.addEventListener("click", function(){
    removeitem(index)
    
  })
 

  let pricediv = document.createElement("div")
  let price = document.createElement("p")
  price.innerHTML = "₹ "+elem.prodprice;
  pricediv.append(price)

  grandtotal+= elem.prodprice+handling
  
  grand(grandtotal)

  cartdiv.append(imagediv,detailsdiv,pricediv)
  
  document.getElementById("cart-div").append(cartdiv)
  
 })
}

  const grand = (grandtotal) => {
    var subtot = grandtotal-handling
  document.getElementById("subtotal").textContent = "₹ "+subtot
  document.getElementById("grandtotal").textContent = "₹ "+grandtotal 
  
    localStorage.setItem("totalamount",grandtotal)
  
  }



  displaycart (temparr)
// this function is for removing items from the cart
function removeitem(index){
//  console.log(temparr)
  temparr.splice(index,1)
  displaycart (temparr)  
  localStorage.setItem("cart",JSON.stringify(temparr))
  
}

document.getElementById("cart-checkout").addEventListener("click",toCheckOutPage)


function toCheckOutPage(){
  window.location.href = "/Pages/checkout.html"
}