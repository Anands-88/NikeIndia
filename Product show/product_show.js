
    var product = JSON.parse(localStorage.getItem("product"));

    var cart_data = JSON.parse(localStorage.getItem("cart")) || [];
            console.log(cart_data);

    var wishlist_data = JSON.parse(localStorage.getItem("wishlist")) || [];

    showProduct(product);

    function showProduct({catprod, desprod, imageprod, priceprod, titleprod}){
        var body= document.querySelector("#Product_show_main_div");
            body.innerHTML = null;

        var imgdiv = document.createElement("div");
            imgdiv.setAttribute("id", "imgdiv-productshow");

        var mainimg = document.createElement("img");
            mainimg.setAttribute("src", imageprod[0]);
            mainimg.setAttribute("id", "main-image-productshow");

        var subimgdiv = document.createElement("div");
            subimgdiv.setAttribute("id", "subimgdiv-productshow")

        var subimg1 = document.createElement("img");
            subimg1.setAttribute("src", imageprod[1]);
            subimg1.setAttribute("class", "main-subimg-productshow");

        var subimg2 = document.createElement("img");
            subimg2.setAttribute("src", imageprod[2]);
            subimg2.setAttribute("class", "main-subimg-productshow")

        var div = document.createElement("div");
            div.setAttribute("id", "product_show_div")

        var title = document.createElement("h1");
            title.innerText = titleprod;
            title.id = "product_show_title"

        var price = document.createElement("h3");
            price.innerText = "₹ "+priceprod;
            price.id = "product_show_price";

        var tax = document.createElement("p");
            tax.innerText = "(Incl. of taxes and duties)";
            tax.id = "product_show_tax";

        var addcart = document.createElement("button");
            addcart.textContent = "Add to cart";
            addcart.id = "product_show_add_to_cart_button";
            addcart.addEventListener("click", function(event){
                event.preventDefault();
                var obj = {
                    prodtitle: titleprod,
                    prodcat: catprod,
                    proddes: desprod,
                    prodimg: imageprod,
                    prodprice: priceprod,
                }
                cart_data.push(obj);
                localStorage.setItem("cart", JSON.stringify(cart_data));
            })

        var wishlist = document.createElement("button");
            wishlist.textContent = "Favourite";
            wishlist.id = "product_show_wishlist_button";
            wishlist.addEventListener("click", function(event){
                event.preventDefault();

                var obj = {
                    prodtitle: titleprod,
                    prodcat: catprod,
                    proddes: desprod,
                    prodimg: imageprod,
                    prodprice: priceprod,
                }

                wishlist_data.push(obj);
                localStorage.setItem("wishlist", JSON.stringify(wishlist_data));
            })

        var br = document.createElement("br")
            

        var description = document.createElement("p");
            description.innerText = desprod;
            description.id = "product_show_description";

        document.title = titleprod+", Nike IN";

        div.append(title, price, tax, addcart, br, wishlist, description);

        subimgdiv.append(subimg1, subimg2);

        imgdiv.append(mainimg, subimgdiv);

        body.append(imgdiv, div);
    }

    let kids;
    let men;
    let women;

    kidData()

    async function kidData(){
     let res = await fetch ("https://myfirssstapinodejs.herokuapp.com/kidsShoes")
     kids = await res.json();
     
     menData()
    //   console.log(res)
    }

    async function menData(){
        let res = await fetch ("https://myfirssstapinodejs.herokuapp.com/menShoes")
        men = await res.json();
        
        womenData()
       //   console.log(res)
       }

       async function womenData(){
        let res = await fetch ("https://myfirssstapinodejs.herokuapp.com/womenShoes")
        women = await res.json();
        showMoreSimilar(kids, men, women)
       //   console.log(res)
       }

    function showMoreSimilar(kids, men, women){
        var index = Math.floor(Math.random()*10);

        var pdata =[];

        pdata.push(kids[index]);
        pdata.push(men[index]);
        pdata.push(women[index]);

        console.log(pdata)

        var body = document.querySelector("#product_show_more_similar_products_show");
            body.innerHTML = null;

        pdata.forEach(({product_name, product_image, product_price, product_description, product_category})=>{
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

                // window.location.href = "product_show.html";
            });

            var image = document.createElement("img");
                image.src = product_image[1];
                image.setAttribute("class", "similar_product_image")

            var title = document.createElement("h2");
                title.innerText = product_name;

            var price = document.createElement("p");
                price.innerText = "₹ "+product_price;

            div.append(image, title, price);

            body.append(div);
        })
    };
