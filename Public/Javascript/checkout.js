    var address = document.querySelector("#checkout_adress_div");
    var payment = document.querySelector("#checkout_payment_div");
    var order = document.querySelector("#checkout_order_status_div");

    const today_date = new Date();

    var order_date = today_date.getDate()+3;
    var order_month = today_date.getMonth()+1;
    if(order_date > 28){
        order_date = 3;
        order_month = today_date.getMonth()+2;
    }

    // console.log(order_date, order_month,today_date.getFullYear());

    document.querySelector("#you_will_recice_order_on").textContent = `Your Order Will Be delivered till :- ${order_date}/${order_month}/${ today_date.getFullYear()}`;



    var userdata = JSON.parse(localStorage.getItem("user_order"));

    var cart = (localStorage.getItem("totalamount"));

    var amount = +cart;

    var tax = Math.floor((amount*12)/100);

    var totalamount = amount+tax;

    document.querySelector("#show_amount_to_pay").textContent = "₹ "+amount;

    document.querySelector("#show_tax_to_pay").textContent = "₹ "+tax;
    document.querySelector("#show_total_amount_to_pay").textContent = "₹ "+(tax+amount);
    document.querySelector("#show_order_user_total_amount").textContent = "₹ "+(tax+amount);

    // console.log("Cart Amount: "+amount);
    // console.log("tax: "+Math.floor((amount*12)/100));
    

    function addDetails(){

            var firstName = document.querySelector("#userfirstname").value;
            var lastName = document.querySelector("#userlastname").value;
            var userAddress = document.querySelector("#useraddress").value;
            var userEmail = document.querySelector("#useremail").value;
            var phoneNumber = document.querySelector("#userphnnum").value;

            if(firstName === "" || lastName === "" || userAddress === "" || userEmail === "" || phoneNumber === ""){
                alert("Error! Fill all slot");
            }
            else{
                var userName = firstName +" "+lastName
                var obj = {
                    name: userName,
                    address: userAddress,
                }

                localStorage.setItem("user_order", JSON.stringify(obj));

                address.style.display = "none";
                payment.style.display = "block";
            }
    }

    function makepayment(){
        var cardno = document.querySelector("#cardnumber").value;
        var date = document.querySelector("#cardexpirydate").value;

        if(cardno == "" || date == ""){
            alert("Error! Fill all slot");
        }
        else{
            alert("Payment Processing");

            document.querySelector("#show_order_user_name").textContent = userdata.name;
            console.log(userdata.name,userdata)
            document.querySelector("#show_order_user_address").textContent = userdata.address;

            setTimeout(()=>{
                console.log("HELLO")
                payment.style.display = "none";
                alert("Payment Recived...Order Placed.")
                order.style.display = "block";
            },3000);
        }
    }

    function cancelorder(){
        setTimeout(()=>{
            alert("Our order is canceled. Countinue shoping");
            window.location.href = "/in/home";
        }, 2000)
    }

    document.querySelector("#countinue_shopping").addEventListener("click", function(){
        window.location.href = "/in/home";
    })