shownews()
async function shownews(){
 let res = await fetch ("https://myfirssstapinodejs.herokuapp.com/menCloth")
 let data = await res.json();

 console.log(data)
 appenddata(data)
 
//   console.log(res)
}

function appenddata(data){
    var body = document.querySelector("#men_cloth_container");
    body.innerHTML = null;
    data.map(({product_name, product_image, product_description, product_category, product_price})=>{
        var div = document.createElement("div");
            div.addEventListener("click", function(event){
                var obj = {
                    titleprod: product_name,
                    imageprod: product_image,
                    desprod: product_description,
                    catprod: product_category,
                    priceprod: product_price
                };

                var localobj = JSON.parse(localStorage.getItem("product"));

                console.log(obj);

                localStorage.setItem("product", JSON.stringify(obj));

                window.location.href = "product_show.html";
            });

var image  = document.createElement("img");
image.setAttribute("src", product_image[0]);
image.setAttribute("class", "women_prod_image");

var title = document.createElement("h2");
title.innerText = product_name;
title.style.marginLeft = "10px";

var price = document.createElement("p");
price.innerText = "₹ "+product_price;
price.style.marginLeft = "10px";

div.append(image, title, price)

body.append(div)
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

