const caseList = [
  {
   "id": "drivingLicense",
   "name": "Prawa jazdy",
   "groupNames" : ["D-PRAWA JAZDY","PRAWA JAZDY","Prawa Jazdy","J-PRAWA JAZDY","L: PRAWA JAZDY"],
 },
   {
    "id": "income500+",
    "name": "500+ z wykazaniem dochodu",
    "groupNames" : ["Y-500+","500+","Program 500+ Al. Solidarności","Z: PUNKT PODAWCZY, 500+", "J: 500+ Z WYKAZANIEM DOCHODU"],
  },
    {
     "id": "identityCard",
     "name": "Dowody osobiste",
     "groupNames" : ["A-DOWODY OSOBISTE","DOW. OSOBISTE(SKŁ. DOK.)","Meldunki i dowody","M-MELDUNKI, DOWODY OSOBISTE", "P: MELDUNKI - SKŁADANIE WNIOSKÓW"],

   },
     {
      "id": "noIncome500+",
      "name": "500+ bez wykazania dochodu",
      "groupNames" : ["Y-500+","500+","Program 500+ Al. Solidarności","Z: PUNKT PODAWCZY, 500+", "F: 500+ BEZ WYKAZANIA DOCHODU"],
    }];


export function getAllCases(){
  return caseList;
}

export function mapCaseId(caseId){
  var mappedNames = [];
  caseList.forEach(c => {
    if(c.id == caseId){
      mappedNames = c.groupNames;
      //return c.groupNames;
    }
  });
  return mappedNames;
}
