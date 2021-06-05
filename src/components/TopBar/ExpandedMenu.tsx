import { FC, useState, ChangeEvent } from 'react';  //React
import styled from 'styled-components';
import { Link } from "react-router-dom";

import { useSelector } from 'react-redux';
import { IState } from '../../reducers';
import { IUsersReducer } from '../../reducers/usersReducers';
import { IPhotosReducer } from '../../reducers/photosReducers';

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
    border-radius: 25px;
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

const Category = styled.div`
overflow:scroll;
overflow-x: hidden;
height: 400px;
`;

export const ExpandedMenu: FC = () =>  {

    const { usersList } = useSelector<IState, IUsersReducer>(globalState => globalState.users);
    const { photosList } = useSelector<IState, IPhotosReducer>(globalState => globalState.photos);

    const [inputText, setInputText] = useState<string>('');

    const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const text = e.target.value;
        setInputText(text)
    }

    return(
        <Menu>
            <Corporate>

            </Corporate>
            <Filter>
                <input type = 'text' placeholder = 'Filter...' className = 'place' value = {inputText} onChange = {inputHandler}></input>
            </Filter>
            <Category>
                <Platform>
                        <div className = 'title'>Platform</div>               
                    <Link to = '/'>
                    {'Home'.toLowerCase().includes(inputText.toLowerCase()) &&
                        <p><img src = 'media/icons/house.png' alt = ''/>Home</p>
                    }
                    </Link>
                    <Link to = '/Publications'>
                    {'Publications'.toLowerCase().includes(inputText.toLowerCase()) &&
                        <p><img src = 'media/icons/publications.png' alt = ''/>Publications</p>
                    }
                    </Link>
                    {'People'.toLowerCase().includes(inputText.toLowerCase()) &&
                        <p><img src = 'media/icons/people.png' alt = ''/>People</p>
                    }
                        <Link to = '/Entities'>
                    {'Entities'.toLowerCase().includes(inputText.toLowerCase()) &&
                        <p><img src = 'media/icons/entities.png' alt = ''/>Entities</p>
                    }
                        </Link>
                    {'Administration'.toLowerCase().includes(inputText.toLowerCase()) &&
                        <p><img src = 'media/icons/administration.png' alt = ''/>Administration</p>
                    }
                </Platform>
                <Workspaces>
                    <div className = 'title'>Workspaces</div>
                        {'Client contract'.toLowerCase().includes(inputText.toLowerCase()) &&
                            <p><img src = 'media/icons/sticky-note-regular.svg' alt = ''/>Client contract</p>
                        }
                        {'Supplier contract'.toLowerCase().includes(inputText.toLowerCase()) &&
                            <p><img src = 'media/icons/sticky-note-regular.svg' alt = ''/>Supplier contract</p>
                        }
                        {'Corporate'.toLowerCase().includes(inputText.toLowerCase()) &&
                            <p><img src = 'media/icons/entities.png' alt = ''/>Corporate</p>
                        }
                        {'Group norms'.toLowerCase().includes(inputText.toLowerCase()) &&
                            <p><img src = 'media/icons/book-solid.svg' alt = ''/>Group norms</p>
                        }
                        {'Real estate contracts'.toLowerCase().includes(inputText.toLowerCase()) &&
                            <p><img src = 'media/icons/sticky-note-regular.svg' alt = ''/>Real estate contracts</p>
                        }
                        {'E-commerence'.toLowerCase().includes(inputText.toLowerCase()) &&
                            <p><img src = 'media/icons/sticky-note-regular.svg' alt = ''/>E-commerence</p>
                        }
                        {'Blog'.toLowerCase().includes(inputText.toLowerCase()) &&
                            <p><img src = 'media/icons/sticky-note-regular.svg' alt = ''/>Blog</p>
                        }
                        {'Buisness'.toLowerCase().includes(inputText.toLowerCase()) &&
                            <p><img src = 'media/icons/sticky-note-regular.svg' alt = ''/>Buissnes</p>
                        }
                        {'Contact'.toLowerCase().includes(inputText.toLowerCase()) &&
                            <p><img src = 'media/icons/people.png' alt = ''/>Contact</p>
                        }
                        {'Books'.toLowerCase().includes(inputText.toLowerCase()) &&
                            <p><img src = 'media/icons/book-solid.svg' alt = ''/>Books</p>
                        }
                </Workspaces>
            </Category>
            <Account>
                <hr></hr>
                <div className = 'title'>Account</div>
                <Miniprofile>
                <img src = {photosList[0]?.url} className = 'face' alt = ''/>
                <div className = 'name'>{usersList?.[0]?.name}</div>
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

