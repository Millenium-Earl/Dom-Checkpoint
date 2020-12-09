

var names = ["Angry cat","Annoyed cat","batte cat","brush cat", "drunk cat", "hurt cat"," sad cat", "Sleepy cat","Smile cat"];
var pics =  ["AngryCat.jpg","annoyed cat.jpg","batte cat.jpg","brush cat.png", "drunk cat.jpg", "hurt cat.jpg","SadCat.jpg", "sleepy cat.jpg","SmileCat.jpg"]
var priceList = [20,5,200,6,52,15,23,3,50];
var products = [];
var out ="";
var cart = []
var total = 0;
var ProdTotal =[];


for (let index = 0; index < names.length; index++) {
    const name = names[index];
    const price = priceList[index];
    const pic = pics[index];

    var produit = {
        id : index,
        namew : name,
        quantite : 1,
        pricew : price,
    
    }
    products.push(produit);
    out +=  `<div class="col-md-4 clearfix d-none d-md-block">
<div class="card mb-2">
  <img class="card-img-top" src="assets/${pic}"
    alt="Card image cap">
  <div class="card-body">
    <h4 class="card-title">${name}</h4>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
      card's content.</p>
    <a class="btn btn-primary" onclick="addToCart(${index})">Add to cart</a>
    <p class="font-weight-bold">${price}.00 $</p>

  </div>
</div>
</div>`
}



document.getElementById("Main").innerHTML=out;
document.getElementById("nbItems").innerHTML = cart.length;







const addToCart = (index) => {
  var productsCheckoutHtml = document.getElementById("cartItems").innerHTML;
  var currentProduct = products[index];
 

  
  const found = cart.find(element => element.id == currentProduct.id);
  if (found) {
      cart.forEach(element => {
          if (element.id == found.id) {
              element.quantite++
              document.getElementById("prodQ-"+element.id).innerHTML = element.quantite;
              document.getElementById("tot").innerHTML = total;
          }
      });
    }else { 
      cart.push(currentProduct)
     
      productsCheckoutHtml += `
          
          
        <tr id="prod-${currentProduct.id}">
    
                              <th scope="row"  >${currentProduct.id}</th>
                              <td >${currentProduct.namew}</td>
                              <td   id ="prodQ-${currentProduct.id}">${currentProduct.quantite}</td>
                              <td id="prodPrice-${currentProduct.id}" >${currentProduct.pricew}</td>
                              <td  class="btn btn-danger" onclick="deleter(${currentProduct.id})">Delete</td>
                          
                          </tr>
                          
    
    `;

    

  
   
    
    document.getElementById("nbItems").innerHTML = cart.length;
    document.getElementById("cartItems").innerHTML = productsCheckoutHtml;
    
    }
    ProdTotal[index] = (currentProduct.pricew * currentProduct.quantite);

    ProdTotal.forEach(element => { total = element;
      
      
    });
    document.getElementById("tot").innerHTML = total;
  }

  function deleter(ident) {
     var prod = document.getElementById("prod-"+ident);
     var prix = document.getElementById("prodPrice-"+ident).innerHTML;
     var quantite = document.getElementById("prodQ-"+ident).innerHTML
     total = total - (prix*quantite);
     document.getElementById("tot").innerHTML = total;
     ProdTotal.pop(ident)
     
    
       prod.remove();
       cart.pop(ident);
       document.getElementById("nbItems").innerHTML = cart.length;
       

    
  }