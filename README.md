# Knockoutjs Demo

### Introduction
Knockoutjs is a data binding js library that helps to create rich, responsive displays with a clean underlying data view model

### Features
- Auto ui refresh
- Simple and obvious way to connect parts of the UI to the data model

### Example
**index.html**
```HTML
<p>First Name: <strong data-bind="text: firstName">todo</strong></p>
<p>Last Name: <strong data-bind="text: lastName">todo</strong></p>
```

**scripts.js**
```JavaScript
// Simple Viewmodel that defines the data and behavior of my UI
function AppViewModel() {
	this.firstName = 'Yulong';
	this.lastName = 'Tan';
}

// Activates knockoutjs
ko.applyBindings(new AppViewModel());
```