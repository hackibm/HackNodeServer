/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	
	var DistrictOfficeContact = React.createClass({
	  displayName: "DistrictOfficeContact",


	  render: function () {
	    return React.createElement(
	      "div",
	      null,
	      "Dane kontaktowe dla: ",
	      this.props.districtName
	    );
	  }

	});

	var Group = React.createClass({
	  displayName: "Group",


	  render: function () {

	    var groupData = {
	      "status": "1",
	      "czasObslugi": "00:03",
	      "lp": "8",
	      "idGrupy": "0",
	      "liczbaCzynnychStan": 1,
	      "nazwaGrupy": "Wydawanie dowod\u00f3w rejestracyjnych",
	      "literaGrupy": "H",
	      "liczbaKlwKolejce": 0,
	      "aktualnyNumer": 58
	    };

	    return React.createElement(
	      "div",
	      null,
	      "..."
	    );
	  }

	});

	var DistrictOfficeGroups = React.createClass({
	  displayName: "DistrictOfficeGroups",


	  render: function () {

	    var groupList = ["gr1", "gr2", "gr3", "gr4"];
	    var groups = [];

	    for (var i = 0; i < groupList.length; i++) {
	      groups.push(React.createElement(Group, null));
	    }

	    return React.createElement(
	      "div",
	      null,
	      groups
	    );
	  }

	});

	var DistrictOffice = React.createClass({
	  displayName: "DistrictOffice",


	  getInitialState: function () {
	    return { districtName: "Ursynów" };
	  },

	  render: function () {
	    return React.createElement(
	      "div",
	      { id: "district" },
	      React.createElement(
	        "h2",
	        null,
	        "Urzad dzielnicy ",
	        this.state.districtName
	      ),
	      React.createElement(DistrictOfficeContact, { districtName: this.state.districtName }),
	      React.createElement(DistrictOfficeGroups, null)
	    );
	  }

	});

	ReactDOM.render(React.createElement(DistrictOffice, null), document.getElementById('sampleQueueView'));

/***/ }
/******/ ]);