$(document).ready(function() {

	// Simple Viewmodel that defines the data and behavior of my UI
	function AppViewModel() {
		this.firstName = 'Yulong';
		this.lastName = 'Tan';

		this.email = ko.observable('yulong.tan@alaskaair.com');
		this.company = ko.observable('Alaska Airlines');

		// Observables would've been called like functions()
		//	return this.email() or return this.company()
		this.fullName = ko.computed(function() {
			return this.firstName + " " + this.lastName;
		}, this);

		// Must call company as a function, since it's an observable
		this.capitalizeCompany = function() {
			var currentVal = this.company();         // Read the current value
			this.company(currentVal.toUpperCase());  // Write back a modified value
		};
	}

	// Class that represents a row in the seat reservations grid
	function SeatReservation(name, initialMeal) {
		var self = this;
		self.name = name;
		self.meal = ko.observable(initialMeal);
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
	}

	// Activates knockoutjs
	ko.applyBindings(new AppViewModel());
});