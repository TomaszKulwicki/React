import styled from 'styled-components';
import { FC } from 'React';
import { useSelector } from 'react-redux';
import { IState } from '../../reducers';
import { IPhotosReducer } from '../../reducers/photosReducers';
import { ICommentsReducer } from '../../reducers/commentsReducers';

const MainWrapper = styled.div`
/* border: 1px solid black; */
width: 1400px;
height: 1300px;
margin-left: 100px;
margin-top: 80px;
margin-bottom: 100px;
.pageTitle{
    font-size:25px;
    font-weight: bold;
    margin-bottom: 5px;
}
`;

const CommentsWrapper = styled.div`
/* border: 1px red solid; */
width: 100%;
height: 95%;
position: flex;
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

    const { commentsList } = useSelector<IState, ICommentsReducer>(globalState => globalState.comments);
    const { photosList } = useSelector<IState, IPhotosReducer>(globalState => globalState.photos);

    return(
        <MainWrapper>
            <div className = 'pageTitle'>
                Resume your work
            </div>
            <CommentsWrapper>
                <Comment>
                    <div className = 'innerComment'>
                        <div className = 'commentTitle'>
                            Title
                        </div>
                        {commentsList?.[2]?.body}
                        <div className = 'bottomText'>
                            <img src = {photosList[3]?.url} alt = '' className = 'photo'/>Subsid corp.
                            <img src = {photosList[3]?.url} alt = '' className = 'photo'/>Corporate
                            <img src = {photosList[3]?.url} alt = '' className = 'photo'/>Updated 7 days ago
                        </div>
                    </div>
                </Comment>
                {/* <Comment>

                </Comment>
                <Comment>

                </Comment>
                <Comment>

                </Comment>
                <Comment>

                </Comment>
                <Comment>

                </Comment>
                <Comment>

                </Comment>
                <Comment>

                </Comment>
                <Comment>

                </Comment>
                <Comment>

                </Comment> */}
            </CommentsWrapper>
        </MainWrapper>
    )
}