
$(function() {
// /waiter Page
  // makes menu items draggable and sortable
	$( "#sortable" ).sortable({
    revert: true,
    stop: function(event, ui) {
      $(ui.item).switchClass("menu-menu-item", "orders-menu-item").toggleClass("ui-draggable");
    }
  });

  $( "#draggable" ).draggable({
    connectToSortable: "#sortable",
    helper: "clone",
    revert: "invalid",
    distance: 20
  });

});