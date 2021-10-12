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
    }
        renderProducts(data, filters)
        
        document.querySelector('#search-text').addEventListener('input', function(e){
            filters.searchText = e.target.value
            renderProducts(data, filters)
        })

        let carts = document.querySelectorAll('.add-cart');
        let products = [
          
            {
                title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
                image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
                price: 109.95,
                tag: "Fjallraven",
                inCart: 0
              },
              {
                title: "Mens Casual Premium Slim Fit T-Shirts ",
                image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
                price: 22.3,
                tag: "menTshirt",
                inCart: 0
              },
              {
                title: "Mens Cotton Jacket",
                price: 55.99,
                image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
                tag: "menCotton",
                inCart: 0
              },
              {
                title: "Mens Casual Slim Fit",
                image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
                price: 15.99,
                tag: "mensCasual",
                inCart: 0
              },
              {
                title: "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
                image: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
                price: 695,
                tag: "nagaGold",
                inCart: 0
              },
              {
                title: "Solid Gold Petite Micropave ",
                image: "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
                price: 168,
                tag: "micropave",
                inCart: 0
              },
              {
                title: "White Gold Plated Princess",
                image: "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
                price: 9.99,
                tag: "goldPlate",
                inCart: 0
              },
              {
                title: "Pierced Owl Rose Gold Plated Stainless Steel Double",
                image: "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
                price: 10.99,
                tag: "owlGold",
                inCart: 0
              },
              {
                title: "WD 2TB Elements Portable External Hard Drive - USB 3.0 ",
                image: "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
                price: 64,
                tag: "usb3",
                inCart: 0
              },
              {
                title: "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
                image: "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
                price: 109,
                tag: "sataIII",
                inCart: 0
              },
              {
                title: "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5",
                image: "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg",
                price: 109,
                tag: "Boost",
                inCart: 0
              },
              {
                title: "WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive",
                image: "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg",
                price: 114,
                tag: "gameDrive",
                inCart: 0
              },
              {
                title: "Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin",
                image: "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg",
                price: 599,
                tag: "acer",
                inCart: 0
              },
              {
                title: "Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED ",
                image: "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg",
                price: 999.99,
                tag: "samMonitor",
                inCart: 0
              },
              {
                title: "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",
                image: "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg",
                price: 56.99,
                tag: "snowJacket",
                inCart: 0
              },
              {
                title: "Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket",
                image: "https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg",
                price: 29.95,
                tag: "bikerJacket",
                inCart: 0
              },
              {
                title: "Rain Jacket Women Windbreaker Striped Climbing Raincoats",
                image: "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg",
                price: 39.99,
                tag: "rainCoast",
                inCart: 0
              },
              {
                title: "MBJ Women's Solid Short Sleeve Boat Neck V ",
                image: "https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg",
                price: 9.85,
                tag: "shortV",
                inCart: 0
              },
              {
                title: "Opna Women's Short Sleeve Moisture",
                image: "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
                price: 7.95,
                tag: "Opna",
                inCart: 0
              },
              {
                title: "DANVOUY Womens T Shirt Casual Cotton Short",
                image: "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
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