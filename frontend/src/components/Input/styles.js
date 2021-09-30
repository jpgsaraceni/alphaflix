import styled from 'styled-components';

export const Container = styled.input`
	height: 50px;
	margin: 10px 0;
	padding-left: 20px;
	background: rgba(255, 255, 255, 1);
	border-radius: 3px;
	font-size: 18px;

	::placeholder {
		color: rgba(231, 231, 231, 1);
		font-weight: 400;
	}
`;