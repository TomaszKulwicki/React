import styled from 'styled-components';

import { FC } from 'React';
import { Link } from "react-router-dom";

const Publications = styled.div`
border: 1px solid black;
width: 1400px;
height: 420px;
margin-left: 100px;
display: flex;
`;

const Photo = styled.div` //560x420
.photo{
    background-image: url("media/pictures/skyscraper.jpg");
    width: 560px;
    height: 420px;
    /* position: relative; */
    display: flex;
    .text{
        color: white;
        bottom: 0px;
        width: 560px;
        height: 80px;
        display: inline-block;
        align-self: flex-end;
        }
        img{
            width: 17px;
        }
    }
`;

const LPublications = styled.div`
.publication{
    border: 1px black solid;
    width: 700px;
    height: 90px;
    margin-top: 20px;
    margin-left: 65px;
    display: flex;
}
.LPubtext{
    margin-top: 15px;
    margin-left: 65px;
    color: #4254A8;
    font-size: 20px;
    font-weight: bold;
}
.Seemorepub{
    margin-top: 15px;
    margin-left: 65px;
    color: #4254A8; 
    text-decoration:underline #f1f1f1;
}
`;

const Pub1 = styled.div``;

const Pub2 = styled.div``;

const Pub3 = styled.div``;

export const Overwiev: FC = () => {
    return(
        <Publications>
            <Photo>
                <div className = 'photo'>
                    <div className = 'text'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Vestibulum non convallis risus. Nulla at felis urna. 
                        Proin semper sed massa sed interdum. 
                        Pellentesque bibendum iaculis euismod.<br/>
                        7. jan 2020 <img src = 'media/icons/face.png' alt = '' />
                        Barney Stinson
                    </div>
                </div>
            </Photo>
            <LPublications>
                    <div className = 'LPubtext'>
                        Latest publication
                    </div>
                <Pub1>
                    <div className = 'publication'>
                    <img src = 'media/pictures/exam.jpg' alt = '' />
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Vestibulum non convallis risus. Nulla at felis urna. 
                        Proin semper sed massa sed interdum.
                    </div>
                </Pub1>
                <Pub2>
                    <div className = 'publication'>
                    <img src = 'media/pictures/exam.jpg' alt = '' />
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Vestibulum non convallis risus. Nulla at felis urna. 
                        Proin semper sed massa sed interdum.
                    </div>
                </Pub2>
                <Pub3>
                    <div className = 'publication'>
                    <img src = 'media/pictures/exam.jpg' alt = '' />
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Vestibulum non convallis risus. Nulla at felis urna. 
                        Proin semper sed massa sed interdum.
                    </div>
                </Pub3>
                <Link to ='/Publications'>
                    <div className = 'Seemorepub'>
                        See more publication
                    </div>
                </Link>
            </LPublications>
        </Publications>
    )
}