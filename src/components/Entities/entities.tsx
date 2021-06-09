import styled from 'styled-components';

import { FC } from 'react';
import { useState } from 'react';
import { IState } from '../../reducers';
import { IPhotosReducer } from '../../reducers/photosReducers';
import { useSelector } from 'react-redux';
import { EntitiesFilter } from '../../components/Entities/entitiesFilter'
import useDropdown from 'react-dropdown-hook';

const MainWrapper = styled.div`
width: 1000px;
margin-left: 200px;
height: 1px;
margin-top: -400px;
.fullscreen{
    width: 1850px;
    background-color: white;
    z-index: auto;
    margin-left: -460px;
    margin-top: 0px;
}
.fullscreen-view{
    display: flex;
    justify-content: flex-end;
    margin-left: 1660px;
    border: 1px solid;
    border-radius: 5px;
    padding: 4px;  
}
.fullscreen-line{
    border: 1px solid black;
    margin-left: 10px;
    margin-right: 10px;
}
.fullscreen-right{
    margin-left: 1100px;
    display: flex;
}
.fullscreen-search1{
    height: 10px;
    margin-right: 5px;
}
.fullscreen-search{
    border: 1px black solid;
    border-radius: 5px;
    input{
        border:none;
    }
}
.fullscreen-save{
    position: absolute;
    margin: -10px 0px 0px -470px;
    width: 400px;
    height: 200px;
    background-color: white;

}
`;

const Wrapper = styled.div`
border: 1px black solid;
margin-bottom: 10px;
`;

