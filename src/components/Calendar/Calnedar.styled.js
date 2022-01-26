import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: white;
  width: 30%;
  height: 30rem;
  margin: auto;
  margin-bottom: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const DayNameConatainer = styled.div`
  display: flex;
  height: 3rem;
  background-color: aqua;
`;
export const DayNames = styled.div`
  color: red;
  width: 100%;
  height: 3rem;
  padding: 0.5rem;
  font-size: 1.4rem;
`;

export const Week = styled.div`
  color: blue;
  border: solid blue 1px;
  display: flex;
  width: 100%;
  height: 16%;
`;

export const Day = styled.div`
  color: ${(props) => (props.color ? props.color : "blue")};
  width: 90%;
  border: solid blue 1px;
  font-size: 1.5rem;
  padding: 0.5rem;
`;
