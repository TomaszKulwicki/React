import styled from 'styled-components';
import { FC, useState } from 'react';
import { useSelector } from 'react-redux';
import { IState } from '../../reducers';
import { IPhotosReducer } from '../../reducers/photosReducers';
import { ICommentsReducer } from '../../reducers/commentsReducers';

import Pagination from '@material-ui/lab/Pagination';

const MainWrapper = styled.div`
width: 1000px;
margin-left: 200px;
height: 1px;
margin-top: -400px;
`;

const Top = styled.div`
height: 500px;
border: 1px solid grey;

.photo{
    height: 300px;
    img{
        height: 300px;
        width: 100%;
    }
}
.topBottom{
    height: 100px;
    display: flex;
    .box{
        height: 200px;
        width: 900px;
        .title{
            background-color: black;
            width: 100%;
            height: 50%;
        }
        .desc{
            width: 100%;
            height: 50%;
            margin: 10px 10px 10px 10px;
        }
    }
    .icon{
        width: 200px;
        height: 200px;
        img{
            height: 100px;
            margin: 45px;
        }
    }
}
`;

const Middle = styled.div`
height: 300px;
margin-top: 20px;
.container{
    height: 280px;
    margin: 10px;
    display: flex;
    .tiles{
        border: 1px grey solid;
        border-radius: 5px;
        width: 100%;
        height: 90%;
        margin: 14px 10px 10px 10px;
        .image{
            width: 100%;
            height: 30%;
            img{
                height: 60px;
                margin: 10px 0px 10px 10px;
            }
        }
        .text{
            width: 100%;
            height: 70%;
            margin: 10px 10px 10px 10px;
            width: 250px;
        }
    }
}
`;

const Bottom = styled.div`
border: 1px black solid;
border-bottom-left-radius: 10px;
border-bottom-right-radius: 10px;
margin-bottom: 10px;
height: 90px;
.icons{
    justify-content: space-evenly;
    display: flex;
    img{
        width: 10px;
        margin-right: 4px;
    }
    .all{
        border: 1px solid black;
        padding: 5px;
        border-radius: 5px;
    }
    .sas{
        padding: 5px;
        background-color: #4be24b;
        color: #2a8b2a;
        border-radius: 5px;
    }
    .sarl{
        background-color: #2e88f0;
        color: #3636d4;
        padding: 5px;
        border-radius: 5px;
    }
    .secondary{
        background-color: #f3c268;
        color: #d18c0c;
        padding: 5px;
        border-radius: 5px;
    }
    .comm{
        background-color: lightgrey;
        color: gray;
        padding: 5px;
        border-radius: 5px;
    }
    .poa{
        background-color: lightgrey;
        color: gray;
        padding: 5px;
        border-radius: 5px;
    }
    .surv{
        border: 1px solid black;
        padding: 5px;
        border-radius: 5px;
    }
    .dots{
        border: 1px solid black;
        padding: 5px;
        border-radius: 5px;
    }
}
.bottom{
    .top{
        display: flex;
        margin: 10px 10px 10px 10px;
        .filter{
            display: flex;
            margin-left: 560px;
            input{
                margin-right: 10px;
            }
            .line{
                border: 1px solid black;
                margin-left: 10px;
                margin-right: 10px;
            }
        }
    }
}
`;

const CommentsWrapper = styled.div`
.pagination{
    margin-bottom: 20px;
    display: flex;
    justify-content: center;
}
`;

const Comment = styled.div`
border: 1px solid grey;
border-radius: 10px;
height: 100px;
margin-bottom: 20px;
img{
    height: 15px;
    width: 15px;
    border-radius: 10px;
}
.innerComment{
    margin: 15px 20px 0px 20px;
    .bottomText{
        margin-top: 5px;
        color: grey;
    }
    .commentTitle{
    color: #4254A8;
    font-weight: bold; 
}
}
`;

