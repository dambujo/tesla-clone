import React from 'react';
import styled from 'styled-components';
import data from '../utils/data';

function Section({
  //title,
  description,
  backgroundImg,
  leftBtnText,
  rightBtnText,
}) {
  return (
    <>
      {data.products.map((product, i) => (
        <Wrap key={product.slug} bgImage={product.backgroundImg}>
          <ItemText>
            <h1>{product.title}</h1>
            <p>{product.description}</p>
          </ItemText>
          <Button>
            <ButtonGroup>
              <LeftButton>{product.leftBtnText}</LeftButton>
              {product.rightBtnText && (
                <RightButton>{product.rightBtnText}</RightButton>
              )}
            </ButtonGroup>
            <DownArrow src="/images/down-arrow.svg" />
          </Button>
        </Wrap>
      ))}
    </>
  );
}

export default Section;

const Wrap = styled.div`
  width: 100vw;
  height: 100vw;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  flex-direction: column;
  display: flex;
  justify-content: space-between; // vertical
  align-items: center; // horizotal
  background-image: ${(props) => `url(${props.bgImage})`};
`;

const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;
`;
const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 30px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const LeftButton = styled.div`
  background-color: rgba(23, 26, 32, 0.8);
  height: 40px;
  width: 256px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  opacity: 0.85;
  text-transform: uppercase;
  font-size: 12px;
  cursor: pointer;
  margin: 8px;
`;

const RightButton = styled(LeftButton)`
  background-color: #fff;
  opacity: 0.6;
  color: #000;
`;

const DownArrow = styled.img`
  margin-top: 20px;
  height: 40px;
  animation: animateDown infinite 1.5s;
`;

const Button = styled.div``;
