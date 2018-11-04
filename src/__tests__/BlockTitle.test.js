import React from 'react';
import BlockTitle from '../BlockTitle';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('BlickTitle component', () => {
	test('render', () => {
		const wrapper = shallow(<BlockTitle title="test title" icon="info"/>);
		expect(wrapper.exists()).toBe(true);
	});

	test('DOM id is correct', () => {
		const wrapper = shallow(<BlockTitle icon="info" />);
		const title = 'THE TITLE';
		wrapper.setProps({
			title
		});

		expect(wrapper.find('.BlockTitle').props().id).toEqual(title);
	});

	test('font-awesome icon', () => {
		const wrapper = shallow(<BlockTitle title="test" />);
		const icon = 'info';
		wrapper.setProps({
			icon
		});

		expect(wrapper.find('i.fa').hasClass(`fa-${icon}`)).toBe(true);
	});

	test('render h4 text', () => {
		const wrapper = shallow(<BlockTitle icon="info" />);
		const title = "TITLE";
		wrapper.setProps({
			title
		});

		expect(wrapper.find('h4').text().trim()).toEqual(title);
	});
});
