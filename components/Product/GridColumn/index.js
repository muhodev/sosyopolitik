import styled from "styled-components";

const Style = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 6px;
`;

export function GridColumn(props) {
  return <Style>{props.children}</Style>;
}
