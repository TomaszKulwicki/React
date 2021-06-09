/* eslint-disable jsx-a11y/img-redundant-alt */
import { FC } from "react";
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const SliderContainer = styled.div`
width: 1400px;
height: 200px;
margin-left: 100px;
margin-top: 10px;
.Title{
  font-size:25px;
  font-weight: bold;
}
`;

const Tile = styled.div`
background-color: lightgrey;
margin: 10px;
height: 180px;
position: relative;
.text{
  position: absolute;
  top: 90px;
  left: 130px;
  font-size: 20px;
  text-decoration:underline #f1f1f1;
  color: black;
}
.picture{
  height: 80px;
  width: 447px;
}
.squarePhoto{
  background-color: white;
  width: 90px;
  height: 90px;
  position: absolute;
  top: 40px;
  left: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  img{
    height: 80px;
    width: 80px;
  }
}
`;

const MainWrapper = styled.div`
height:200px;
`;

const BottomContainer = styled.div`
position: absolute;
bottom: 0px;
margin: 8px;
.topText{
font-size: 10px;
display: flex;
margin-bottom: 5px;
}
.bottomText{
font-size: 10px;
display: flex;

}
`;

export const SliderBar: FC = () => {

    const client = 'Client contract';
    const suplier = 'Supplier contract';
    const corpo = 'Corporate';
    const norms = 'Group norms';
    const real = 'Real estate contracts';
    const commerence = 'E-commerence';
    const blog = 'Blog';
    const buisness = 'Buissnes';
    const contact = 'Contact';
    const books = 'Books';

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
    }
    return (
      <SliderContainer>
        <div className = 'Title'>Workspaces</div>
        <Slider {...settings}>
          <MainWrapper>
            <Tile>  
            <div>
              <img src = 'media/pictures/corpo.jpg' alt = '' className = 'picture'/>
            </div>
            <div className = 'squarePhoto'>
              <img src = 'media/icons/sticky-note-regular.svg' alt = 'Photo'/>
            </div>
            <div className = 'text'>
            <Link to = {{
              pathname: '/workspaces',
              state: {
                pass: 'Client contract'
              }
            }}style={{
              textDecoration: 'none', color: 'black'
            }}>
              {client}
            </Link>
            </div>
            <BottomContainer>
              <div className = 'topText'>
                <img src = 'media/icons/people.png' alt = ''/> Contracts <img src = 'media/icons/people.png' alt = ''/>112 users
              </div>
              <div className = 'bottomText'>
                Last update 2 days
              </div>
            </BottomContainer>
            </Tile>
          </MainWrapper>
          <MainWrapper>
            <Tile>
            <div>
              <img src = 'media/pictures/corpo.jpg' alt = '' className = 'picture'/>
            </div>
            <div className = 'squarePhoto'>
              <img src = 'media/icons/sticky-note-regular.svg' alt = 'Photo'/>
            </div>
            <div className = 'text'>
            <Link to = {{
              pathname: '/workspaces',
              state: {
                pass: 'Supplier contract'
              }
            }}style={{
              textDecoration: 'none', color: 'black'
            }}>
              {suplier}
            </Link>
            </div>
            <BottomContainer>
              <div className = 'topText'>
                <img src = 'media/icons/people.png' alt = ''/> Contracts <img src = 'media/icons/people.png' alt = ''/>50 users
              </div>
              <div className = 'bottomText'>
                Last update 1 days
              </div>
            </BottomContainer>
            </Tile>
          </MainWrapper>
          <MainWrapper>
            <Tile>
            <div>
              <img src = 'media/pictures/corpo.jpg' alt = '' className = 'picture'/>
            </div>
            <div className = 'squarePhoto'>
              <img src = 'media/icons/sticky-note-regular.svg' alt = 'Photo'/>
            </div>
            <div className = 'text'>
            <Link to = {{
              pathname: '/workspaces',
              state: {
                pass: 'Corporate'
              }
            }}style={{
              textDecoration: 'none', color: 'black'
            }}>
              {corpo}
            </Link>
            </div>
            <BottomContainer>
              <div className = 'topText'>
                <img src = 'media/icons/people.png' alt = ''/> Contracts <img src = 'media/icons/people.png' alt = ''/>10 users
              </div>
              <div className = 'bottomText'>
                Last update 3 days
              </div>
            </BottomContainer>
            </Tile>
          </MainWrapper>
          <MainWrapper>
            <Tile>
            <div>
              <img src = 'media/pictures/corpo.jpg' alt = '' className = 'picture'/>
            </div>
            <div className = 'squarePhoto'>
              <img src = 'media/icons/sticky-note-regular.svg' alt = 'Photo'/>
            </div>
            <div className = 'text'>
            <Link to = {{
              pathname: '/workspaces',
              state: {
                pass: 'Group norms'
              }
            }}style={{
              textDecoration: 'none', color: 'black'
            }}>
              {norms}
            </Link>
            </div>
            <BottomContainer>
              <div className = 'topText'>
                <img src = 'media/icons/people.png' alt = ''/> Contracts <img src = 'media/icons/people.png' alt = ''/>150 users
              </div>
              <div className = 'bottomText'>
                Last update 2 days
              </div>
            </BottomContainer>
            </Tile>
          </MainWrapper>
          <MainWrapper>
            <Tile>
            <div>
              <img src = 'media/pictures/corpo.jpg' alt = '' className = 'picture'/>
            </div>
            <div className = 'squarePhoto'>
              <img src = 'media/icons/sticky-note-regular.svg' alt = 'Photo'/>
            </div>
            <div className = 'text'>
            <Link to = {{
              pathname: '/workspaces',
              state: {
                pass: 'Real estate contracts'
              }
            }}style={{
              textDecoration: 'none', color: 'black'
            }}>
              {real}
            </Link>
            </div>
            <BottomContainer>
              <div className = 'topText'>
                <img src = 'media/icons/people.png' alt = ''/> Contracts <img src = 'media/icons/people.png' alt = ''/>7 users
              </div>
              <div className = 'bottomText'>
                Last update 5 days
              </div>
            </BottomContainer>
            </Tile>
          </MainWrapper>
          <MainWrapper>
            <Tile>
            <div>
              <img src = 'media/pictures/corpo.jpg' alt = '' className = 'picture'/>
            </div>
            <div className = 'squarePhoto'>
              <img src = 'media/icons/sticky-note-regular.svg' alt = 'Photo'/>
            </div>
            <div className = 'text'>
            <Link to = {{
              pathname: '/workspaces',
              state: {
                pass: 'E-commerence'
              }
            }}style={{
              textDecoration: 'none', color: 'black'
            }}>
              {commerence}
            </Link>
            </div>
            <BottomContainer>
              <div className = 'topText'>
                <img src = 'media/icons/people.png' alt = ''/> Contracts <img src = 'media/icons/people.png' alt = ''/>150 users
              </div>
              <div className = 'bottomText'>
                Last update 22 days
              </div>
            </BottomContainer>
            </Tile>
          </MainWrapper>
          <MainWrapper>
            <Tile>
            <div>
              <img src = 'media/pictures/corpo.jpg' alt = '' className = 'picture'/>
            </div>
            <div className = 'squarePhoto'>
              <img src = 'media/icons/sticky-note-regular.svg' alt = 'Photo'/>
            </div>
            <div className = 'text'>
            <Link to = {{
              pathname: '/workspaces',
              state: {
                pass: 'Blog'
              }
            }}style={{
              textDecoration: 'none', color: 'black'
            }}>
              {blog}
            </Link>
            </div>
            <BottomContainer>
              <div className = 'topText'>
                <img src = 'media/icons/people.png' alt = ''/> Contracts <img src = 'media/icons/people.png' alt = ''/>77 users
              </div>
              <div className = 'bottomText'>
                Last update 21 days
              </div>
            </BottomContainer>
            </Tile>
          </MainWrapper>
          <MainWrapper>
            <Tile>
            <div>
              <img src = 'media/pictures/corpo.jpg' alt = '' className = 'picture'/>
            </div>
            <div className = 'squarePhoto'>
              <img src = 'media/icons/sticky-note-regular.svg' alt = 'Photo'/>
            </div>
            <div className = 'text'>
            <Link to = {{
              pathname: '/workspaces',
              state: {
                pass: 'Buisness'
              }
            }}style={{
              textDecoration: 'none', color: 'black'
            }}>
              {buisness}
            </Link>
            </div>
            <BottomContainer>
              <div className = 'topText'>
                <img src = 'media/icons/people.png' alt = ''/> Contracts <img src = 'media/icons/people.png' alt = ''/>110 users
              </div>
              <div className = 'bottomText'>
                Last update 7 days
              </div>
            </BottomContainer>
            </Tile>
          </MainWrapper>
          <MainWrapper>
            <Tile>
            <div>
              <img src = 'media/pictures/corpo.jpg' alt = '' className = 'picture'/>
            </div>
            <div className = 'squarePhoto'>
              <img src = 'media/icons/sticky-note-regular.svg' alt = 'Photo'/>
            </div>
            <div className = 'text'>
            <Link to = {{
              pathname: '/workspaces',
              state: {
                pass: 'Contact'
              }
            }}style={{
              textDecoration: 'none', color: 'black'
            }}>
              {contact}
            </Link>
            </div>
            <BottomContainer>
              <div className = 'topText'>
                <img src = 'media/icons/people.png' alt = ''/> Contracts <img src = 'media/icons/people.png' alt = ''/>130 users
              </div>
              <div className = 'bottomText'>
                Last update 2 days
              </div>
            </BottomContainer>
            </Tile>
          </MainWrapper>
          <MainWrapper>
            <Tile>
            <div>
              <img src = 'media/pictures/corpo.jpg' alt = '' className = 'picture'/>
            </div>
            <div className = 'squarePhoto'>
              <img src = 'media/icons/sticky-note-regular.svg' alt = 'Photo'/>
            </div>
            <div className = 'text'>
            <Link to = {{
              pathname: '/workspaces',
              state: {
                pass: 'Books'
              }
            }}style={{
              textDecoration: 'none', color: 'black'
            }}>
              {books}
            </Link>
            </div>
            <BottomContainer>
              <div className = 'topText'>
                <img src = 'media/icons/people.png' alt = ''/> Contracts <img src = 'media/icons/people.png' alt = ''/>10 users
              </div>
              <div className = 'bottomText'>
                Last update 2 days
              </div>
            </BottomContainer>
            </Tile>
          </MainWrapper>
      </Slider>
    </SliderContainer>
    );
  }