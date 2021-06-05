import { FC } from 'react';
import { useSelector } from 'react-redux';
import { IState } from '../../reducers';
import { IUsersReducer } from '../../reducers/usersReducers';
import { IPhotosReducer } from '../../reducers/photosReducers';
import styled from 'styled-components';

const MainWrapper = styled.div`
width: 1000px;
height: 1px;
margin-left: 200px;
margin-top: -400px;
`;

const Icons = styled.div`
.obrazki{
    display: flex;
    justify-content: flex-end;
    margin: 10px 10px 10px 0px;
    img{
        height: 20px;
        margin: 0px 10px 0 10px;
    }
}
`;

const Right = styled.div`
display: flex;
`;

const MiniProfile = styled.div`
height: 420px;
border: 1px black solid;
`;

const Photo = styled.div`
.see{
    position: absolute;
    margin-top: 200px;
}
img{
    border-radius: 200px;
    width: 150px;
}
.zdjecie{
    width: 250px;
    height: 378px; 
    display: flex;
    justify-content: center;
    align-items: center; 
}
`;

const Edit = styled.div`
width: 100%;
height: 378px;
.edit{
    display: flex;
    justify-content: flex-end;
    margin: 5px;
    #save{
        margin-right: 10px;
    }
    img{
        width: 30px; 
    }
}
.form{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 300px;
    input{
        width: 200px;
    }
}
.left{
    margin-right: 10px;
}
.right{
    margin-top: -77px;
}
`;

////////////////////////////////////////////////////////////////////////////////////////////////

const ChooseFields = styled.div`
border: 1px black solid;
height: 320px;
margin-top: -1px;
display: flex;
`;

const LeftField = styled.div`
select{
    width: 200px;
    margin-right: 10px;
}
.wrapper{
    margin: 30px 30px 0px 30px;
}
`;

const RightField = styled.div`
width: 500px;
.edit{
    display: flex;
    justify-content: flex-end;
    margin-top: 10px;
    img{
        height: 30px;
    }
}
`;

////////////////////////////////////////////////////////////////////////////////////////////////

const Informations = styled.div`
border: 1px solid black;
margin-top: -1px;
height: 440px;
`;

const PanelInformations = styled.div`
margin: 30px 30px 30px 30px;
#input{
    width: 300px;
}
`;

const ServicesProjects = styled.div`
margin: 10px 30px 30px 30px;
input{
    width: 300px;
}
.people{
    margin-bottom: 10px;
    display: flex;
    .name{
        margin-bottom: 10px;
    }
    #img{
        width: 20px;
        height: 20px;
        border-radius: 20px;
    }
    .icones{
    display: flex;
    justify-content: space-around;
    border-radius: 0px;
    margin-left: 20px;
    img{
        margin-right: 10px;
        margin-left: 10px;
        width: 20px;
    }
    }
}
`;

////////////////////////////////////////////////////////////////////////////////////////////////

const Proposals = styled.div`
height: 240px;
border: 1px solid black;
margin-top: -1px;
`

const PropTable = styled.div`
margin: 10px 30px 30px 30px;
.topText{
    display: flex;
    #name{
        margin-left: 60px;
    }
    #entity{
        margin-left: 120px;
    }
    #location{
        margin-left: 110px;
    }
    #expertise{
        margin-left: 90px;
    }
    #date{
        margin-left: 105px;
    }
    #firm{
        margin-left: 120px;
    }
}
.firstRow{
    display: flex;
    justify-content: space-evenly;
}
.more{
    display: flex;
    justify-content: flex-end;
}
`;

////////////////////////////////////////////////////////////////////////////////////////////////

const InternarReviews = styled.div`
height: 240px;
border: 1px solid black;
margin-top: -1px;
`;

