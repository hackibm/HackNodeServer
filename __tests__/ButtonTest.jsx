jest.dontMock('../components/Button.jsx');

import React from 'react';
import Button from '../components/Button.jsx';
import { shallow } from 'enzyme';

describe('Button', () => {
  describe('Button Display', () => {
    const button = shallow(<Button />);
    it('should be a div', () => {
      expect(button.type()).toBe('div');
    });
    it('should display suitable text', () => {
      expect(button.find('button').length).toEqual(1);
    });
    it('button should have correct text', () => {
      expect(button.find('button').get(0).props.value).toEqual('Załatw sprawę');
    });
  });
});
