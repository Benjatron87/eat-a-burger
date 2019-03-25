console.log("connected to js")

$("#added").unbind().on("click", function(event) {
    event.preventDefault();

    const burger = {
        name: $("#new-burger").val().trim(),
        devoured: false
    };
    console.log(burger)

    $.ajax("/api/burgers/", {
        type: "POST",
        data: burger
    }).then(() => {
        console.log("created new burger");
    });
    });

$(".change-devour").on("click", function() {
    const id = $(this).data("id");

    const newDevour = {
    devoured: true
    };

    $.ajax("/api/burgers/" + id, {
    type: "PUT",
    data: newDevour
    }).then(() => {
    console.log("burger state changed");
    
    location.reload();
    });
});