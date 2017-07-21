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
	}

	// Activates knockoutjs
	ko.applyBindings(new AppViewModel());


});