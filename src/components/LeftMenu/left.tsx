import styled from 'styled-components';

import { FC } from 'react';
import { Link } from 'react-router-dom';

import { useSelector } from 'react-redux';
import { IState } from '../../reducers';
import { IUsersReducer } from '../../reducers/usersReducers';
import { IPhotosReducer } from '../../reducers/photosReducers';

//https://jsonplaceholder.typicode.com/

const LefttMenu = styled.div `
margin: 25px;
width: 230px;
`;

const Card = styled.div`
border: 1px black solid;
border-radius: 10px;
padding: 25px;
`;

const Profile = styled.div`
.name{
    color: #4254A8;
    font-size: 20px;
    text-decoration:underline #f1f1f1;
}
.job{
    color:grey;
    font-size: 13px;
}
img{
    width: 100px;
    height: 100px;
    border-radius: 100px;
}
text-align: center;
`;

const ProfileButtons = styled.div`
.user-plus{
    float: right;
}
.plus{
    float: right;
}
`;

const Ynetwork = styled.div`
.user-plus{
    border: 1px solid black;
    padding: 2px;
    border-radius: 5px;
}
.network{
    margin-right: 15px;
}
`;

const Ypublications = styled.div`
.plus{
    border: 1px solid black;
    padding: 2px;
    border-radius: 5px;
}
.publications{
    margin-right: 15px;
}
`;

const CardButtons = styled.div`
padding-left: 25px;
padding-top: 10px;
p{
    text-decoration:underline #f1f1f1;
    color: black;
}
`;

const Publications = styled.div`
img{
    margin-right: 15px;
}
`;

const Ecosystem = styled.div`
img{
    margin-right: 15px;
}
`;

const Entities = styled.div`
img{
    margin-right: 15px;
}
`;

export const LeftMenu: FC = () => {

    const { usersList } = useSelector<IState, IUsersReducer>(globalState => globalState.users);
    const { photosList } = useSelector<IState, IPhotosReducer>(globalState => globalState.photos);

    return (    
        <LefttMenu>
            <Card>
                <Profile>
                    <Link to = '/Profile'>
                        <img src = {photosList[0]?.url} className = 'face' alt = ''/>
                        <div className = 'name'>{usersList?.[0]?.name}</div>
                    </Link>
                    <div className = 'job'>Job title - Company</div><hr></hr>
                </Profile>
                <ProfileButtons>
                    <Ynetwork>
                        <img src = 'media/icons/network.png' className = 'network' alt = ''/>
                        Your network
                        <img src = 'media/icons/user-plus.png' className = 'user-plus' alt = ''/>
                    </Ynetwork>
                    <Ypublications>
                        <img src = 'media/icons/publications.png' className = 'publications' alt = ''/>
                        Your Publications
                        <img src = 'media/icons/plus.png' className = 'plus' alt = ''/>
                    </Ypublications>
                </ProfileButtons>
            </Card>
                <CardButtons>
                    <Publications>
                        <Link to = '/publications'>
                        <p><img src = 'media/icons/publications.png' alt = ''/>
                        Publications</p>
                        </Link>
                    </Publications>
                    <Ecosystem>
                        <Link to = '/ecosystem'>
                        <p><img src = 'media/icons/ecosystem.png' alt = ''/>
                        Ecosystems</p>
                        </Link>
                    </Ecosystem>
                    <Entities>
                        <Link to = '/entities'>
                        <p><img src = 'media/icons/entities2.png' alt = ''/>
                        Entities</p>
                        </Link>
                    </Entities>
                </CardButtons>
        </LefttMenu>
    );
}