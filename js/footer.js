document.querySelector('#footer').innerHTML += `
<footer class="container text-center">
        <div class="row bottomFooter">
            <div class="col-sm-3">
              <div class='left'>
                <div class='weather'>
                    <h3>Check your city weather</h3>
                    <p>We care about you, how's your city weather today? Enter your city to find out.</p>
                    <form id="form">
                        <div class="form-group text-dark">
                            <label for="city">City</label>
                            <input class="form-control" type="text" name="city" id="city">
                        </div>
                        <input class="form-control btn btn-dark" type="submit" value="Submit">
                    </form>
            
                    <div id="forecast" class="text-dark">
                    </div>
                </div>
            </div>
            </div>
            <div class="col-sm-9" id="rightFoot">
          <div id="contact" class="col-sm-3">
            <h4>Contact</h4>
            <p>Questions? Go ahead.</p>
            <form action="/action_page.php" target="_blank">
              <p><input class="input border" type="text" placeholder="Name" name="Name" required></p>
              <p><input class="input border" type="text" placeholder="Email" name="Email" required></p>
              <p><input class="input border" type="text" placeholder="Subject" name="Subject" required></p>
              <p><input class="input border" type="text" placeholder="Message" name="Message" required></p>
              <button type="submit" class="button block black">Send</button>
            </form>
          </div>
    
          <div class="col-sm-3">
            <h4>About</h4>
            <p><a href="#">About us</a></p>
            <p><a href="#">We're hiring</a></p>
            <p><a href="#">Support</a></p>
            <p><a href="#">Find store</a></p>
            <p><a href="#">Shipment</a></p>
            <p><a href="#">Payment</a></p>
            <p><a href="#">Gift card</a></p>
            <p><a href="#">Return</a></p>
            <p><a href="#">Help</a></p>
          </div>
    
          <div class="col-sm-3">
            <h4>Store</h4>
            <p><i class="fa fa-fw fa-map-marker"></i>The Giftshop</p>
            <p><i class="fa fa-fw fa-phone"></i> (832) 000-000</p>
            <p><i class="fa fa-fw fa-envelope"></i>lalalala.com</p>
            <h4>We accept</h4>
            <p><i class="fa fa-fw fa-cc-amex"></i> Amex</p>
            <p><i class="fa fa-fw fa-credit-card"></i> Credit Card</p>
            <p><i class="fa fa-fw fa-credit-card"></i> PayPal</p>
            <p><i class="fa fa-fw fa-credit-card"></i> Zelle</p>
            <br>
            <i class="fa fa-facebook-official w3-hover-opacity w3-large"></i>
            <i class="fa fa-instagram w3-hover-opacity w3-large"></i>
            <i class="fa fa-snapchat w3-hover-opacity w3-large"></i>
            <i class="fa fa-pinterest-p w3-hover-opacity w3-large"></i>
            <i class="fa fa-twitter w3-hover-opacity w3-large"></i>
            <i class="fa fa-linkedin w3-hover-opacity w3-large"></i>
          </div>
        </div>
        </div>
    <form id="deal" class="form-inline">
        <h1>Subscribe</h1>
        <p>To get special offers and VIP treatment:</p>
      <input type="email" class="form-control" size="50" placeholder="Email Address">
      <button type="button" class="btn btn-danger">Sign Up</button>
    </form>
    <h6>Long's Giftshop Copyright</h6>
  </footer>`