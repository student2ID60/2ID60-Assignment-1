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
    $('#product-form')[0].reset();
    $('#amount-form')[0].reset();
    $('#new-item').before("<div class='item row row-centered'><div class='col-sm-2 col-centered product'>Water</div><div class='col-sm-1 col-centered amount'>7</div><div class='col-sm-1 col-centered btn-remove'><img src='remove-icon.png'/></div></div>");
    //$(this).parent().remove();
  });
  
  
  //Dropdown menu
  /*
  // When the user clicks on the button, toggle between hiding and showing the dropdown content
  function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }

  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {

      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
  */
  
});
