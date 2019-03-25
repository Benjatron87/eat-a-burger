console.log("connected to js")

$("#added").unbind().on("click", function(event) {
    event.preventDefault();

    let burger = {
        name: $("#new-burger").val().trim(),
    };
    console.log(burger)

    if(burger.name){
        $.ajax("/api/burgers/", {
            type: "POST",
            data: burger
        }).then(() => {
            console.log("created new burger");

            location.reload();
        });
        $("#err").text("")
    }
    else{
        $("#err").text("Can't Leave This Blank!")
    }
});

$(".change-devour").on("click", function() {
    const id = $(this).data("id");

    const newDevour = {
    devoured: 1
    };

    $.ajax("/api/burgers/" + id, {
    type: "PUT",
    data: newDevour
    }).then(() => {
    console.log("burger state changed");
    
    location.reload();
    });
});