// Business Logic
function Pizza(toppings, size){
    this.toppings = toppings;
    this.size = size;
}

var pizzasOrdered = [];

//UI Logic 
$(document).ready(function(event){
    $("#pizzaSubmit").on("click", function(event){
        var pizza = new Pizza();
        event.preventDefault();

        console.log("The Submit function is working");

        var toppingsSelected = [];

        $(":checkbox").each(function() {
            if($(this).is(":checked")) {
                toppingsSelected.push($(this).attr('value'));
                console.log("here's the value being added: " + $(this).attr('value'));
            }

            console.log("This is toppingsSelected: " + toppingsSelected);
        });
        pizza.toppings = toppingsSelected;
        console.log("This is pizza.toppings: " + pizza.toppings)
        pizzasOrdered.push(pizza);
        console.log("This is pizzasOrdered: " + pizzasOrdered);
        
    });

});