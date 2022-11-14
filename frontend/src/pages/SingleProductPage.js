import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { Add, Remove } from "@material-ui/icons";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { publicRequest } from "../requestMethods";
import { addProduct } from "../redux/cartRedux";
import { useDispatch } from "react-redux";

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 50px;
  display: flex;
`;
const ImageContainer = styled.div`
  flex: 1;
`;
const Image = styled.img`
  width: 85%;
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
`;
const Title = styled.h1`
  font-weight: 600;
`;

const Price = styled.h3`
  font-weight: 100;
  font-size: 20px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50%;
  margin: 30px 0px;
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;

const FilterColour = styled.div`
  width: 20px;
  height: 20px;
  margin: 10px 5 px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  cursor: pointer;
`;

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const QuantityContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Quantity = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid red;
  display: flex;
  justify-content: center;
  margin: 0px 5px;
`;

const Button = styled.button`
  padding: 15px;
  border: none;
  background-color: teal;
  cursor: pointer;
  font-weight: 800;
`;

const DetailsContainer = styled.div`
  margin: 25px;
  padding: 20px;
  display: flex;
`;
const Description = styled.div`
  margin: 20px 0 px;
`;

const Left = styled.div`
  flex: 1.5;
  margin-right: 20px;
`;

const Center = styled.div`
  flex: 0.8;
  margin-right: 20px;
`;

const Right = styled.div`
  flex: 0.8;
`;

const SingleProductPage = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    const getProduct = async () => {
      try {
        const response = await publicRequest.get("/products/find/" + id);
        setProduct(response.data);
      } catch {}
      getProduct();
    };
  }, [id]);

  const handleQuantity = (type) => {
    if (type === "decrease") {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  };

  //to update cart via Redux
  const handleClick = () => {
    dispatch(addProduct({ ...product, quantity, color, size }));
  };

  return (
    <div>
      <Container>
        <Navbar />
        <Header />
        <Wrapper>
          <ImageContainer>
            <Image src={product.image}></Image>
          </ImageContainer>
          <InfoContainer>
            <Title>{product.title} </Title>
            <Price>SGD {product.price}</Price>
            <FilterContainer>
              <Filter>
                <FilterTitle>Color</FilterTitle>
                {product.color?.map((i) => (
                  <FilterColour color={i} key={i} onClick={() => setColor(i)} />
                ))}
              </Filter>
              <Filter>
                <FilterTitle>Size</FilterTitle>
                <FilterSize onChange={(e) => setSize(e.target.value)}>
                  {product.size?.map((i) => (
                    <FilterSizeOption key={i}> {i}</FilterSizeOption>
                  ))}
                </FilterSize>
              </Filter>
            </FilterContainer>
            <AddContainer>
              <QuantityContainer>
                <Remove onClick={() => handleQuantity("decrease")} />
                <Quantity>{quantity}</Quantity>
                <Add onClick={() => handleQuantity("increase")} />
              </QuantityContainer>
              <Button onClick={handleClick}> Add to Cart</Button>
            </AddContainer>
          </InfoContainer>
        </Wrapper>
        <DetailsContainer>
          <Left>
            <Description>
              <Title>Description</Title>
              <p>{product.description}</p>
              <p>Key Features:</p>
              <li> Extra coverage at front </li>
              <li> Eye catching cross back detail</li>
              <li> Made of 90% organic cotton 10% Spandex</li>
            </Description>
          </Left>
          <Center>
            <Description>
              <Title>Size & Fit </Title>
              Fit: <li>Relaxed - Oversized with room all around</li>
              <li> Slit Back </li>
              <p></p>
              Model wears:
              <li>Size S</li>
              Model's height:
              <li>172 cm</li>
              Fabric:
              <li>94% Cotton, 6% Spandex</li>
            </Description>
          </Center>
          <Right>
            <Description>
              <Title>Material</Title>
              <li> Breathable cotton seamless</li>
              <li> Light, everyday support for studio & street </li>
              <li>4-Way stretch for a move-with-you feel</li>
              <li>Moisture-wicking</li>
              <li>
                Machine wash cold on gentle cycle, inside out. with like colors.
              </li>
              <li> Tumble dry low; low iron. Do not dry clean.</li>
            </Description>
          </Right>
        </DetailsContainer>
        <Newsletter />
        <Footer />
      </Container>
    </div>
  );
};

export default SingleProductPage;
