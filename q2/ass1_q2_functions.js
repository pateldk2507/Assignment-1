/* define functions here */

function calculateTotal(quantity, price){
    return quantity * price;
}

function outputCartRow(file, title, quantity, price, total){
    document.write('<tr>');
    document.write('<td><img src=ass1_images/'+ file +'></td>');
    document.write('<td>'+ title +'</td>');
    document.write('<td style="text-align:center;">'+ quantity +'</td>');
    document.write('<td style="text-align:right;">'+ "$" +price.toFixed(2) +'</td>');
    document.write('<td style="text-align:right;">'+ "$"+total.toFixed(2)+'</td>');
    document.write('</tr>');
}
var subTot=0;
function subTotal(quantities, prices) {
    
  for(var i=0;i<quantities.length;i++){
      subTot += quantities[i] * prices[i];
  }

  document.write('<tr class="totals">');
  document.write('<td colspan="4">Subtotal</td>');
  document.write('<td>$'+subTot.toFixed(2)+'</td>');
  document.write('</tr>');

}

var Tax=0;
function calculateTax() {
    console.log("Tax " + subTot);
    Tax = subTot * 0.10;

    document.write('<tr class="totals">');
    document.write('<td colspan="4">Tax</td>');
    document.write('<td>$'+ Tax.toFixed(2) +'</td>');
    document.write('</tr>');

}

var Shipping = 0;
function shippingCharge() {
    if(subTot > 1000){
          Shipping=0;  
    }else{
        Shipping = 40;
    }
    

    document.write('<tr class="totals">');
    document.write('<td colspan="4">Shipping</td>');
    document.write('<td>$'+ Shipping.toFixed(2) +'</td>');
    document.write('</tr>');

}

function total() {

    var grandTotal = subTot + Tax + Shipping;

    document.write('<tr class="totals focus">');
    document.write('<td colspan="4">Grand Total</td>');
    document.write('<td>$'+ grandTotal.toFixed(2) +'</td>');
    document.write('</tr>');
    
}