$(document).ready(function() {
  
  $('#btn-start').click(function() {
    $('#shopping-list').show();
  });
  
  $('.btn-remove').click(function() {
    $(this).parent().remove();
  });
  
  $('.btn-add').click(function() {
    /*var newProduct = $('input[name=new-product]').val();
    var newProduct = $('input[name=new-amount]').val();*/
    $('form[name=product-form]').reset();
    $('form[name=amount-form]').reset();
    $('#new-item').before("<p>hoi</p>");
    //$(this).parent().remove();
  });
  
});
