// Business Logic

function Pizza(toppings, size){
    this.toppings = toppings;
    this.size = size;
    this.price = 0.00;
}

Pizza.prototype.pizzaPrice = function(){
    console.log("This is the this.toppings.length: " + this.toppings.length);
    if (this.toppings.length > 3) {
        this.price += (this.toppings.length - 3) * 0.50;
        console.log("This is the price so far after toppings: " + this.price)
    } else {
        this.price = 0.00
    }
    switch (this.size) {
        case "S":
            this.price += 10.00;
            console.log("Small Pizza Price added");
            break;
        case "M":
            this.price += 14.00;
            console.log("Medium Pizza Price added");
            break;
        case "L":
            this.price += 19.00;
            console.log("Large Pizza Price added");
            break;
        case "XL":
            this.price += 23.00;
            console.log("X-Large Pizza Price added");
            break;
        default:
            break;
    }
    console.log("this is the price after toppings and size: " + this.price)
    return this.price;
    };

var pizzasOrdered = [];

//UI Logic 
$(document).ready(function(event){
    $("#pizzaSubmit").on("click", function(event){
        var pizza = new Pizza();
        event.preventDefault();
        var toppingsSelected = [];
        $(":checkbox").each(function() {
            if($(this).is(":checked")) {
                toppingsSelected.push($(this).attr('value'));
            }
        });
        pizza.toppings = toppingsSelected;
        pizza.size = $("input.pizzaSize:checked").val();
        pizzasOrdered.push(pizza); 
        if (pizzasOrdered.length < 2) {
            $("span#pizzasOrdered").text("You have ordered " + pizzasOrdered.length + " pizza")
        } else if (pizzasOrdered.length >= 2 ) {
            $("span#pizzasOrdered").text("You have ordered " + pizzasOrdered.length + " pizzas")            
        };

        for (let i = pizzasOrdered.length-1; i < pizzasOrdered.length; i++) {
            pizzasOrdered[i].pizzaPrice();
            $("span#pizzaInfo").append("<br>Pizza Number " + (i + 1) + " has the following: " + 
            "<br> <ul>" +
                "<li>Toppings: " + pizzasOrdered[i].toppings.join(', ') + "</li>" +
                "<li>Size: " + pizzasOrdered[i].size + "</li>" +
                "<li>Price: $" + pizzasOrdered[i].price.toFixed(2) + "</li>" +
            "</ul>") 
        }
    });
});