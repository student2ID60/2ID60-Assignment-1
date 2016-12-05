$(document).ready(function() {
  
  $('#btn-start').click(function() {
    $('#shopping-list').show();
  });
  
  $('.btn-remove').click(function() {
    $(this).parent().remove();
  });
  
  $('.btn-add').click(function() {
    var newProduct = $('input[name=new-product]').val();
    var newProduct = $('input[name=new-amount]').val();
    $('input[name=new-product]').reset();
    $('input[name=new-amount]').reset();
    $('#new-item').before("<p>hoi</p>");
    $(this).remove();
  });
  
});
