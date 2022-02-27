
    let products;
    let product =  document.querySelector('#sale_products')

    const sales_data = async() =>
    {
        try{
            const data = await fetch("https://myfirssstapinodejs.herokuapp.com/sale")
            products = await data.json();
            getdata(products,product) // adding parameter to imported funtion get data(data,location)
        }
        catch(error)
        {
            console.log(error)
        }

    } 
    sales_data()
    
    // setdata() calling setdata to store the details to the local storage  // gettin element from HTML
     
// ------------------------------------------------SORT SECTION STARTS ------------------------------------- //
sort_price() // calling sort_price to open sort section
    function sort_price()
    {   
        document.querySelector("#sort_arrow").addEventListener("click",() => // event listner
        {
            event.target.style.transform = "translate(-15px,30px) rotate(270deg)" // making arrow upwards

            document.querySelector("#sale_sorting_list").innerHTML = ""; // content inside sort section
            let low = document.createElement("h6")
            low.textContent = "Price: Low to High"; // Putting contents
            let high = document.createElement("h6")
            high.textContent = "Price: High to Low";
            
            document.querySelector("#sale_sorting_list").append(low,high) // appending to the Sort List
            
            document.querySelector("#sale_sorting_list").style.cssText =  // styles to sort body
            `background:white;
            width:130px;
            position: fixed;
            top:78px;
            box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);`;
        

            document.querySelector("#sale_sorting_list").addEventListener("click",() => // event listner to sort body
            {
            
               const items = products.sort(function(a,b){ //  sort funtion upon clicking 
                    
                    if(event.target.textContent == low.textContent) // if clicked low to high text
                    {
                        return Number(a.product_price) - Number(b.product_price) 
            
                    }
                    else if(event.target.textContent == high.textContent) // if clicked on high to low
                    { 
                        return Number(b.product_price) - Number(a.product_price)
                    }
                })

                getdata(items,product) // adding sorted data as parameter 

            })

            document.querySelector("#sort_arrow").addEventListener("click",() => // make arrow downwards upon clicking second time
            {
                event.target.style.transform = "translateY(35px) rotate(90deg)"; // changing arrow direction
                document.querySelector("#sale_sorting_list").style.display = "none"; // not displaying upon second click
                sort_price() //  calling again the function so returns to normal
            })
        })
    } 
// --------------------------------------- FILTER SECTION -----------------------------------------------------//

filter_it()  // calling function

    function filter_it()  //FILTER SECTION
    {
        document.querySelector("#filter_sec").addEventListener("click",() => // if clicked on "SHOW FILTERS" image
        {
            document.querySelector("#filter_sec > p").textContent = "Hide Filters"; // Changes to Hide filters
            document.querySelector("#sale_products").style.width = "80%" // Products box size reduced

            let filter_box = document.querySelector("#filter_corner") // Calling filter box element

            filter_box.style.cssText =  // Giving styles here so that only shows if clicked on filter
            `width:15%;
            margin-left:1%;
            position:sticky;
            top:73px;
            box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
            height:290px;
            text-align:center;`;
            
            let category = document.createElement("h4")  // creating to put heading
            category.textContent = "Categories";  // Adding categories heading

            let categories = document.createElement("div") // a BOX of contents (buttons and filter categories)
        
            filter_box.append(category) // appending it filter box  114 line

            filter_cat(products,filter_box,categories,"Men") // Adding categaries Men,Women,Kids,Shirts,Shoes
            filter_cat(products,filter_box,categories,"Women")
            filter_cat(products,filter_box,categories,"Kids")
            filter_cat(products,filter_box,categories,"Shoes")
            filter_cat(products,filter_box,categories,"Cloths")

            document.querySelector("#filter_sec").addEventListener("click",() => // If clicked on filter again to close the filters
            {
                document.querySelector("#filter_sec > p").textContent = "Show Filters"; // Changed to Show filters
                filter_box.style.display = "none"; // closes the filter box
                document.querySelector("#sale_products").style.width = "96%"; // product box to normal
                filter_box.innerHTML = ""; // Making filter box empty so to control multiple filter box upon clicking multiple styles
                filter_it()  // Calling again to make sure, can click any times on filter without refresh,
                // if removed or comment this , upon closing(2nd click), have to refresh to click again, TRY IT.
            })
        })
    }  

