"use strict";

jest.dontMock('../components/DistrictOfficeContact.jsx');

import React from 'react';
import TestUtils from 'react-addons-test-utils';
import DistrictOfficeContact from '../components/DistrictOfficeContact.jsx';

describe('DistrictOfficeContact', function() {

	 
	  describe("The DistrictOfficeContact Display",()=>{
			const renderer = TestUtils.createRenderer();
			renderer.render(<DistrictOfficeContact />);
			let result = renderer.getRenderOutput();
			let contact = TestUtils.renderIntoDocument(<DistrictOfficeContact districtName='Wola'/>);

			it("should be a div",()=>{	
				expect(result.type).toBe('div');			
			});

			it("should display suitable text",()=>{
				let label = TestUtils.findRenderedDOMComponentWithTag(contact , 'div');
				expect(label.textContent).toEqual("Dane kontaktowe dla: Wola");
			});
	 
	})
})