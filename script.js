$(document).ready(function() {
  
  // show the list after clicking the start-button
  $('#btn-start').click(function() {
    $('#shopping-list').show();
  });
  
  // add the new product to the list after clicking the add-button
  $('.btn-add').click(function() {
    // there should be filled in something in the form
    if($('input[name=new-product]').val() != "") {
      // get the values the user set for the product to add
      var newProduct = $('input[name=new-product]').val();
      var newAmount = $('input[name=new-amount]').val();
      // if there has not been filled in an amount, a "-" will be used
      if (newAmount=="") {
        newAmount = "-";
      }
      // reset the forms, so that later another new product can be made easily
      $('#product-form')[0].reset();
      $('#amount-form')[0].reset();
      // add the new product and amount to the shopping list, as the last item before the line where the forms for a new product are
      $('#new-item').before("\n<div class='item row row-centered'>\n<div class='col-sm-2 col-centered product'>" + newProduct + "</div>\n<div class='col-sm-1 col-centered amount'>" + newAmount + "</div>\n<div class='col-sm-1 col-centered btn-remove'>\n<img src='images/remove-icon.png'/>\n</div>\n</div>\n");
    }
  });
  
  // remove an item from the shopping list after clicking its remove-button
  $('#shopping-list').on('click','.btn-remove',function() {
    $(this).parent().remove();
  });
  
  
  // after clicking the 'supermarkets'-button, toggle between hiding and showing the dropdown content with the supermarkets by toggling the class "show"
  $("#btn-drop-supermarkets").click(function() {
    $("#drop-supermarkets").toggleClass("show");
  });
  
  /*
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = $('.dropdown-content');
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }*/
  
});
