import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  padding: 1em;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  border-top: 1px solid #6e6e6e;

  &:first-child {
    border-top: none;
  }
`;

export default Wrapper;