export const Workspaces: FC = () => {
    
    let [currentPage,setCurrentPage] = useState(1)
    let [itemsPerPage] = useState(10)

    const indexOfLastItem = currentPage*itemsPerPage;
    const indexOfFirstItem = indexOfLastItem-itemsPerPage;

    const [searchTerm, setSerachTerm] = useState('');

    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => setCurrentPage(value);

    const { commentsList } = useSelector<IState, ICommentsReducer>(globalState => globalState.comments);
    const { photosList } = useSelector<IState, IPhotosReducer>(globalState => globalState.photos);

    return(
        <MainWrapper>
            <Top>
                <div className = 'photo'>
                    <img src = 'media/pictures/corpo.jpg' alt = ''/>
                </div>
                <div className = 'topBottom'>
                    <div className = 'icon'>
                        <img src = 'media/icons/office.png' alt = ''/>
                    </div>
                    <div className = 'box'>
                        <div className = 'title'>
                            
                        </div>
                        <div className = 'desc'>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </div>
                    </div>
                </div>
            </Top>
            <Middle>
                <div className = 'container'>
                    <div className = 'tiles'>
                        <div className = 'image'>
                            <img src = 'media/icons/block.png' alt = ''/>
                        </div>
                        <div className = 'text'>
                            Expolre your <b>entities</b>
                            <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            </p>
                        </div>
                    </div>
                    <div className = 'tiles'>
                        <div className = 'image'>
                            <img src = 'media/icons/teamwork.png' alt = ''/>
                        </div>
                        <div className = 'text'>
                            Structure the <b>ownership</b>
                            <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            </p>
                        </div>
                    </div>
                    <div className = 'tiles'>
                        <div className = 'image'>
                            <img src = 'media/icons/calendar.png' alt = ''/>
                        </div>
                        <div className = 'text'>
                            Define your <b>calendar</b>
                            <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            </p>
                        </div>
                    </div>
                </div>
            </Middle>
            <Bottom>
                <div className = 'bottom'>
                    <div className = 'top'>
                        <div className = 'text'>
                            <b>Latest update</b>
                        </div>
                        <div className = 'filter'>
                            <input type = 'text' placeholder = 'Filter...' onChange={event =>{setSerachTerm(event.target.value)}}/>
                            Followed
                            <div className = 'line'/>
                            Unfollowed
                        </div>
                    </div>
                    <div className = 'icons'>
                        <div className = 'all'>
                            All
                        </div>
                        <div className = 'sas'>
                            <img src = 'media/icons/entities.png' alt = ''/>
                            SAS
                        </div>
                        <div className = 'sarl'>
                        <img src = 'media/icons/entities.png' alt = ''/>
                            SARL
                        </div>
                        <div className = 'secondary'>
                        <img src = 'media/icons/entities.png' alt = ''/>
                            Secondary Buisness
                        </div>
                        <div className = 'comm'>
                        <img src = 'media/icons/entities.png' alt = ''/>
                            Communities
                        </div>
                        <div className = 'poa'>
                        <img src = 'media/icons/entities.png' alt = ''/>
                            POA
                        </div>
                        <div className = 'surv'>
                        <img src = 'media/icons/entities.png' alt = ''/>
                            Survey
                        </div>
                        <div className = 'dots'>
                            ...
                        </div>
                    </div>
                </div>
            </Bottom>
            <CommentsWrapper>
            {commentsList.filter((val:any) => {
                  if(searchTerm === ''){
                      return val;
                  }else if(val.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())) {
                      return val;

                  };
              }).slice(indexOfFirstItem, indexOfLastItem).map(comment => 
                <Comment>
                    <div className = 'innerComment'>
                        <div className = 'commentTitle'>
                            {comment.name}
                        </div>
                        {commentsList?.[2]?.body}
                        <div className = 'bottomText'>
                            <img src = {photosList[3]?.url} alt = '' className = 'photo'/>Subsid corp.
                            Updated 7 days ago
                        </div>
                    </div>
                </Comment>
                )}
                <div className = 'pagination'>              
                    <Pagination count={50} page={currentPage} onChange={handleChange}/>
                </div>
            </CommentsWrapper>
        </MainWrapper>
    )
}