const Reviews = styled.div`
margin: 10px 30px 30px 30px;
.topText{
    display: flex;
    #name{
        margin-left: 60px;
    }
    #entity{
        margin-left: 120px;
    }
    #location{
        margin-left: 110px;
    }
    #expertise{
        margin-left: 90px;
    }
    #date{
        margin-left: 105px;
    }
}
.firstRow{
    display: flex;
    .rowOne{
        margin-left: 8px;
        margin-right: 9px;
    }
    .rowTwo{
        margin-right: 9px;
    }
    .rowThree{
        margin-right: 9px;
    }
    .rowFour{
        margin-right: 9px;
    }
    .rowFive{
        margin-right: 9px;
    }
}
`;

////////////////////////////////////////////////////////////////////////////////////////////////

const Fees = styled.div`
height: 280px;
border: 1px solid black;
margin-top: -1px;
margin-bottom: 20px;
`;

const Amount = styled.div`
margin: 10px 30px 30px 30px;
.topText{
    display: flex;
    #year{
        margin-left: 120px;
    }
    #center{
        margin-left: 170px;
    }
    #amount{
        margin-left: 140px;
    }
    #firm{
        margin-left: 150px;
    }
}
.firstRow{
    display: flex;
    justify-content: space-evenly;
}
`;

