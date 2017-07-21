$(document).ready(function() {


	// Class that represents a row in the seat reservations grid
	function SeatReservation(name, initialMeal) {
		var self = this;
		self.name = name;
		self.meal = ko.observable(initialMeal);

		self.formattedPrice = ko.computed(function() {
			var price = self.meal().price;
        	return price ? "$" + price.toFixed(2) : "None";
		});
	}

	function ReservationsViewModel() {
		var self = this;

		// Non-editable catalog data - would come from the server
		self.availableMeals = [
			{ mealName: "Standard (sandwich)", price: 0 },
	        { mealName: "Premium (lobster)", price: 34.95 },
	        { mealName: "Ultimate (whole zebra)", price: 290 }
		];

		// Editable data
		self.seats = ko.observableArray([
			new SeatReservation("Peter", self.availableMeals[0]),
    		new SeatReservation("Felicia", self.availableMeals[0]) 
		]);

		self.addSeat = function() {
			self.seats.push(new SeatReservation("", self.availableMeals[1]));
		}
	}

	// Activates knockoutjs
	ko.applyBindings(new ReservationsViewModel());
});