function getdata(product,location) // funtion to add data to particular element, Data of products and final location to add
{
    location.innerHTML = ""; // Making empty so that does creates products box multiple times
    product.forEach(elem => { // For loops , one by one product
             
        let product_box = document.createElement("div"); // Box per product
        // Product Show Page on click
        product_box.addEventListener("click",(event) => { // If clicked on any product box

            let obj = { // adding all details of clicked product
                titleprod: elem.product_name,
                imageprod:[elem.product_image[0],elem.product_image[1],elem.product_image[2]],
                desprod: elem.product_description,
                catprod: elem.product_category,
                priceprod: elem.product_price
            };
    
            localStorage.setItem("product", JSON.stringify(obj)); // Setting to local storage
    
            window.location.href = "/in/product_show"; // Moving Next page
        });

        let image_box = document.createElement("div"); // Image box
        image_box.setAttribute("id","image_box");

        let image = document.createElement("img"); 
        image.src = elem.product_image[0]; // Adding image link

        let content_box = document.createElement("div");
        content_box.setAttribute("id","content_box"); // contents box(name,price,categaries)

        let name = document.createElement("h5"); 
        name.textContent = elem.product_name;

        let category = document.createElement("p");
        category.textContent = elem.product_category;

        let price = document.createElement("p");
        price.textContent = elem.product_price;

        image_box.append(image); //Appending image to image box
        content_box.append(name,category,price); // appending name, price, category to content box
        product_box.append(image_box,content_box); // Image box and content box
        location.append(product_box); // Final location that is Box of all products
        
        let iphone = window.matchMedia("(max-width:414px)") 

        const changes = (iphone) =>
        {
            if(iphone.matches)
            {
                document.querySelector("#filter_sec").addEventListener("click",() => // if clicked on "SHOW FILTERS" image
                {
                    document.querySelector("#sale_products").style.width = "70%"
                    document.querySelector("#sale_products").style.cssText = 
                    `width:75%;`;
                    
                    product_box.style.cssText = 
                    `width:98%;
                    margin:0;`;
                
                    image_box.style.cssText = 
                    `width:98%;`;

                    name.style.cssText = 
                    `font-size:18px;
                    margin-top:-3%`

                    category.style.cssText = 
                    `margin-top:-8%`;
                })
            }
        }
        changes(iphone)
        iphone.addListener(changes)
    })
}
// --------------- FILTER SCTION NEXT PART --------------------------------------
function filter_cat(data,main,location,name) // products data(to filter),main means filter box,
{                                           // location means category and button box container,name (catoegory)
    let section = document.createElement("div");
    section.style.cssText = ` 
    display:flex;
    height:35px;
    border:1px ridge;
    padding-top:2%;`; // Styles to Particular section (category and button)

    let button = document.createElement("button"); // Button 

    button.style.cssText = 
    `margin:0% 4% 0% 5%;
    height:20px;
    width:20px;
    border-radius:5px;
    background:white;
    border:1px solid black`; // Button styles
    let sec_name = document.createElement("span");
    sec_name.textContent = name; // adding category name.

    // let iphone = window.matchMedia("(max-width:414px)") 

    //     const changes = (iphone) =>
    //     {
    //         if(iphone.matches)
    //         {
    //             document.querySelector("#filter_sec").addEventListener("click",() => // if clicked on "SHOW FILTERS" image
    //             {
                
    //                 document.querySelector("#filter_corner").style.cssText = 
    //                 `border:8px solid red;`;
                    
    //             })
    //         }
    //     }
    //     changes(iphone)
    //     iphone.addListener(changes)


    button.addEventListener("click",() => // Upon clicking on filter button
    {
        event.target.style.background = "black";  // color changes to black
 
        setTimeout(function(){  // background of button changes after 0.8 sec to white(normal)
            button.style.background = "white"; 
        },800)

       let products = data.filter(function(elem) // FILTER UPON CLICK
        {
            let word = event.target.nextSibling.textContent; // Next sibling means 67 line
            let include = elem.product_category; // element category that is Men's shoes, Women's shirts, Kids etc.
            let has;
            if(word == "Cloths")
            {
                let conditions  = ["Terry","Hoodie","Shirt","Shorts","Jacket","Trousers","Top"]
                has = conditions.some(el => include.includes(el));
            }
            else
            {
                has = include.includes(word);
            }
             // checking if include has word of word 79 line

            if( has) // if true
            {
                return include; // returns all true products(if men , returns all mens)
            }
        })
        let place = document.querySelector("#sale_products"); // Calling product box again to store filtered products
        getdata(products,place); // calling aget data, to put filtered products

    })

    section.append(button,sec_name); // appending button and category name

    location.append(section); // appending to filter category box
    main.append(location); // to filter box
}