export const Profile: FC = () => {

    const { usersList } = useSelector<IState, IUsersReducer>(globalState => globalState.users);
    const { photosList } = useSelector<IState, IPhotosReducer>(globalState => globalState.photos);

    return(
        <MainWrapper>
            <MiniProfile>
                <Icons>
                    <div className = 'obrazki'>
                        <img src = 'media/icons/sticky-note-regular.svg' alt = 'zdjecie'/>
                        Message
                        <img src = 'media/icons/sticky-note-regular.svg' alt = 'zdjecie'/>
                        Create a request
                        <img src = 'media/icons/sticky-note-regular.svg' alt = 'zdjecie'/>
                        Add to cluster
                    </div>
                </Icons>
                <Right>
                    <Photo>
                        <div className = 'zdjecie'>
                            <img src = {photosList[3]?.url} alt = ''/>
                            <div className = 'see'>
                                See profile
                            </div>
                        </div>   
                    </Photo>
                    <Edit>
                        <div className = 'edit'>
                            <img src = 'media/icons/save.png' alt = '' id = 'save'/>
                            <img src = 'media/icons/pen.png' alt = ''/>
                        </div>
                        <div className = 'form'>
                            <div className = 'left'>
                                <input type = 'text' value = {usersList?.[0]?.name}/>
                                <p><input type = 'text' value = 'Surname'/></p>
                                <input type = 'text' value = {usersList?.[0]?.address.city}/>
                                <p><input type = 'text' value = 'Partner'/></p>
                            </div>
                            <div className = 'right'>
                                <input type = 'text' value = {usersList?.[0]?.email}/>
                                <p><input type = 'text' value = {usersList?.[0]?.phone}/></p>
                            </div>
                        </div>
                    </Edit>
                </Right>
            </MiniProfile>
            <ChooseFields>
                <LeftField>
                    <div className = 'wrapper'>
                        <b>Expertise</b>
                        <p><select>
                            <option value = 'Option1'>Option1</option>
                            <option value = 'Option2'>Option2</option>
                            <option value = 'Option3'>Option3</option>
                            <option value = 'Option4'>Option4</option>
                            <option value = 'Option5'>Option5</option>
                        </select></p>
                        Specialities
                        <p><select>
                            <option value = 'Option1'>Option1</option>
                            <option value = 'Option2'>Option2</option>
                            <option value = 'Option3'>Option3</option>
                            <option value = 'Option4'>Option4</option>
                            <option value = 'Option5'>Option5</option>
                        </select>
                        <select>
                            <option value = 'Option1'>Option1</option>
                            <option value = 'Option2'>Option2</option>
                            <option value = 'Option3'>Option3</option>
                            <option value = 'Option4'>Option4</option>
                            <option value = 'Option5'>Option5</option>
                        </select></p>
                        Admition to practice law
                        <p><select>
                            <option value = 'Option1'>Option1</option>
                            <option value = 'Option2'>Option2</option>
                            <option value = 'Option3'>Option3</option>
                            <option value = 'Option4'>Option4</option>
                            <option value = 'Option5'>Option5</option>
                        </select>
                        <select>
                            <option value = 'Option1'>Option1</option>
                            <option value = 'Option2'>Option2</option>
                            <option value = 'Option3'>Option3</option>
                            <option value = 'Option4'>Option4</option>
                            <option value = 'Option5'>Option5</option>
                        </select></p>
                        Countries
                        <p><select>
                            <option value = 'Option1'>Option1</option>
                            <option value = 'Option2'>Option2</option>
                            <option value = 'Option3'>Option3</option>
                            <option value = 'Option4'>Option4</option>
                            <option value = 'Option5'>Option5</option>
                        </select></p>
                    </div>
                </LeftField>
                <RightField>
                    <div className = 'edit'> 
                        <img src = 'media/icons/save.png' alt = ''/>  
                        <img src = 'media/icons/pen.png' alt = ''/>
                    </div>
                </RightField>
            </ChooseFields>
            <Informations>
                <PanelInformations>
                    <div className = 'top'>
                        <b>Panel Informations</b>
                        <p>Hourly fee</p>
                        <p><input type = 'text' value = '610$/hour (Negociated)' id = 'input'/></p>
                        <p>Terms and conditions</p>
                        <p><input type = 'text' value = 'Monthly 10k retainer' id = 'input'/></p>
                        <p><input type = 'file' className = 'file'/></p>
                    </div>
                </PanelInformations>
                <ServicesProjects>
                    <div>
                        <b>Services and projects</b>
                        <p><input type = 'text' value = 'Corpotare international aqusition' id = 'input'/></p>
                        <p><b>International coresponderts</b></p>
                    </div>
                    <div className = 'people'>
                        <img src = {photosList[1]?.url} alt = '' id = 'img'/> {usersList?.[1]?.name} 
                        <div className = 'icones'>
                            <img src = 'media/icons/sticky-note-regular.svg' alt = ''/> Message <img src = 'media/icons/sticky-note-regular.svg' alt = ''/> Profile
                        </div>
                    </div>                  
                    <div className = 'people'>
                        <img src = {photosList[1]?.url} alt = '' id = 'img'/> {usersList?.[1]?.name} 
                        <div className = 'icones'>
                            <img src = 'media/icons/sticky-note-regular.svg' alt = ''/> Message <img src = 'media/icons/sticky-note-regular.svg' alt = ''/> Profile
                        </div>
                    </div>                   
                </ServicesProjects>
            </Informations>
            <Proposals>
                <PropTable>
                    <b>Proposals</b>
                    <p>
                        <div className = 'topText'>
                            <div id = 'name'>
                                Name
                            </div>
                            <div id = 'entity'>
                                Entity
                            </div>
                            <div id = 'location'>
                                Location
                            </div>
                            <div id = 'expertise'>
                                Expertise
                            </div>
                            <div id = 'date'>
                             Date
                            </div>
                            <div id = 'firm'>
                                Firm
                            </div>
                        </div>                           
                    </p>
                    <div className = 'firstRow'>
                        <input type = 'text'/>
                        <input type = 'text'/>
                        <input type = 'text'/>
                        <input type = 'text'/>
                        <input type = 'text'/>
                        <input type = 'text'/>
                    </div>
                    <p>
                    <div className = 'firstRow'>
                        <input type = 'text'/>
                        <input type = 'text'/>
                        <input type = 'text'/>
                        <input type = 'text'/>
                        <input type = 'text'/>
                        <input type = 'text'/>
                    </div>
                    </p>
                    <div className = 'firstRow'>
                        <input type = 'text'/>
                        <input type = 'text'/>
                        <input type = 'text'/>
                        <input type = 'text'/>
                        <input type = 'text'/>
                        <input type = 'text'/>
                    </div>
                    <div className = 'more'>
                        <p><b>See more proposals</b></p>
                    </div>
                </PropTable>
            </Proposals>
            <InternarReviews>
                <Reviews>
                <b>Internal Reviews</b>
                    <p>
                        <div className = 'topText'>
                            <div id = 'name'>
                                Name
                            </div>
                            <div id = 'entity'>
                                Entity
                            </div>
                            <div id = 'location'>
                                Location
                            </div>
                            <div id = 'expertise'>
                                Expertise
                            </div>
                            <div id = 'date'>
                             Date
                            </div>
                        </div>                           
                    </p>
                    <div className = 'firstRow'>
                        <input type = 'text' className = 'rowOne'/>
                        <input type = 'text' className = 'rowTwo'/>
                        <input type = 'text' className = 'rowThree'/>
                        <input type = 'text' className = 'rowFour'/>
                        <input type = 'text' className = 'rowFive'/>
                    </div>
                    <p>
                    <div className = 'firstRow'>
                    <input type = 'text' className = 'rowOne'/>
                        <input type = 'text' className = 'rowTwo'/>
                        <input type = 'text' className = 'rowThree'/>
                        <input type = 'text' className = 'rowFour'/>
                        <input type = 'text' className = 'rowFive'/>
                    </div>
                    </p>
                    <div className = 'firstRow'>
                    <input type = 'text' className = 'rowOne'/>
                        <input type = 'text' className = 'rowTwo'/>
                        <input type = 'text' className = 'rowThree'/>
                        <input type = 'text' className = 'rowFour'/>
                        <input type = 'text' className = 'rowFive'/>
                    </div>
                    <div className = 'more'>
                        <p><b>See more reviews</b></p>
                    </div>
                </Reviews>
            </InternarReviews>
            <Fees> 
                <Amount>
                    <b>Amount of fees</b>
                    <p>
                        <div className = 'topText'>
                            <div id = 'year'>
                                Year
                            </div>
                            <div id = 'center'>
                                Cost center
                            </div>
                            <div id = 'amount'>
                                Total amount
                            </div>
                            <div id = 'firm'>
                                Law firm
                            </div>
                        </div>                           
                    </p>
                    <div className = 'firstRow'>
                    <input type = 'text' className = 'rowOne'/>
                        <input type = 'text' className = 'rowTwo'/>
                        <input type = 'text' className = 'rowThree'/>
                        <input type = 'text' className = 'rowFour'/>
                    </div>
                    <p>
                    <div className = 'firstRow'>
                    <input type = 'text' className = 'rowOne'/>
                        <input type = 'text' className = 'rowTwo'/>
                        <input type = 'text' className = 'rowThree'/>
                        <input type = 'text' className = 'rowFour'/>
                    </div>
                    </p>
                    <div className = 'firstRow'>
                    <input type = 'text' className = 'rowOne'/>
                        <input type = 'text' className = 'rowTwo'/>
                        <input type = 'text' className = 'rowThree'/>
                        <input type = 'text' className = 'rowFour'/>
                    </div>
                    <p>
                    <div className = 'firstRow'>
                    <input type = 'text' className = 'rowOne'/>
                        <input type = 'text' className = 'rowTwo'/>
                        <input type = 'text' className = 'rowThree'/>
                        <input type = 'text' className = 'rowFour'/>
                    </div>
                    </p>
                    <div className = 'firstRow'>
                    <input type = 'text' className = 'rowOne'/>
                        <input type = 'text' className = 'rowTwo'/>
                        <input type = 'text' className = 'rowThree'/>
                        <input type = 'text' className = 'rowFour'/>
                    </div>
                </Amount>
            </Fees>
        </MainWrapper>
    )
}

//{commentsList?.[0]?.body}

//{postsList?.[0]?.body}

//{photosList[3]?.url}