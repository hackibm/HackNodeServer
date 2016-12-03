jest.dontMock('../components/DistrictOfficesList.jsx');

import React from 'react';
import DistrictOffice from '../components/DistrictOffice.jsx';
import { Link } from 'react-router';
import { shallow } from 'enzyme';

describe('DistrictOffice', () => {
  describe('The DistrictOffice Display', () => {
    const office = shallow(<DistrictOffice name="Wola"/>);
    it('should be a div', () => {
      expect(office.type()).toBe('div');
    });
   it('should display name', () => {
     expect(office.find(Link).get(0).props.to).toEqual('contact/Wola');
  });
 });
});
