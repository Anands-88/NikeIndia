
   var wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
   //     showdata(wishlist)
   showdata(wishlist)
   
   function showdata(wishlist){
       var b = document.getElementById("men_wishlist_container")
       wishlist.map(({prodtitle,prodimg,desprod,prodprice})=>{
           var div = document.createElement("div");
   
           div.addEventListener("click",function(event){
               var obj = {
                   
                         imageprod:prodimg,
                         titleprod:prodtitle,
                         porddes:desprod,
                         priceprod:prodprice
   
               };
   
               console.log(obj);
               localStorage.setItem("wishlist",JSON.stringify(obj))
               window.location.href = "/in/product_show"
           });
           var image = document.createElement("img");
           image.src = prodimg[0];
           image.className += "wishlistimg"
           var name = document.createElement("p")
           name.innerHTML = prodtitle;
           // var category = document.createElement("p")
           // category.setAttribute("class","cat")
           // category.innerHTML = prodcat;
           var price = document.createElement("p");
           price.innerHTML= "₹ "+prodprice;
           var space = document.createElement("br")
           
           div.append(image,name,price);
           b.append(div);
   
       })
   }
   

   