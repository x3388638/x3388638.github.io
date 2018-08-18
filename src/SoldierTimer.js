import React from 'react';
import moment from 'moment';
import styled from 'styled-components';

const Timer = styled.span`
	color: #999;
	font-size: 12px;
	margin-bottom: 10px;
	border: 1px solid #999;
	border-radius: 5px;
	padding: 1px 8px;
	display: inline-block;
	background: #eaeaea;
`;

export default (props) => {
	const revive = moment(props.end).add(1, 'days').diff(moment(), 'day') <= 0;
	if (revive) {
		return null;
	}

	const isDead = moment(props.start).add(1, 'days').diff(moment(), 'day') <= 0;
	const days = isDead ? moment(props.end).add(1, 'days').diff(moment(), 'day') : moment(props.start).add(1, 'days').diff(moment(), 'day');
	return (
		<Timer>{ `倒數 ${ days } 天${ isDead ? '退伍' : '入伍' }QQ` }</Timer>
	);
}
