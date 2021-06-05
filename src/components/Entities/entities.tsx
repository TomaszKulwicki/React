import styled from 'styled-components';

import { FC } from 'react';
import { useState } from 'react';
import { IState } from '../../reducers';
import { IPhotosReducer } from '../../reducers/photosReducers';
import { useSelector } from 'react-redux';

const MainWrapper = styled.div`
width: 1000px;
margin-left: 200px;
height: 1px;
margin-top: -400px;
`;

const Wrapper = styled.div`
border: 1px black solid;
margin-bottom: 10px;
`;

const TopBar = styled.div`
height: 50px;
.settings{
margin-left: 10px;
height: 12px;
}
.top{
    display: flex;
    margin: 10px 30px 30px 30px;
    #text{
        display: flex;
        margin-top: 5px;
        img{
            margin-top: 2px;
        }
    }
}
`;

const ChooseView = styled.div`
.view{
    display: flex;
    margin-left: 790px;
    border: 1px solid;
    border-radius: 5px;
    padding: 4px;
    .mosaic{
        cursor: pointer;
    }
    .list{
        margin-left: 10px;
        cursor: pointer;
    }
    .line{
        border: 1px solid black;
        margin-left: 10px;
    }
}
`;

/////////////////////////////////////////////////////////////////////////////////////////////////

const LowBar = styled.div`
margin: 10px 30px 30px 30px;
height: 20px;
.bar{
    display: flex;
    .right{
        margin-left: 300px;
        display: flex;
        .line{
            border: 1px solid black;
            margin-left: 10px;
            margin-right: 10px;
        }
        .search{
            border: 1px black solid;
            border-radius: 5px;
            input{
                border: none;
                width: 100px;
                margin: 1px 1px 1px 1px;
            }
            .search1{
                height: 10px;
                margin-right: 5px;
            }
        }
    }
    .menu{
        display: flex;
        .share{
            height: 18px;
            margin-right: 5px;
        }
        .fullscreen{
            height: 20px;
        }
        .filtr{
            height: 15px; 
            margin-right: 5px;
        }
        .sort{
            height: 15px;
            margin-right: 5px;
        }
        .line{
            border: 1px solid black;
            margin-left: 10px;
            margin-right: 10px;
        }
        .more{
            height: 10px;
            margin-top: 5px;
        }
    }
}
.check{
    border: 1px red solid;
}
`;

/////////////////////////////////////////////////////////////////////////////////////////////////

const Main = styled.div`

`;

const Tiles = styled.div`
.grid-container-list{
    display: grid;
    grid-template-columns: auto;
    padding: 10px;
    grid-column-gap: 10px;
    grid-row-gap: 10px;
    }
.grid-container{
    display: grid;
    grid-template-columns: auto auto auto;;
    padding: 10px;
    grid-column-gap: 10px;
    grid-row-gap: 10px;
    }
    .grid-item{
        border: 1px solid black;
        padding: 10px;
        height: 80px;
        border-radius: 5px;
        .title{
            position: absolute;
            margin-left: 90px;
            margin-top: -80px;
            font-size: 20px;
            color: #4254A8;
            .lorem{
                width: 200px;
                font-size: 15px;
                color: black;
            } 
        }
        img{
            height: 80px;
            border-radius: 5px;
        }
}
`;

