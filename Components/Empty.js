import React from "react";
import styled from "styled-components";

export default function Empty() {
  return (
    <ComponentContainer>
      <EmptyImage
        source={require("../assets/images/background-empty.png")}
      />
      <EmptyText>Añade una tarea</EmptyText>
    </ComponentContainer>
  );
}

const ComponentContainer = styled.View`
  align-items: center;
  justify-content: center;
  height: 650px;
`;

const EmptyImage = styled.Image`
  width: 350px;
  height: 270px;
`;

const EmptyText = styled.Text`
  color: white;
  font-family: poppins-bold;
  margin-top: 30px;
  font-size: 30px;
`;
