import styled from "styled-components"; 

export const Flexbox = styled.div`
  gap: ${(props) => props.gap};
  display: ${(props) => (props.hide ? "none" : "flex")};
  flex-basis: ${(props) => props.fb};
  flex-direction: ${(props) => props.dir};
  font-size: ${(props) => props.fsize};
  width: ${(props) => props.width};
  min-width: ${(props) => props.minWidth};
  overflow: ${(props) => props.overflow || "auto"};
  margin: ${(props) => props.margin};
  background-color: ${(props) => props.bColor};
  height: ${(props) => props.height};
  max-height: ${(props) => props.maxHeight};
  min-height: ${(props) => props.minHeight};
  cursor: ${(props) => props.cursor};
  padding: ${(props) => props.pad};
  align-items: ${(props) => props.align || props.center};
  justify-content: ${(props) => props.justify || props.center};
  border: ${(props) => props.border};
  border-bottom: ${(props) => props.borderB};
  border-right: ${(props) => props.borderR};
  border-top: ${(props) => props.borderT};
  box-shadow: ${(props) => props.boxShadow};
  flex-grow: ${(props) => props.grow};
  border-radius: ${(props) => props.bRadius};
  flex-wrap: ${(props) => props.wrap};
`;
