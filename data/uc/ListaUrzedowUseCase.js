import { initCloudant } from '../../data/cloudant/CloudantService';

class ListaUrzedowUseCase {

  constructor() {
    this.db = initCloudant('um');
    console.log('konstruktor');
  }

  getUmList(idUrzedu, callback) {
    let selector;

    if (idUrzedu === '') {
      selector = { 'selector': {} };
    } else {
      selector = { 'selector': { 'wawId': idUrzedu } };
    }

    this.db.find(selector, (err, result) => {
      // przetwarzanie
      const urzedy = [];
      var d = new Date();
      var hours = '';
      console.log('db result: '+d.getHours()+' '+d.getDay());
      var isOfficeOpen = true;
      if (d.getHours() < 8) {
        isOfficeOpen = false;
        console.log('mniejsze od 8');
      }

      var currentDayOfWeek = d.getDay();
      if (currentDayOfWeek == 1){
        hours = '8:00-18:00';
        console.log('poniedzialek');
        if (d.getHours() > 18){
          isOfficeOpen = false;
          console.log('wieksze od 18');
        }
      }
      if (currentDayOfWeek > 1 && currentDayOfWeek < 6){
        console.log('w tygodniu');
        hours = '8:00-16:00';
        if (d.getHours() > 16){
          isOfficeOpen = false;
          console.log('wieksze od 16');
        }
      }
      if (currentDayOfWeek == 0 || currentDayOfWeek == 6){
        hours = 'nieczynne';
        console.log('weekend');
        isOfficeOpen = false;
      }


      result.docs.forEach(urzad => {
        urzedy.push({
          id: urzad.wawId,
          name: urzad.name,
          contactInfo: {
            phone: urzad.phone,
            address: urzad.address,
            latitude: urzad.latitude,
            longitude: urzad.longitude,
            email: urzad.email,
            openingHours: hours,
            isOpen: isOfficeOpen,
          },
        });
      });

      callback(urzedy);
    });
  }
}

const listaUrzedowUseCase = new ListaUrzedowUseCase();

module.exports = listaUrzedowUseCase;
