$(document).ready(function() {
	$.get('https://fakestoreapi.com/products', function (data) {
        const filters = {
            searchText: '',
        }
        const renderProducts = function (data, filters) {
            const filterProducts = data.filter(function(item){
                return item.title.toLowerCase().includes(filters.searchText.toLowerCase())
            })
            if(document.getElementById('product') !=null){
            document.querySelector('#product').innerHTML = ''
        

            filterProducts.forEach(function(item){
                const p = document.createElement('p')
                p.innerHTML = `<div class='card m-2 border-2' style='width:200px;'>
                <img src='${item.image}' class='fake'>
                <div class='card-body'>
                <p class ='card-title' id='productTitle'> ${item.title} </p>
                <p class='card-text' id='productPrice'> $${item.price} </p>
                <button class='add-cart'> add to cart </button>`
                document.querySelector('#product').appendChild(p)
            })
        }
    
        renderProducts(data, filters)
        
        document.querySelector('#search-text').addEventListener('input', function(e){
            filters.searchText = e.target.value
            renderNotes(data, filters)
        })
       }

        let carts = document.querySelectorAll('.add-cart');
        let products = [
          
            {
                title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
                price: 109.95,
                tag: "Fjallraven",
                inCart: 0
              },
              {
                title: "Mens Casual Premium Slim Fit T-Shirts ",
                price: 44.3,
                tag: "menTshirt",
                inCart: 0
              },
              {
                title: "Mens Cotton Jacket",
                price: 55.99,
                tag: "menCotton",
                inCart: 0
              },
              {
                title: "Mens Casual Slim Fit",
                price: 15.99,
                tag: "mensCasual",
                inCart: 0
              },
              {
                title: "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
                price: 695,
                tag: "nagaGold",
                inCart: 0
              },
              {
                title: "Solid Gold Petite Micropave ",
                price: 168,
                tag: "micropave",
                inCart: 0
              },
              {
                title: "White Gold Plated Princess",
                price: 9.99,
                tag: "goldPlate",
                inCart: 0
              },
              {
                title: "Pierced Owl Rose Gold Plated Stainless Steel Double",
                price: 10.99,
                tag: "owlGold",
                inCart: 0
              },
              {
                title: "WD 2TB Elements Portable External Hard Drive - USB 3.0 ",
                price: 64,
                tag: "usb3",
                inCart: 0
              },
              {
                title: "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
                price: 109,
                tag: "sataIII",
                inCart: 0
              },
              {
                title: "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5",
                price: 109,
                tag: "Boost",
                inCart: 0
              },
              {
                title: "WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive",
                price: 114,
                tag: "gameDrive",
                inCart: 0
              },
              {
                title: "Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin",
                price: 599,
                tag: "acer",
                inCart: 0
              },
              {
                title: "Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED ",
                price: 999.99,
                tag: "samMonitor",
                inCart: 0
              },
              {
                title: "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",
                price: 56.99,
                tag: "snowJacket",
                inCart: 0
              },
              {
                title: "Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket",
                price: 29.95,
                tag: "bikerJacket",
                inCart: 0
              },
              {
                title: "Rain Jacket Women Windbreaker Striped Climbing Raincoats",
                price: 39.99,
                tag: "rainCoast",
                inCart: 0
              },
              {
                title: "MBJ Women's Solid Short Sleeve Boat Neck V ",
                price: 9.85,
                tag: "shortV",
                inCart: 0
              },
              {
                title: "Opna Women's Short Sleeve Moisture",
                price: 7.95,
                tag: "Opna",
                inCart: 0
              },
              {
                title: "DANVOUY Womens T Shirt Casual Cotton Short",
                price: 12.99,
                tag: "womanTshirt",
                inCart: 0
              }
            ]

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
                if(cartItems[product.tag] == undefined){
                    cartItems = {
                        ...cartItems,
                        [product.tag]: product
                    };
                };
                cartItems[product.tag].inCart += 1;
            } else{
                product.inCart = 1;
                cartItems = {
                    [product.tag]: product
                };
            };
            console.log("my product is", cartItems[product.tag]);
            
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
         // let cartCost = localStorage.getItem('totalCost');
 
         // // if(cartCost !=null){
         // //     cartCost = parseInt(cartCost);
         // //     localStorage.setItem("totalCost", cartCost + product.price);
         // // } else {
         //     localStorage.setItem("totalCost", product.price);
         // // };
         console.log("cart cost", cartCost);
         // // console.log(typeof cartCost);
         
         
     };
 
  function displayCart(){
      let cartCost = localStorage.getItem('totalCost');
      let cartItems = localStorage.getItem("productsInCart");
      cartItems = JSON.parse(cartItems);
      let productContainer = document.querySelector(".products");
      if(cartItems && productContainer) {
          productContainer.innerHTML = '';
          Object.values(cartItems).map(item => {
              productContainer.innerHTML += `
              <div class="product">
                  <ion-icon name="close-circle"></ion-icon>
                  <img src ="${item.image}">
                  
                  <span>${item.title}</span>
              </div>
              <div class="price">$${item.price}</div>
              <div class="quantity">
                  <ion-icon class="decrease" name="arrow-dropleft-circle"></ion-icon>
                  <span>${item.inCart}</span>
                  <ion-icon class="increase" name="arrow-dropright-circle"></ion-icon>
              </div>
              <div class="total">
                  $${item.inCart * item.price}
              </div>
              `;
          });
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
      };
      
  };
  onloadCartNumbers();
  displayCart();
    });
});