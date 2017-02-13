import styled from 'styled-components';

const Button = styled.div`
  height: 40px;
  width: 125px;
  background-color: #ec3c3c;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    box-shadow: 1px 1px 1px black;
  }
`;

export default Button;