export const Entities: FC = () => {

    const { photosList } = useSelector<IState, IPhotosReducer>(globalState => globalState.photos);

    function changeView() {

    }

    return(
        <MainWrapper>
            <Wrapper>
                <TopBar>
                    <div className = 'top'>
                        <div id = 'text'>
                            <div>
                                <b>Entities</b>
                            </div>
                            <img src = 'media/icons/cog.png' alt = '' className = 'settings'/>
                        </div>
                        <ChooseView>
                            <div className = 'view'>
                                <img src = 'media/pictures/mosaic.png' alt = '' className = 'mosaic' onClick = {changeView}/>
                                <div className = 'line'></div>
                                <img src = 'media/pictures/list.png' alt = '' className = 'list' id = 'jeden' onClick = {changeView}/>
                            </div>
                        </ChooseView>
                    </div>
                </TopBar>            
            <LowBar>
                <div className = 'bar'>
                    <div className = 'menu'>
                        All<div className = 'line'></div>
                        <img src = 'media/icons/more.png' className = 'more' alt = ''/>
                        <div className = 'line'></div>
                        <img src = 'media/icons/sort.png' className = 'sort' alt = ''/>
                        Sort
                        <div className = 'line'></div>
                        <img src = 'media/icons/filter.png' className = 'filtr' alt = ''/>
                        Filters
                        <div className = 'line'></div>
                        <img src = 'media/icons/fullscreen.png' className = 'fullscreen' alt = ''/>
                        <div className = 'line'></div>
                        <img src = 'media/icons/share.png' className = 'share' alt = ''/>
                        Share
                    </div>
                    <div className = 'right'>
                        <div className = 'search'>
                            <input type = 'text' placeholder = 'Search...'/>
                            <img src = 'media/icons/search1.png' className = 'search1' alt = ''/>
                        </div>
                        <div className = 'line'></div>
                        <div>
                            Followed
                        </div>
                        <div className = 'line'></div>
                        <div>
                            Unfollowed
                        </div>
                    </div>
                </div>
            </LowBar>
            <Main>
                <Tiles>
                    <div className = 'grid-container'>
                        <div className = 'grid-item' id = 'tile'>
                            <img src = {photosList[Math.floor(Math.random() * photosList.length)]?.url} alt = ''/>
                            <div className = 'title'>
                                <b>Coca-Cola</b>
                                <div className = 'lorem'>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                </div>
                            </div>
                        </div>
                        <div className = 'grid-item'>
                            <img src = {photosList[Math.floor(Math.random() * photosList.length)]?.url} alt = ''/>
                            <div className = 'title'>
                                <b>Pepsi</b>
                                <div className = 'lorem'>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                </div>
                            </div>
                        </div>
                        <div className = 'grid-item'>
                            <img src = {photosList[Math.floor(Math.random() * photosList.length)]?.url} alt = ''/>
                            <div className = 'title'>
                                <b>Tesco</b>
                                <div className = 'lorem'>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                </div>
                            </div>
                        </div>  
                        <div className = 'grid-item'>
                            <img src = {photosList[Math.floor(Math.random() * photosList.length)]?.url} alt = ''/>
                            <div className = 'title'>
                                <b>Kaufland</b>
                                <div className = 'lorem'>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                </div>
                            </div>
                        </div>
                        <div className = 'grid-item'>
                            <img src = {photosList[Math.floor(Math.random() * photosList.length)]?.url} alt = ''/>
                            <div className = 'title'>
                                <b>Sperasoft</b>
                                <div className = 'lorem'>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                </div>
                            </div>
                        </div>
                        <div className = 'grid-item'>
                            <img src = {photosList[Math.floor(Math.random() * photosList.length)]?.url} alt = ''/>
                            <div className = 'title'>
                                <b>HID</b>
                                <div className = 'lorem'>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                </div>
                            </div>
                        </div>  
                        <div className = 'grid-item'>
                            <img src = {photosList[Math.floor(Math.random() * photosList.length)]?.url} alt = ''/>
                            <div className = 'title'>
                                <b>Woodward</b>
                                <div className = 'lorem'>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                </div>
                            </div>
                        </div>
                        <div className = 'grid-item'>
                            <img src = {photosList[Math.floor(Math.random() * photosList.length)]?.url} alt = ''/>
                            <div className = 'title'>
                                <b>ES Group</b>
                                <div className = 'lorem'>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                </div>
                            </div>
                        </div>                        <div className = 'grid-item'>
                            <img src = {photosList[Math.floor(Math.random() * photosList.length)]?.url} alt = ''/>
                            <div className = 'title'>
                                <b>RECONNECT</b>
                                <div className = 'lorem'>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                </div>
                            </div>
                        </div>                        <div className = 'grid-item'>
                            <img src = {photosList[Math.floor(Math.random() * photosList.length)]?.url} alt = ''/>
                            <div className = 'title'>
                                <b>Nestle</b>
                                <div className = 'lorem'>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                </div>
                            </div>
                        </div>                        <div className = 'grid-item'>
                            <img src = {photosList[Math.floor(Math.random() * photosList.length)]?.url} alt = ''/>
                            <div className = 'title'>
                                <b>Empik</b>
                                <div className = 'lorem'>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                </div>
                            </div>
                        </div>                        <div className = 'grid-item'>
                            <img src = {photosList[Math.floor(Math.random() * photosList.length)]?.url} alt = ''/>
                            <div className = 'title'>
                                <b>CD Projct</b>
                                <div className = 'lorem'>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                </div>
                            </div>
                        </div>                        <div className = 'grid-item'>
                            <img src = {photosList[Math.floor(Math.random() * photosList.length)]?.url} alt = ''/>
                            <div className = 'title'>
                                <b>Auchan</b>
                                <div className = 'lorem'>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                </div>
                            </div>
                        </div>                        <div className = 'grid-item'>
                            <img src = {photosList[Math.floor(Math.random() * photosList.length)]?.url} alt = ''/>
                            <div className = 'title'>
                                <b>ASSA</b>
                                <div className = 'lorem'>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                </div>
                            </div>
                        </div>                        <div className = 'grid-item'>
                            <img src = {photosList[Math.floor(Math.random() * photosList.length)]?.url} alt = ''/>
                            <div className = 'title'>
                                <b>X-kom</b>
                                <div className = 'lorem'>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                </div>
                            </div>
                        </div>                        <div className = 'grid-item'>
                            <img src = {photosList[Math.floor(Math.random() * photosList.length)]?.url} alt = ''/>
                            <div className = 'title'>
                                <b>Intel</b>
                                <div className = 'lorem'>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                </div>
                            </div>
                        </div>                        <div className = 'grid-item'>
                            <img src = {photosList[Math.floor(Math.random() * photosList.length)]?.url} alt = ''/>
                            <div className = 'title'>
                                <b>AMD</b>
                                <div className = 'lorem'>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                </div>
                            </div>
                        </div>                        <div className = 'grid-item'>
                            <img src = {photosList[Math.floor(Math.random() * photosList.length)]?.url} alt = ''/>
                            <div className = 'title'>
                                <b>Microsoft</b>
                                <div className = 'lorem'>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                </div>
                            </div>
                        </div>                        <div className = 'grid-item'>
                            <img src = {photosList[Math.floor(Math.random() * photosList.length)]?.url} alt = ''/>
                            <div className = 'title'>
                                <b>AMD</b>
                                <div className = 'lorem'>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                </div>
                            </div>
                        </div>                        <div className = 'grid-item'>
                            <img src = {photosList[Math.floor(Math.random() * photosList.length)]?.url} alt = ''/>
                            <div className = 'title'>
                                <b>DELL</b>
                                <div className = 'lorem'>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                </div>
                            </div>
                        </div>                        <div className = 'grid-item'>
                            <img src = {photosList[Math.floor(Math.random() * photosList.length)]?.url} alt = ''/>
                            <div className = 'title'>
                                <b>DHL</b>
                                <div className = 'lorem'>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                </div>
                            </div>
                        </div>                        <div className = 'grid-item'>
                            <img src = {photosList[Math.floor(Math.random() * photosList.length)]?.url} alt = ''/>
                            <div className = 'title'>
                                <b>Inpost</b>
                                <div className = 'lorem'>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                </div>
                            </div>
                        </div>                        <div className = 'grid-item'>
                            <img src = {photosList[Math.floor(Math.random() * photosList.length)]?.url} alt = ''/>
                            <div className = 'title'>
                                <b>Lipton</b>
                                <div className = 'lorem'>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                </div>
                            </div>
                        </div>                        <div className = 'grid-item'>
                            <img src = {photosList[Math.floor(Math.random() * photosList.length)]?.url} alt = ''/>
                            <div className = 'title'>
                                <b>Wallmart</b>
                                <div className = 'lorem'>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                </div>
                            </div>
                        </div>  
                        <div className = 'grid-item'>
                            <img src = {photosList[Math.floor(Math.random() * photosList.length)]?.url} alt = ''/>
                            <div className = 'title'>
                                <b>Ikea</b>
                                <div className = 'lorem'>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                </div>
                            </div>
                        </div>
                        <div className = 'grid-item'>
                            <img src = {photosList[Math.floor(Math.random() * photosList.length)]?.url} alt = ''/>
                            <div className = 'title'>
                                <b>BP</b>
                                <div className = 'lorem'>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                </div>
                            </div>
                        </div>
                        <div className = 'grid-item'>
                            <img src = {photosList[Math.floor(Math.random() * photosList.length)]?.url} alt = ''/>
                            <div className = 'title'>
                                <b>Castrol</b>
                                <div className = 'lorem'>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                </div>
                            </div>
                        </div>
                        <div className = 'grid-item'>
                            <img src = {photosList[Math.floor(Math.random() * photosList.length)]?.url} alt = ''/>
                            <div className = 'title'>
                                <b>Oreo</b>
                                <div className = 'lorem'>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                </div>
                            </div>
                        </div>
                        <div className = 'grid-item'>
                            <img src = {photosList[Math.floor(Math.random() * photosList.length)]?.url} alt = ''/>
                            <div className = 'title'>
                                <b>Subway</b>
                                <div className = 'lorem'>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                </div>
                            </div>
                        </div>
                        <div className = 'grid-item'>
                            <img src = {photosList[Math.floor(Math.random() * photosList.length)]?.url} alt = ''/>
                            <div className = 'title'>
                                <b>Mobil</b>
                                <div className = 'lorem'>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                </div>
                            </div>
                        </div>
                    </div>
                </Tiles>
            </Main>
            </Wrapper>
        </MainWrapper>
    )
}