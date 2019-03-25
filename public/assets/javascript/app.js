$(function() {
    $(".change-devour").on("click", function() {
      const id = $(this).data("id");
      const devour = $(this).data("devour");
  
      const newDevour = {
        devoured: devour
      };
  
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newDevour
      }).then(() => {
        console.log("burger state changed");
        
        location.reload();
      });
    });
  
    $("#add-button").on("submit", function(event) {
      event.preventDefault();
  
      const burger = {
        name: $("#new-burger").val().trim(),
        devoured: false
      };
  
      $.ajax("/api/burgers", {
        type: "POST",
        data: burger
      }).then(() => {
        console.log("created new burger");
      
        location.reload();
      });
    });
});