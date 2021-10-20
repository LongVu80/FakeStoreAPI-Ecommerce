let carts = document.querySelectorAll('.add-cart');


        for(let i = 0; i < carts.length; i++){
            carts[i].addEventListener('click', () => {
                cartNumbers(products[i]);
                totalCost(data[i])
            });
        };
        
        function onloadCartNumbers(){
            let productNumbers = localStorage.getItem('cartNumbers');
            if(productNumbers){
                document.querySelector('.cart span').textContent = productNumbers;
            };
        };

        function cartNumbers(product){
            let productNumbers = localStorage.getItem('cartNumbers');
            productNumbers = parseInt(productNumbers);
            if(productNumbers){
                localStorage.setItem('cartNumbers', productNumbers + 1);
                document.querySelector('.cart span').textContent = productNumbers + 1;
            } else {
                localStorage.setItem('cartNumbers', 1);
                document.querySelector('.cart span').textContent = 1;
            };
            setItems(product);
        };

        function setItems(product){
            let cartItems = localStorage.getItem('productsInCart');
            cartItems = JSON.parse(cartItems);
            
            if(cartItems !== null){
                if(cartItems[product.title] == undefined){
                    cartItems = {
                        ...cartItems,
                        [product.title]: product
                    };
                };
                cartItems[product.title].inCart += 1;
            } else{
                product.inCart = 1;
                cartItems = {
                    [product.title]: product
                };
            };
            console.log("my product is", cartItems[product.title]);
            
            localStorage.setItem("productsInCart", JSON.stringify(cartItems));
        };

        // function totalCost(product){
        //   console.log('product price', product.price)
        //   let cartCost = localStorage.getItem('totalCost');
        //   console.log('my total is', cartCost);

        //   localStorage.setItem("totalCost", cartCost + product.price);
        //   console.log(typeof cartCost)
        // }
        function totalCost(product){
            console.log("price", product.price);
            let cartCost = localStorage.getItem('totalCost');
                if ( cartCost === null){
                    localStorage.setItem('totalCost',  product.price);
                } else {
                    cartCost = parseInt(cartCost);
                    localStorage.setItem('totalCost', cartCost + product.price);
                }

            console.log("cart cost", cartCost);

            
            
        };
 
  function displayCart(){
        let cartCost = localStorage.getItem('totalCost');
        let cartItems = localStorage.getItem("productsInCart");
        cartItems = JSON.parse(cartItems);
        let productContainer = document.querySelector(".products");
        if(cartItems && productContainer) {
            if(productContainer != null){
                productContainer.innerHTML = '';
                Object.values(cartItems).map(item => {
                    productContainer.innerHTML += `
                    
                    <div class="product">
                    
                        <img src ="${item.image}">
                        <span>${item.title}</span>
                    </div>
                    <div class="price">$${item.price}</div>
                    <div class="quantity">
                        <ion-icon class="decrease" name="arrow-dropleft-circle"></ion-icon>
                        <span>${item.inCart}</span>
                        <ion-icon class="increase" name="arrow-dropright-circle"></ion-icon>
                        <button id="item-remove">Remove</button>
                    </div>
                    <div class="total">
                        $${item.inCart * item.price}
                    </div>
                    <div>
                        
                    </div>
                    
                    `;
                });
            }
        if(productContainer != null){
            productContainer.innerHTML += `
                <div class="basketTotalContainer">
                    <h4 class="basketTotalTitle">
                        Basket Total: 
                    </h4>
                    <h4 class="basketTotal">
                        $${cartCost}
                    </h4>
                </div>
            `;
            }
        }

        // removeItem();

    //   var removeItem = document.querySelector('.item-remove');
    //   console.log(removeItem)
    //   for (var i = 0; i < removeItem.length; i++){
    //       var button = removeItem[i];
    //       button.addEventListener('click', function(){
    //           console.log("click")
    //           var buttonClicked = e.target
    //           buttonClicked.parentElement.remove()
    //       })
    //   }
     document.querySelector('#item-remove').addEventListener('click', function(){
        localStorage.clear();
    })
    };  

    onloadCartNumbers();
    displayCart();

  


   



  

$("#search-text").on("keyup", function(){
  let value = $(this).val();
  $(".card").each(function(records){
    if(records !== -1){
      let id=$(this).find("#productTitle").text();
    if(id.indexOf(value)!==0 && id.toLowerCase().indexOf(value.toLowerCase())<0){
      $(this).hide();
    } else {
      $(this).show();
    }
    }
    
  })
})

// var apiKey = '6b71e45e81339efb68c7b8d995519887'


//     $('form').submit(function () {
//         var city = $('#city').val();
//         var cityString = `${city}`

//         var url = `https://api.openweathermap.org/data/2.5/weather?q=${cityString}&appid=${apiKey}&units=imperial`

//         $.get(url, function (res) {
//             console.log(res)
//             var htmlString = `<h1>${cityString}</h1><p>Temperature: ${res.main.temp}&#8457;</p>`
//             htmlString+= `<p>Description: ${res.weather[0].description}</p><p>Wind Speed: ${res.wind.speed} mph</p>`
//             $('#forecast').html(htmlString);

//         }, 'json');
//         return false;
//     })

