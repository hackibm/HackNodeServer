jest.dontMock('../components/Button.jsx');

import React from 'react';
import Case from '../components/Case.jsx';
import { shallow } from 'enzyme';

describe('Button', () => {
  describe('Button Display', () => {
    const  exampleCaseObj = 'sprawa1';
    const businessCase = shallow(<Case exampleCase={exampleCaseObj} />);
    it('should be a div', () => {
      expect(businessCase.type()).toBe('div');
    });
    it('should be only one div', () => {
      expect(businessCase.find('div').length).toEqual(1);
    });
    it('should have myStyle class', () => {
      expect(businessCase.find('div').get(0).props.className).toEqual('test');
    });
    it('should display correct information', () => {
      expect(businessCase.find('div').get(0).props.children)
      .toEqual(exampleCaseObj);
    });
  });
});
