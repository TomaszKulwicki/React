import { FC } from 'React';
import styled from 'styled-components';
import { Link } from "react-router-dom";

const Filter = styled.div`
.place{
    width: 80%;
    border: 1px solid grey;
    border-radius: 2px;
    margin-left: 15px;
    margin-top: 5px;
    margin-bottom: 5px;
}
`;

const Platform = styled.div``;

const Menu = styled.div`
background-color: white;
border: 1px solid black;
border-bottom-left-radius: 10px;
border-bottom-right-radius: 10px;
position: absolute;
padding: 10px;
width: 200px;
margin-top:13px;
.title{
    color: grey;
    font-size: 15px;
}
img{
    margin-right: 10px;
}
`;

const Corporate = styled.div``;

const Workspaces = styled.div`
img{
    width: 20px;
    height: 20px;
    text-decoration:underline #f1f1f1;
}
`;

const Account = styled.div`
.face{
    width: 30px;
    height: 30px;
    float: left;
}
`;

const Logout = styled.div``;

const Miniprofile = styled.div`
.see{
    color:#4254A8;
}
.see, .name{
    float: left;
}
`;

export const ExpandedMenu: FC = () =>  {
    return(
        <Menu>
            <Corporate>

            </Corporate>
            <Filter>
                <input type = 'text' placeholder = 'Filter...' className = 'place'></input>
            </Filter>
            <Platform>
                <div className = 'title'>Platform</div>
                <Link to = '/'>
                    <img src = 'media/icons/house.png' alt = ''/>Home
                </Link>
                <Link to = '/Publications'>
                    <p><img src = 'media/icons/publications.png' alt = ''/>Publications</p>
                </Link>
                <p><img src = 'media/icons/people.png' alt = ''/>People</p>
                    <Link to = '/Entities'>
                <p><img src = 'media/icons/entities.png' alt = ''/>Entities</p>
                    </Link>
                <p><img src = 'media/icons/administration.png' alt = ''/>Administration</p>
            </Platform>
            <Workspaces>
                <div className = 'title'>Workspaces</div>
                <p><img src = 'media/icons/sticky-note-regular.svg' alt = ''/>Client contract</p>
                <p><img src = 'media/icons/sticky-note-regular.svg' alt = ''/>Supplier contract</p>
                <p><img src = 'media/icons/entities.png' alt = ''/>Corporate</p>
                <p><img src = 'media/icons/book-solid.svg' alt = ''/>Group norms</p>
                <p><img src = 'media/icons/sticky-note-regular.svg' alt = ''/>Real estate contracts</p>
            </Workspaces>
            <Account>
                <hr></hr>
                <div className = 'title'>Account</div>
                <Miniprofile>
                <img src = 'media/icons/face.png' className = 'face' alt = ''/>
                <div className = 'name'>Imie i nazwisko chyba</div>
                <Link to ='/Profile'>
                    <div className = 'see'>See profile</div>
                </Link>
                </Miniprofile><br></br><br></br>
                <p><img src = 'media/icons/privacy.png' alt = ''/>Privacy</p>
                <img src = 'media/icons/settings.png' alt = ''/>Settings
            </Account>
            <Logout>
                <hr></hr>
                <img src = 'media/icons/logout.png' alt = ''/>Logout
            </Logout>
        </Menu>
    );
};

