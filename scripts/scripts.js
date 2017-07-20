$(document).ready(function() {

	// Simple Viewmodel that defines the data and behavior of my UI
	function AppViewModel() {
		this.firstName = 'Yulong';
		this.lastName = 'Tan';
	}

	// Activates knockoutjs
	ko.applyBindings(new AppViewModel());
});