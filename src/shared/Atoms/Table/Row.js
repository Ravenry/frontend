import styled from "styled-components";

export const Row = styled.tr`
  border-bottom: 1px solid #a8a9aa;
  &:last-child {
    border-bottom: none;
  }

  &:hover {
    opacity: 0.8;
  }
`;
