// $.get("./nav.html", function(data){
//   $("#nav-placeholder").replaceWith(data);
// });
// $.get("./templates/footer.html", function(data){
//   $("#footer-switch").replaceWith(data);
// });

document.querySelector('#header').innerHTML = `    <header>
<nav class="navbar navbar-expand-lg navbar-light bg-primary top-bar-fixed">
  <div class="container-fluid">
    <a class="navbar-brand"  href="#" id="logo">Long's Shop</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" id="home" href="index.html">Home</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Categories
          </a>
          <ul class="dropdown-menu categories bg-primary">
          </ul>
        </li>
        <li class="nav-item">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" id="Psearch">
        </li>
      </ul>
      <ul class="right">
        
        <button class="cart">
      <a href="cart.html">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart3" viewBox="0 0 16 16">
        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
        </svg>Cart<span>0</span></a></button>
      </ul>
    </div>
  </div>
</nav>
</header>`

function getAllProducts(){
  $.ajax({
    type: "GET",
    url: 'https://fakestoreapi.com/products',
 
    success: function(data) {
      // console.log(data)
      $(data).each(function(index, product){
        $('.all').append( 
          `<div class='card m-2 border-2' style='width:200px;'>
          <img src='${product.image}' class='fake'>
          <p class ='card-title' id='productTitle'><strong> ${product.title} </strong></p>
          <div class='card-body'>
          <h4 class='card-text' id='productPrice'> $${product.price} <h4>
          <button class='add-cart'> add to cart </button>
          </div>
          </div>`)
      })
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
              <button id="item-remove">Remove all Items</button>
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

    }
  })
}
getAllProducts(decodeURIComponent(urlPara('product')))

const getAllCategories = function() {
  $.ajax({
      type: "GET",
      url: 'https://fakestoreapi.com/products/categories',
      success: function(data) {
          $(data).each(function(index, category){
              $(".categories").append(
              '<li class="dropdown-item"><a class="dropdown-item bg-primary" href="./category.html?category=' + encodeURIComponent(category) + '">' +
              toTitleCase(category) + '</a></li>')
          })
      }
  })
}
getAllCategories();

function toTitleCase(str){
  return str.replace(/(?:^|\s)\w/g, function(match){
      return match.toUpperCase()
  })
}

function getSingleCategory(slug){
  $.ajax({
    type: "GET",
    url: 'https://fakestoreapi.com/products/category/' + slug,
    success: function(data) {
      // console.log(data)
        $(data).each(function(index, product){
          $('#title').html(`Welcome!!`)
          $('#products').append(
            `<div class='card m-2 border-2' style='width:200px;'>
            <img src='${product.image}' class='fake'>
            <p class ='card-title' id='productTitle'><strong> ${product.title} </strong></p>
            <div class='card-body'>
            <h4 class='card-text' id='productPrice'> $${product.price} <h4>
            <button class='add-cart'> add to cart </button>
            </div>
            </div>`
          );
        })
    }
})
}
getSingleCategory(decodeURIComponent(urlPara('category')))

function getSaleMen(men){
  $.ajax({
    type: "GET",
    url: 'https://fakestoreapi.com/products/category/' + men,
    success: function(data) {
      // console.log(data)
        $(data).each(function(index, product){
          if(category = 'men%27s%20clothing'){
              if(product.price < 50){
              $('.men').append(`<div class='card m-2 border-2' style='width:200px;'>
              <img src='${product.image}' class='fake'>
              <p class ='card-title' id='productTitle'><strong> ${product.title} </strong></p>
              <div class='card-body'>
              <h4 class='card-text' id='productPrice'> $${product.price} <h4>
              <button class='add-cart'> add to cart </button>
              </div>
              </div>`
          )
          }
          }

          })
        }
      })
    }
    


getSaleMen('men%27s%20clothing');


// $('#men').click(function () {
//   $('.women').hide();
//   $('.jewelery').hide();
//   $('.electronic').hide();
//   $('.men').show();
// });


function getSaleWomen(women){
  $.ajax({
    type: "GET",
    url: 'https://fakestoreapi.com/products/category/' + women,
    success: function(data) {
      // console.log(data)
        $(data).each(function(index, product){
          if(product.price < 10){
             $('.women').append(
              `<div class='card m-2 border-2' style='width:200px;'>
            <img src='${product.image}' class='fake'>
            <p class ='card-title' id='productTitle'><strong> ${product.title} </strong></p>
            <div class='card-body'>
            <h4 class='card-text' id='productPrice'> $${product.price} <h4>
            <button class='add-cart'> add to cart </button>
            </div>
            </div>`
          )
          }
         
        })
    }
})
}
getSaleWomen("women%27s%20clothing")

function getSaleJewelery(blink){
  $.ajax({
    type: "GET",
    url: 'https://fakestoreapi.com/products/category/' + blink,
    success: function(data) {
      // console.log(data)
        $(data).each(function(index, product){
          if(product.price < 100){
             $('.jewelery').append(
              `<div class='card m-2 border-2' style='width:200px;'>
            <img src='${product.image}' class='fake'>
            <p class ='card-title' id='productTitle'><strong> ${product.title} </strong></p>
            <div class='card-body'>
            <h4 class='card-text' id='productPrice'> $${product.price} <h4>
            <button class='add-cart'> add to cart </button>
            </div>
            </div>`
          )
          }
         
        })
    }
})
}
getSaleJewelery("jewelery")

function getSaleElectronics(electronic){
  $.ajax({
    type: "GET",
    url: 'https://fakestoreapi.com/products/category/' + electronic,
    success: function(data) {
      // console.log(data)
        $(data).each(function(index, product){
          if(product.price < 500){
             $('.electronics').append(
              `<div class='card m-2 border-2' style='width:200px;'>
            <img src='${product.image}' class='fake'>
            <p class ='card-title' id='productTitle'><strong> ${product.title} </strong></p>
            <div class='card-body'>
            <h4 class='card-text' id='productPrice'> $${product.price} <h4>
            <button class='add-cart'> add to cart </button>
            </div>
            </div>`
          )
          }
         
        })
    }
})
}
getSaleElectronics("electronics")




function urlPara(name){
  let results = new RegExp("[?&]" + name + "=([^&#]*)").exec(
    window.location.href
    )
    if(results == null) {
      return null;
    } else {
      return results[1] || 0;
    }
}

// function getSingleProduct(id){
//   $.ajax({
//     type: "GET",
//     url: 'https://fakestoreapi.com/products/' + id,
//     success: function(data) {
//       // console.log(data)
//         $(data).each(function(index, product){
//           $('.product_image').html(
//             '<img src="' + data.image + '" class="img-fluid">'
//           );
//           $("#name").html(data.title);
//           $('#price').html('$' +data.price.toFixed(2));
//           $('.product_desc').html(data.description)
          
//         })
//         }
//     })
    
// }
// getSingleProduct(urlPara('productid'))


$("#Psearch").on("keyup", function(){
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


