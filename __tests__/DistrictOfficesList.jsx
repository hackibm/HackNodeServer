jest.dontMock('../components/DistrictOfficesList.jsx');

import React from 'react';
import DistrictOfficesList from '../components/DistrictOfficesList.jsx';
import DistrictOffice from '../components/DistrictOffice.jsx';
import { shallow, mount } from 'enzyme';

describe('DistrictOfficesList', () => {
  describe('The DistrictOfficesList Display', () => {
    const list = shallow(<DistrictOfficesList />);
    it('should be a div', () => {
      expect(list.type()).toBe('div');
    });
   it('should display suitable text in h3', () => {
    expect(list.find('h3').text()).toEqual('Lista urzędów:');
    });

 });
});
