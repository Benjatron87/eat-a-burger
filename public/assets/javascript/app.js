console.log("connected to js")

$("#added").unbind().on("click", function(event) {
    event.preventDefault();

    let burger = {
        name: $("#new-burger").val().trim(),
        devoured: 0
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
    devoured: true
    };

    $.ajax("/api/burgers/" + id, {
    type: "PUT",
    data: newDevour
    }).then(() => {
    location.reload();

    console.log("burger state changed");
    });
});