
var DistrictOfficeContact = React.createClass({

  render: function() {
    return (<div>
    Dane kontaktowe dla: {this.props.districtName}
  </div>)
  }

});


var Group = React.createClass({

  render: function() {

    var groupData = {
       "status":"1",
       "czasObslugi":"00:03",
       "lp":"8",
       "idGrupy":"0",
       "liczbaCzynnychStan":1,
       "nazwaGrupy":"Wydawanie dowod\u00f3w rejestracyjnych",
       "literaGrupy":"H",
       "liczbaKlwKolejce":0,
       "aktualnyNumer":58
    }




    return (<div>
    ...
    </div>)
  }

});


var DistrictOfficeGroups = React.createClass({

  render: function() {

    var groupList = ["gr1", "gr2", "gr3", "gr4"];
    var groups = [];

    for (var i=0; i<groupList.length; i++) {
      groups.push(
        <Group />
      );
    }

    return (<div>{groups}</div>)
  }

});



var DistrictOffice = React.createClass({

  getInitialState: function() {
    return {districtName: "Ursynów"};
  },

  render: function() {
    return (<div id="district">
    <h2>Urzad dzielnicy {this.state.districtName}</h2>
    <DistrictOfficeContact districtName={this.state.districtName}/>
    <DistrictOfficeGroups/>
  </div>)
  }

});



ReactDOM.render(
  <DistrictOffice/>,
    document.getElementById('sampleQueueView')
);