const TopBar = styled.div`
display: flex;
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
    justify-content: flex-end;
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
            cursor: pointer;
        }
        .fullscreenIcon{
            height: 20px;
            cursor: pointer;
        }
        .filtr{
            height: 15px; 
            margin-right: 5px;
            cursor: pointer;
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
    grid-row-gap: 20px;
    margin: 10px 10px 10px 10px;
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

    const [searchTerm,setSerachTerm] = useState('')

    let jpg1 = photosList[1]?.url;
    let jpg2 = photosList[2]?.url;
    let jpg3 = photosList[3]?.url;
    let jpg4 = photosList[4]?.url;
    
    let [companies,setCompany]= useState([
        {name:'ASSA',jpg:jpg1},
        {name:'HID',jpg:jpg2},
        {name:'Spyrosoft',jpg:jpg3},
        {name:'Xkom',jpg:jpg4},
        {name:'Wood Ward',jpg:jpg1},
        {name:'Mango',jpg:jpg2},
        {name:'Sperasoft',jpg:jpg3},
        {name:'IT',jpg:jpg4},
        {name:'Company',jpg:jpg1},
        {name:'React',jpg:jpg2},
        {name:'Java',jpg:jpg3},
        {name:'Script',jpg:jpg4},
        {name:'Rome',jpg:jpg1},
        {name:'NY',jpg:jpg2},
        {name:'Tokyo',jpg:jpg3},
        {name:'CDP',jpg:jpg4},
        {name:'EA',jpg:jpg1},
        {name:'Ubisoft',jpg:jpg2},
        {name:'Ninja',jpg:jpg3},
        {name:'Apple',jpg:jpg4},
        {name:'Steam',jpg:jpg1},
        {name:'Origin',jpg:jpg2},
        {name:'Valve',jpg:jpg3},
        {name:'Pilkington',jpg:jpg4},
        {name:'Kropelka',jpg:jpg1},
        {name:'Obi',jpg:jpg2},
        {name:'Castorama',jpg:jpg3},
        {name:'ABB',jpg:jpg4},
        {name:'X',jpg:jpg1},
        {name:'D',jpg:jpg2},]);
    
    const [wrapperRef, dropdownOpen, toggleDropdown] = useDropdown();

    const [sort, setSort] = useState(true)

    function sorting() {
        if(sort === true){
            setCompany(companies.sort((a,b) => 0 - (a.name > b.name ? -1 : 1)))
            setSort(false);
            console.log(companies)
        }
        else{
            setCompany(companies.sort((a,b) => 0 - (a.name > b.name ? 1 : -1)))
            setSort(true);
            console.log(companies)
        }
    }

    const [lineStyle,setLineStyle] = useState(true)
    function changeStyle() {
        if(lineStyle === true){
            setLineStyle(false)
        }else if(lineStyle === false){
            setLineStyle(true)
        }
        
    }

    const [fullscreen,setFullscreen] = useState(true)
    function FullScreenfunction() {
        if(fullscreen === true){
            setFullscreen(false)
        }else if(fullscreen === false){    
            setFullscreen(true)
        }    
    }
    return(
        <MainWrapper>
            <div className = { fullscreen === true?(''):('fullscreen')}>
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
                            <div className = { fullscreen === true?('view'):('fullscreen-view')}>
                                <img src = 'media/pictures/list.png' alt = '' className = 'mosaic' onClick = { changeStyle }/>
                                <div className = { fullscreen === true?('line'):('fullscreen-line')} ></div>
                                <img src = 'media/pictures/mosaic.png' alt = '' className = 'list' id = 'jeden' onClick = { changeStyle }/>
                            </div>
                        </ChooseView>
                    </div>
                </TopBar>            
            <LowBar ref = { wrapperRef }>
                <div className = 'bar'>
                    <div className = 'menu'>
                        All<div className = 'line'></div>
                        <img src = 'media/icons/more.png' className = 'more' alt = ''/>
                        <div className = 'line'></div>
                        <img src = 'media/icons/sort.png' className = 'sort' alt = ''  onClick = {sorting}/>
                        Sort
                        <div className = 'line'></div>
                        <img src = 'media/icons/filter.png' className = 'filtr' alt = '' onClick = {toggleDropdown}/>
                        {dropdownOpen && <EntitiesFilter/>}
                        Filters
                        <div className = 'line'></div>
                        <img src = 'media/icons/fullscreen.png' className = 'fullscreenIcon' alt = '' onClick = { FullScreenfunction }/>
                        <div className = 'line'></div>
                        <img src = 'media/icons/share.png' className = 'share' alt = '' onClick = {() => navigator.clipboard.writeText('http://localhost:3000/Entities')}/>
                        Share
                    </div>
                    <div className = { fullscreen === true?('right'):('fullscreen-right')}>
                        <div className = { fullscreen === true?('search'):('fullscreen-search')}>
                            <input type = 'text' placeholder = 'Search...' onChange={event =>{setSerachTerm(event.target.value)}}/>
                            <img src = 'media/icons/search1.png' className = { fullscreen === true?('search1'):('fullscreen-search1')} alt = ''/>
                        </div>
                        <div className = { fullscreen === true?('line'):('fullscreen-line')}></div>
                        <div>
                            Followed
                        </div>
                        <div className = { fullscreen === true?('line'):('fullscreen-line')}></div>
                        <div>
                            Unfollowed
                        </div>
                    </div>
                </div>
            </LowBar>
            <Main>
                <Tiles>
                    <div className = {lineStyle === true?('grid-container'):('grid-container-list')}>
                            {companies.filter((val) => {
                                if (searchTerm === ''){
                                    return val;
                                } else if (
                                    val.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())){
                                        return val;
                                    };
                                
                                }).map(company => (
                                    <div className = 'grid-item'>
                                        <img src = {company.jpg} alt = ''/>
                                        <div className = 'title'>
                                        <b>{company.name}</b>
                                        <div className = 'lorem'>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                </div>
                            </div>
                        </div>
                        ))}
                    </div>
                </Tiles>
            </Main>
            </Wrapper>
            </div>
            <div className = { fullscreen === true?(''):('fullscreen-save')}></div>
        </MainWrapper>
    )
}