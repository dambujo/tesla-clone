import React from 'react';
import styled from 'styled-components';
import Section from './Section';

function Home() {
  return (
    <Container>
      <Section
        title="Model 3"
        description="Order Online for Touchless Deliver"
        backgroundImg="model-3.jpg"
        leftBtnText="Customer order"
        rightBtnText="Existing Inventory"
      />
      <Section
        title="Model Y"
        description="Order Online for Touchless Deliver"
        backgroundImg="model-y.jpg"
        leftBtnText="Customer order"
        rightBtnText="Existing Inventory"
      />
      <Section
        title="Model S"
        description="Order Online for Touchless Deliver"
        backgroundImg="model-s.jpg"
        leftBtnText="Customer order"
        rightBtnText="Existing Inventory"
      />

      <Section
        title="Model X"
        description="Order Online for Touchless Deliver"
        backgroundImg="model-x.jpg"
        leftBtnText="Customer order"
        rightBtnText="Existing Inventory"
      />

      <Section
        title="Solar Panel"
        description="Lowest Cost Solar Panels in America"
        backgroundImg="solar-panel.jpg"
        leftBtnText="Order now"
        rightBtnText="Learn more"
      />

      <Section
        title="Solar Roof"
        description="Produce Clean Energy From Your Roof"
        backgroundImg="model-x.jpg"
        leftBtnText="Customer order"
        rightBtnText="Existing Inventory"
      />

      <Section
        title="Acessories"
        description=""
        backgroundImg="accessories.jpg"
        leftBtnText="Customer order"
        rightBtnText=""
      />
    </Container>
  );
}

export default Home;

const Container = styled.div`
  height: 100vh;
`;
