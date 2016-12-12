
jest.dontMock('../components/DistrictOfficeContact.jsx');

import React from 'react';
import DistrictOfficeContact from '../components/DistrictOfficeContact.jsx';
import { shallow } from 'enzyme';

describe('DistrictOfficeContact', () => {
  describe('The DistrictOfficeContact Display', () => {
    const params = {
      districtName: 'Wola',
    };
    const contact = shallow(<DistrictOfficeContact params={params} />);
    it('should be a div', () => {
      expect(contact.type()).toBe('div');
    });

    it('should display suitable text', () => {
      expect(contact.find('h2').text()).toContain('Dane kontaktowe dla:');
    });

    it('should have in state data from qraphql', () => {
      expect(contact.state.contact).not.toBe(null);
      expect(contact.state.contact).not.toBe('undefined');
  });
  });
});
