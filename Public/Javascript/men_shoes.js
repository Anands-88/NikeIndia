let data;
shownews()

 async function shownews(){
  let res = await fetch ("https://myfirssstapinodejs.herokuapp.com/menShoes")
  data = await res.json();
  console.log(data)
  appenddata(data)
//   console.log(res)
}
// showProduct()
function appenddata(data){
    var body = document.querySelector("#men_shoes_container");
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

                window.location.href = "/in/product_show";
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
        showData(data);
    }
    else{
        var filter = data.filter(({product_category}) =>{
            return (product_category == selected);
        });
        showData(filter);
    }
}

function sort_data(){
    var select = document.querySelector("#sort_women_shoe_clothing").value;

    setTimeout( function(){
        if(select === "low"){
            data.sort((a, b) => {
                return a.product_price - b.product_price;
            })
        }
        if(select === "high"){
            data.sort((a, b)=>{
                return b.product_price - a.product_price;
            })
        }

        showData(data)
    }, 100);
}


    
