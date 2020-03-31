import styled, { css } from "styled-components";

export const Default = styled.button`
  height: 40px;
  width: 150px;
  border-radius: 5px;
  text-align: center;
  ${props =>
    props.disabled
      ? css`
          border: 1px solid #ddd;
          background-color:#ddd;
          color: #999;
        `
      : css`
          border: 1px solid
            ${props =>
              props.primary ? "#004970" : props.secondary ? "#004970" : "#333"};
          background-color: ${props =>
            props.primary ? "#004970" : props.secondary ? "#ffffff" : "#333"};
          color: ${props =>
            props.primary ? "#ffffff" : props.secondary ? "#333" : "#ffffff"};

          &:hover {
            opacity: 0.8;
          }
        `}
`;
