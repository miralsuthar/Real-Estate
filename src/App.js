import React from 'react';
import styled from 'styled-components';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';

import Nav from './components/Nav';
import GlobalStyle from './components/GlobalStyles';
import heroBackground from './img/Rectangle5.png';
import Img from './components/Image';
import Image1 from './img/image1.jpg';
import Image2 from './img/image2.jpg';
import Image3 from './img/image3.jpg';
import Button from './components/Button';
import AboutBackground from './img/Rectangle9.png';
import Input from './components/Input';
import EstateDataList from './components/estateDataList';

const App = () => {
    return (
        <Router>
        <div>
            
            <GlobalStyle />
            <Nav />
            <HeroSection>
                <Image src={heroBackground} alt="background svg"></Image>
                <HeroDescription>
                    <h1> A <span>different</span> way to <br /> buying and selling real state. </h1>
                </HeroDescription>
                <BuyerSellerSection>
                    <div>
                        <Img source={Image1} />
                        <Button text="For Seller" />
                    </div>
                    <div>
                        <Img source={Image2} />
                        <Button text="For Buyers" />
                    </div>
                </BuyerSellerSection>
            </HeroSection>
            <Route path="/">
            
            <AboutUsSection>
            <Image src={AboutBackground}></Image>
            <div>
                <h1>We helped buy and<br />sell over hundreds of<br />real estate.</h1>
                <Link to="/properties"><Button text="Properties" /></Link>
            </div>
            <AboutUsImage>
                <Img source={Image3} />
            </AboutUsImage>
            
            </AboutUsSection>
            </Route>
            <Route path="/properties">
                <EstateDataList />
            </Route>
            <ContactUsSection>
                <Contact>
                    <h2> Let's Talk</h2>
                    <Input holder="Name" />
                    <Input holder="Email"/>
                    <Input holder="Phone no." />
                    <SubmitButton>SUBMIT</SubmitButton>
                </Contact>
            </ContactUsSection>
            
        </div>
        </Router>
    );
};


const HeroSection = styled.div`
    min-height: 80vh;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    text-align: center;
    h1{
        font-family: 'Montserrat', sans-serif;
        font-weight: bold;
        font-size: 3.3rem;
    }
    span{
        font-family: 'Fascinate', cursive;
    }
    position: relative;
    overflow: hidden;
`;

const Image = styled.img`
    top: 0;
    left: 0;
    position: absolute;
    z-index: -100;
`;

const HeroDescription = styled.div`
    margin-top: 20rem;
    margin-bottom: 10rem;
`

const BuyerSellerSection = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 60%;
`;

const AboutUsSection = styled.div`
    margin-top: 10rem;
    min-height: 100vh;
    position: relative;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0rem 5rem;
    div{
        font-size: 3rem;
        font-family: 'Montserrat', sans-serif;
        font-weight: 500;
        color: #FFFFFF;
    }
`;

const AboutUsImage = styled.div`
    
`;

const ContactUsSection = styled.div`
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items:center;
`;

const Contact = styled.div`
    display: flex;
    flex-direction:column;
    justify-content: space-between;
    align-items:center;
    background-color: #E4FBFF;
    padding: 10rem 15rem;
    position: relative;
    h2{
        font-size: 2rem;
        font-family: 'Montserrat', sans-serif;
        font-weight: bold;
        color: #7868E6;
    }
`;

const SubmitButton = styled.button`
        margin-top: 1rem;
        border: none;
        font-size: 2rem;
        font-family: 'Montserrat', sans-serif;
        font-weight: bold;
        padding: 0.7rem 11rem;
        border-radius: 1rem;
        background-color: #7868E6;
        color: white;
        cursor: pointer;
`;

export default App;
