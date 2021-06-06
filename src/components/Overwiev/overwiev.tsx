import styled from 'styled-components';

import { FC } from 'react';
import { Link } from "react-router-dom";
import { SliderBar } from '../Slider/sliderBar';
import { Posty } from '../Posty/posty';

import { useSelector } from 'react-redux';
import { IState } from '../../reducers';
import { IUsersReducer } from '../../reducers/usersReducers';
import { IPhotosReducer } from '../../reducers/photosReducers';
import { ICommentsReducer } from '../../reducers/commentsReducers';
import { IPostsReducer } from '../../reducers/postsReducers'; 

const OverwievPage = styled.div`
width: 1400px;
height: 420px;
`;

const Publications = styled.div`
border: 1px solid black;
width: 1400px;
height: 420px;
margin-left: 100px;
display: flex;
`;

const Photo = styled.div` //560x420
.photo{
    background-image: url("media/pictures/fakeApi.png");
    width: 560px;
    height: 420px;
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
            width: 20px;
            border-radius: 10px;
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
    .mini{
        position: absolute;
        margin: 65px 0px 0px 95px;
        img{
            width: 18px;
            border-radius: 25px;
        }
    }
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

    const { usersList } = useSelector<IState, IUsersReducer>(globalState => globalState.users);
    const { photosList } = useSelector<IState, IPhotosReducer>(globalState => globalState.photos);
    const { commentsList } = useSelector<IState, ICommentsReducer>(globalState => globalState.comments);
    const { postsList } = useSelector<IState, IPostsReducer>(globalState => globalState.posts);

    return(
        <OverwievPage>
            <Publications>
                <Photo>
                    <div className = 'photo'>
                        <div className = 'text'>
                            {commentsList?.[0]?.body}.<br/>
                            7. jan 2020 <img src = {photosList[5]?.url} alt = '' />
                            {usersList?.[0]?.name}
                        </div>
                    </div>
                </Photo>
                <LPublications>
                        <div className = 'LPubtext'>
                            Latest publication
                        </div>
                    <Pub1>
                        <div className = 'publication'>
                        <img src = {photosList[1]?.url} alt = '' />
                            {postsList?.[0]?.body}
                            <div className = 'mini'>
                                7. jan 2020 <img src = {photosList[1]?.url} alt = '' />{usersList?.[0]?.name}
                            </div>
                        </div>
                    </Pub1>
                    <Pub2>
                        <div className = 'publication'>
                        <img src = {photosList[2]?.url} alt = '' />
                            Test post:
                            {postsList?.[0]?.body}
                            <div className = 'mini'>
                                7. jan 2020 <img src = {photosList[1]?.url} alt = '' />{usersList?.[0]?.name}
                            </div>
                        </div>
                    </Pub2>
                    <Pub3>
                        <div className = 'publication'>
                        <img src = {photosList[3]?.url} alt = '' />
                            {postsList?.[0]?.body}
                            <div className = 'mini'>
                                7. jan 2020 <img src = {photosList[1]?.url} alt = '' />{usersList?.[0]?.name}
                            </div>
                        </div>
                    </Pub3>
                    <Link to ='/Publications'>
                        <div className = 'Seemorepub'>
                            See more publication
                        </div>
                    </Link>
                </LPublications>
            </Publications>
        <SliderBar/>
        <Posty/>
        </OverwievPage>        
    )
}

//{commentsList?.[0]?.body}

//{postsList?.[0]?.body}

//{photosList[3]?.url}