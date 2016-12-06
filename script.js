$(document).ready(function() {
  
  $('#btn-start').click(function() {
    $('#shopping-list').show();
  });
  
  $('.btn-remove').click(function() {
    $(this).parent().remove();
    console.log("test");
  });
  
  $('.btn-add').click(function() {
    if($('input[name=new-product]').val() != "") {
      var newProduct = $('input[name=new-product]').val();
      var newAmount = $('input[name=new-amount]').val();
      if (newAmount==""){
        newAmount = "-";
      } 
      $('#product-form')[0].reset();
      $('#amount-form')[0].reset();
      $('#new-item').before("/n<div class='item row row-centered'>\n<div class='col-sm-2 col-centered product'>" + newProduct + "</div>\n<div class='col-sm-1 col-centered amount'>" + newAmount + "</div>\n<div class='col-sm-1 col-centered btn-remove'>\n<img src='images/remove-icon.png'/>\n</div>\n</div>");
      //$('#new-item').before("<div class='item row row-centered'><div class='col-sm-2 col-centered product'>" + newProduct + "</div><div class='col-sm-1 col-centered amount'>" + newAmount + "</div><div class='col-sm-1 col-centered btn-remove'><img src='images/remove-icon.png'/></div></div>");
    }
  });
  
  
  //Dropdown menu
  
  // When the user clicks on the button, toggle between hiding and showing the dropdown content
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
