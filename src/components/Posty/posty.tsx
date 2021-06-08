import styled from 'styled-components';
import { FC, useState } from 'react';
import { useSelector } from 'react-redux';
import { IState } from '../../reducers';
import { IPhotosReducer } from '../../reducers/photosReducers';
import { ICommentsReducer } from '../../reducers/commentsReducers';
import Pagination from '@material-ui/lab/Pagination';

const MainWrapper = styled.div`
width: 1400px;
height: 1300px;
margin-left: 100px;
margin-top: 80px;
margin-bottom: 100px;
.filter{
    display: flex;   
    .search{
        margin-left: 870px;
        display: flex;
        .line{
            border: 1px solid black;
            margin-left: 10px;
            margin-right: 10px;
            margin-bottom: 12px;
        }
        input{
            margin-right: 10px;
            height: 15px;
        }
    }
}
.pageTitle{
    font-size:25px;
    font-weight: bold;
    margin-bottom: 5px;
}
`;

const CommentsWrapper = styled.div`
width: 100%;
height: 95%;
position: flex;
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

export const Posty: FC = () => {
  
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
            <div className = 'filter'>
                <div className = 'pageTitle'>
                    Resume your work
                </div>
                <div className = 'search'>
                    <input type = 'text' placeholder = 'Filter' onChange={event =>{setSerachTerm(event.target.value)}}/>
                    Followed
                    <div className = 'line'/>
                    Unfollowed
                </div>
            </div>
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