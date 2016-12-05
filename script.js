$(document).ready(function() {
  
  $('#btn-start').click(function() {
    $('#shopping-list').show();
  });
  
  $('.btn-remove').click(function() {
    $(this).parent().remove();
  });
  
});
