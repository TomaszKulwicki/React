import styled from 'styled-components';
import useDropdown from 'react-dropdown-hook';

import { FC } from 'React';
import { Wrapper } from '../styledHelpers/Components';
import { ExpandedMenu } from './ExpandedMenu';
import { Link } from "react-router-dom";

const InnerWrapper = styled.div`
width: 100%;
height: 40px;
background-color: white;
display: flex;
align-items: center;
position: relative;
.logo{
    width: 35px;
    height: 35px;
    display: flex;
    justify-content: center;
    align-items:center;
    margin: 0 10px;
    padding: 0;
}
`;

const RightIcons = styled.div`
width: 8%;
display: flex;
align-items: center;
justify-content: space-between;
position: absolute;
right: 15px;
.righticons{
    background-color: #d6d6cf;
    width: 30px;
    height: 30px;
    border-radius: 20px;
    border-top-right-radius: 0;
    img{
        padding: 5px;
    }
    .number{
        background-color: #4254A8;
        width: 10px;
        height: 10px;
        font-size: 10px;
        color: white;
        border-radius: 10px;
        position: absolute;
        margin-left: 25px;
        text-align: center;
        line-height: 10px;
    }
}
`;

const InputWrapper = styled.div`
width: 45%;
display: flex;
align-content: center;
margin-left: 35%;
input{
    border: none;
    width: 100%;
}
.search{
    border: 1px solid grey;
    border-radius: 5px;
    width: 50%;
    display: flex;
    padding: 5px;
}
`;

const ExpandedMenu1 = styled.div``;

const Menu = styled.div`
.arrow{
    margin-left: 15px;
}
`;

export const TopBar: FC = () => {
    const [wrapperRef, dropdownOpen, toggleDropdown] = useDropdown();
    return(
        <Wrapper>
            <InnerWrapper>
                <img src = "media/icons/logo.png" className = "logo" alt = ""/>
                <img src = "media/icons/house.png" className = "house" alt = ""/>
                <div>
                    <ExpandedMenu1>
                        <Menu ref = {wrapperRef}> 
                            <img onClick = { toggleDropdown } src = 'media/icons/arrow-down.png' className = 'arrow' alt = ''/>
                            { dropdownOpen && 
                            <ExpandedMenu/>
                            }
                        </Menu>
                    </ExpandedMenu1>
                </div>
                <InputWrapper>
                    <div className = 'search'>     
                        <input type = "text" placeholder = 'Search'/>    
                        <img src = "media/icons/search1.png" alt = ""/>
                    </div>
                </InputWrapper>
                <RightIcons>
                    <Link to = '/'>
                        <img src = "media/icons/house.png" alt = ""/>
                    </Link>
                    <div className = 'righticons'>
                        <div className = 'number'>2</div>
                        <img src = "media/icons/comments.png" alt = ""/>
                    </div>
                    <div className = 'righticons'>
                        <div className = 'number'>4</div>
                        <img src = "media/icons/bell.png" alt = ""/>
                    </div>
                </RightIcons>
            </InnerWrapper>
        </Wrapper>
    );
};