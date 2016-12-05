$(document).ready(function() {
  
  $('#btn-start').click(function() {
    $('#shopping-list').show();
  });
  
  $('.btn-remove').click(function() {
    $(this).parent().remove();
  });
  
  $('.btn-add').click(function() {
    /*var newProduct = $('input[name=new-product]').val();
    var newAmount = $('input[name=new-amount]').val();*/
    $('#product-form').reset();
    $('#amount-form').reset();
    $('#new-item').before("<p>hoi</p>");
    //$(this).parent().remove();
  });
  
});
