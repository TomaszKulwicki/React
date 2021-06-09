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
z-index: 3;
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
                    <Link to = '/' 
                    style={{
                        textDecoration: 'none', color: 'black'
                    }}>
                    {'Home'.toLowerCase().includes(inputText.toLowerCase()) &&
                        <p><img src = 'media/icons/house.png' alt = ''/>Home</p>
                    }
                    </Link>
                    <Link to = '/Publications' 
                    style={{
                        textDecoration: 'none', color: 'black'
                    }}>
                    {'Publications'.toLowerCase().includes(inputText.toLowerCase()) &&
                        <p><img src = 'media/icons/publications.png' alt = ''/>Publications</p>
                    }
                    </Link>
                    {'People'.toLowerCase().includes(inputText.toLowerCase()) &&
                        <p><img src = 'media/icons/people.png' alt = ''/>People</p>
                    }
                    <Link to = '/Entities' 
                    style={{
                        textDecoration: 'none', color: 'black'
                    }}>
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
                            <p><img src = 'media/icons/sticky-note-regular.svg' alt = ''/>            
                            <Link to = {{
                                pathname: '/workspaces',
                                state: {
                                  pass: 'Client contract'
                                }
                              }}style={{
                                textDecoration: 'none', color: 'black'
                              }}>
                                {client}
                              </Link></p>
                        }
                        {'Supplier contract'.toLowerCase().includes(inputText.toLowerCase()) &&
                            <p><img src = 'media/icons/sticky-note-regular.svg' alt = ''/>            
                            <Link to = {{
                                pathname: '/workspaces',
                                state: {
                                  pass: 'Supplier contract'
                                }
                              }}style={{
                                textDecoration: 'none', color: 'black'
                              }}>
                                {suplier}
                              </Link></p>
                        }
                        {'Corporate'.toLowerCase().includes(inputText.toLowerCase()) &&
                            <p><img src = 'media/icons/entities.png' alt = ''/>            
                            <Link to = {{
                                pathname: '/workspaces',
                                state: {
                                  pass: 'Corporate'
                                }
                              }}style={{
                                textDecoration: 'none', color: 'black'
                              }}>
                                {corpo}
                              </Link></p>
                        }
                        {'Group norms'.toLowerCase().includes(inputText.toLowerCase()) &&
                            <p><img src = 'media/icons/book-solid.svg' alt = ''/>            
                            <Link to = {{
                                pathname: '/workspaces',
                                state: {
                                  pass: 'Group norms'
                                }
                              }}style={{
                                textDecoration: 'none', color: 'black'
                              }}>
                                {norms}
                              </Link></p>
                        }
                        {'Real estate contracts'.toLowerCase().includes(inputText.toLowerCase()) &&
                            <p><img src = 'media/icons/sticky-note-regular.svg' alt = ''/>            
                            <Link to = {{
                                pathname: '/workspaces',
                                state: {
                                  pass: 'Real estate contracts'
                                }
                              }}style={{
                                textDecoration: 'none', color: 'black'
                              }}>
                                {real}
                              </Link></p>
                        }
                        {'E-commerence'.toLowerCase().includes(inputText.toLowerCase()) &&
                            <p><img src = 'media/icons/sticky-note-regular.svg' alt = ''/>            
                            <Link to = {{
                                pathname: '/workspaces',
                                state: {
                                  pass: 'E-commerence'
                                }
                              }}style={{
                                textDecoration: 'none', color: 'black'
                              }}>
                                {commerence}
                              </Link></p>
                        }
                        {'Blog'.toLowerCase().includes(inputText.toLowerCase()) &&
                            <p><img src = 'media/icons/sticky-note-regular.svg' alt = ''/>           
                             <Link to = {{
                                pathname: '/workspaces',
                                state: {
                                  pass: 'Blog'
                                }
                              }}style={{
                                textDecoration: 'none', color: 'black'
                              }}>
                                {blog}
                              </Link></p>
                        }
                        {'Buisness'.toLowerCase().includes(inputText.toLowerCase()) &&
                            <p><img src = 'media/icons/sticky-note-regular.svg' alt = ''/>            
                            <Link to = {{
                                pathname: '/workspaces',
                                state: {
                                  pass: 'Buisness'
                                }
                              }}style={{
                                textDecoration: 'none', color: 'black'
                              }}>
                                {buisness}
                              </Link></p>
                        }
                        {'Contact'.toLowerCase().includes(inputText.toLowerCase()) &&
                            <p><img src = 'media/icons/people.png' alt = ''/>            
                            <Link to = {{
                                pathname: '/workspaces',
                                state: {
                                  pass: 'Contact'
                                }
                              }}style={{
                                textDecoration: 'none', color: 'black'
                              }}>
                                {contact}
                              </Link></p>
                        }
                        {'Books'.toLowerCase().includes(inputText.toLowerCase()) &&
                            <p><img src = 'media/icons/book-solid.svg' alt = ''/>            
                            <Link to = {{
                                pathname: '/workspaces',
                                state: {
                                  pass: 'Books'
                                }
                              }}style={{
                                textDecoration: 'none', color: 'black'
                              }}>
                                {books}
                              </Link></p>
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

