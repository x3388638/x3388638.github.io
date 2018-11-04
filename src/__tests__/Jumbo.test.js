import React from 'react';
import Jumbo from '../Jumbo';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import fetch from 'isomorphic-fetch';

Enzyme.configure({ adapter: new Adapter() });

describe('Jumbo component', () => {
	test('render', () => {
		const wrapper = shallow(<Jumbo />);
		expect(wrapper.exists()).toBe(true);
	});

	test('render github calendar graph', () => {
		const wrapper = shallow(<Jumbo />);
		wrapper.setState({
			calendar: 'some mock github calendar graph'
		});

		expect(wrapper.find('.github-calendar-graph').length).toEqual(1);
	});
});
