import React from 'react';
import styled from 'styled-components';
import Section from './Section';

function Home() {
  return (
    <Container>
      <Section
        title="Model S"
        description="Order Online for Touchless Deliver"
        backgroundImg="mode-s.jpg"
        leftBtnText="Customer order"
        rightBtnText="Existing Inventory"
      />
      <Section
        title="Model y"
        description="Order Online for Touchless Deliver"
        backgroundImg="mode-y.jpg"
        leftBtnText="Customer order"
        rightBtnText="Existing Inventory"
      />
      <Section
        title="Model 3"
        description="Order Online for Touchless Deliver"
        backgroundImg="mode-3.jpg"
        leftBtnText="Customer order"
        rightBtnText="Existing Inventory"
      />

      <Section
        title="Model x"
        description="Order Online for Touchless Deliver"
        backgroundImg="mode-x.jpg"
        leftBtnText="Customer order"
        rightBtnText="Existing Inventory"
      />
    </Container>
  );
}

export default Home;

const Container = styled.div`
  height: 100vh;
`;
