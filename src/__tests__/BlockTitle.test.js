import React from 'react';
import BlockTitle from '../BlockTitle';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('<BlickTitle />', () => {
	test('renders', () => {
		const wrapper = shallow(<BlockTitle title="test title" icon="info"/>);
		expect(wrapper.exists()).toBe(true);
	});
});
