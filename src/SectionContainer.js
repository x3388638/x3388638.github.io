import { Container } from 'reactstrap';
import styled from 'styled-components';

export default styled(Container)`
	padding-top: 20px;
	color: var(--dark);
	@media (max-width: 576px) {
		padding-right: 5px !important;
		padding-left: 5px !important;
	}
`;
