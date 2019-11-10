import styled from "styled-components";

export const ButtonContainer = styled.button`
  text-transform: capitalize;
  font-size: 1.4rem;
  background: transparent;
  border: 0.05rem solid var(--lightRed);
  border-color: ${props =>
    props.cart ? "var(--mainYellow)" : "var(--lightRed)"};
  color: ${props => (props.cart ? "var(--secondYellow)" : "var(--lightRed)")};
  border-radius: 0.5rem;
  padding: 0.2rem 0.5rem;
  cursor: pointer;
  margin: 0.2rem 0.5rem 0.2rem 0;
  transition: all 0.5s ease;
  &:hover {
    background: ${props => (props.details ? "var(--mainRed)" : "")};
    color: var(--mainWhite);
    border-color: var(--mainYellow);
  }
  &:focus {
    outline: none;
  }
`;
