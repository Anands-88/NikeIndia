shownews()
async function shownews(){
 let res = await fetch ("https://myfirssstapinodejs.herokuapp.com/menCloth")
 let data = await res.json();

 console.log(data)
 appenddata(data)
 
//   console.log(res)
}


// showProduct()
function appenddata(data){
data.forEach(function(data){
var container = document.getElementById("men_cloth_container");
// container.innerHTML = null;
var div = document.createElement("div")

div.addEventListener("click",showProduct)
function showProduct(){
   window.location.href = "product_show.html"
   console.log(data)
   localStorage.setItem("product",JSON.stringify(data))
}

var name = document.createElement("p")
name.innerHTML = data.product_name
var cat  = document.createElement("p");
cat.innerHTML = data.product_category
var image = document.createElement("img");
image.src = data.product_image[0]
var price = document.createElement("p");
price.innerHTML = "₹ " + data.product_price;
div.append(image,name,cat,price)
container.append(div)
// showProduct(data)
   })
}


function fiter_data(){
           var selected = document.querySelector("#fitler_women_shoe_clothing").value;
           if(selected === ""){
               showdata(data);
           }
           else{
               var filter = data.filter(({prodcat}) =>{
                   return (prodcat == selected);
               });
               showdata(filter);
           }
       }
   
       function sort_data(){
           var select = document.querySelector("#sort_women_shoe_clothing").value;
     console.log(select)
           setTimeout( function(){
               if(select === "low"){
                   data.sort((a, b) => {
                       return a.prodprice - b.prodprice;
                   })
               }
               if(select === "high"){
                   data.sort((a, b)=>{
                       return b.prodprice - a.prodprice;
                   })
               }
               showdata(data)
           }, 1000);
       }


       var men = document.getElementById("men_page_nav_bar").addEventListener("click",Menpage)
    function Menpage(){
        window.location.href = "men.html"
    }

