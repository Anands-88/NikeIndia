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
  window.location.href = "/in/checkout"
}


// // // with api

// // document.getElementById("cart-checkout").addEventListener("click", toCheckOutPage);


// // var totalamount = localStorage.getItem("totalamount") || 0



// // function toCheckOutPage() {
// //   window.location.href = "/Pages/checkout.html";
// // }

// // // product_show_add_to_cart_button

// // // cartData()


// // let res;

// // console.log("res in total",res)
// // async function cartData() {

// //   try {
// //     let cartItems = await fetch(
// //       "https://myfirssstapinodejs.herokuapp.com/cart"
// //     );
    
// //     res = await cartItems.json();
// //     console.log("res", res);

    

// //     displaycart(res);
// //     let c= 0
// // //     for(var i = 0; i<=res.length; i++){
// // //       //  if(res.length == 0){
     
       
// // //       //  }
// // //       //  break;
// // // if(res.length == 0){
// // //       //   window.location.reload()
// // //       // break
// // //     }
// // //   }

// // // while (i <= res.length) {
// // //   if (res.length === 0) {
    
// // //     break;
// // //   }
// // //   i = i + 1;
// // // }
// // }
// //     catch (err) {
// //       console.log("error", err.message);
// //     }
  
// // }
// // cartData();

// // // var handling = 150;
// // // async function displaycart(res) {
// // //   let grandtotal = 0;
// // //   res.map((elem) => {
// // // let divcart = document.createElement("div");

// // // divcart.setAttribute("class", "cart-items");

// // //     let imagediv = document.createElement("div");
// // //     let imag = document.createElement("img");
// // //     imag.src = elem.product_id.product_image[0];
// // //     imagediv.append(imag);

// // //     let detailsdiv = document.createElement("div");

// // // let categ = document.createElement("p");
// // // categ.textContent = elem.product_id.product_category;

// // // let title = document.createElement("p");
// // // title.textContent = elem.product_id.product_name;

// // // let remove = document.createElement("button");
// // // remove.textContent = "Remove";
// // // remove.setAttribute = ("class", "remove-button");

// // // remove.addEventListener("click", (event) => {
// // //   event.target.parentNode.parentNode.parentNode.remove();
// // //   console.log(event.target.parentNode.parentNode.parentNode);
// // //   deleteItem(elem);
// // //   window.location.reload();
// // // });

// // //     detailsdiv.append(title, categ, remove);

// // // let pricediv = document.createElement("div");
// // // let price = document.createElement("p");
// // // price.textContent = "₹ " + elem.product_id.product_price;
// // // pricediv.append(price);

// // //     grandtotal += elem.product_id.product_price + handling;

// // //     grand(grandtotal);

// // //     divcart.append(imagediv, detailsdiv, pricediv);

// // //     document.getElementById("cart-div").append(divcart);
// // //   });
// // // }

// // // const grand = (grandtotal) => {
// // //   var subtot = grandtotal - handling;
// // //   document.getElementById("subtotal").textContent = "₹ " + subtot;
// // //   document.getElementById("grandtotal").textContent = "₹ " + grandtotal;

// // //   localStorage.setItem("totalamount", grandtotal);
// // // }
// // var handling = 150;
// // async function displaycart(res) {
// //   document.querySelector("tbody").innerHTML = null;
// //   var grandtotal = 0
  
// //   res.map((elem) => {
// //     let row = document.createElement("tr");

// //     let product = document.createElement("th");

// //     let divcart = document.createElement("div");
// //     divcart.setAttribute("class", "cart-items");

// //     let imag = document.createElement("img");
// //     imag.setAttribute("class","cartprodimg")
// //     imag.src = elem.product_id.product_image[0];

// //     let categ = document.createElement("p");
// //     categ.textContent = elem.product_id.product_category;

// //     let title = document.createElement("p");
// //     title.textContent = elem.product_id.product_name;

// //     let remove = document.createElement("span");
// //     remove.textContent = "Remove";
// //     remove.setAttribute = ("class", "remove-button");

// //     let price = document.createElement("th")
// //     grandtotal += elem.product_id.product_price
// //     price.textContent = "₹"+elem.product_id.product_price;

// //     remove.addEventListener("click", (event) => {
// //       event.preventDefault()
// //       event.target.parentNode.parentNode.parentNode.remove();
// //       console.log(event.target.parentNode.parentNode.parentNode);
// //       deleteItem(elem);

// // });

// //       // window.location.href = "cart.html"
// //       // displaycart(res)
// //     divcart.append(imag, title, categ,price , remove);
// //     product.append(divcart)

// //     // grandtotal += elem.product_id.product_price + handling;

// //     console.log(grandtotal)
// //    row.append(product)
// //    document.querySelector("tbody").append(row);
// //    grand(grandtotal)
// //   });
// // }

// // function grand (subtot){
// //   document.getElementById("subtotal").innerHTML = null;
// //   document.getElementById("grandtotal").innerHTML = null;

// //   document.getElementById("subtotal").textContent = "₹ " + subtot;
  
// //   var grandtotal = subtot + handling
// //   document.getElementById("grandtotal").textContent = "₹ " + grandtotal;
// // };

// // async function deleteItem(elem) {
// //   try {
    
// //     let deleteProductId = await elem._id;
// //     let deleteProduct = await fetch(`https://myfirssstapinodejs.herokuapp.com/cart/${deleteProductId}`,
// //       {
// //         method: "DELETE",
// //         headers: {
// //           "Content-Type": "application/json",
// //         },
// //       }
// //     );

// //     cartData();
   
    
// //   } catch (err) {
// //     console.log(err.message);
// //   }
// }
