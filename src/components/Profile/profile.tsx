import { FC, useState } from 'react';
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

////////////////////////////////////////////////////////////////////////////////////////////////

const Informations = styled.div`
border: 1px solid black;
margin-top: -1px;
height: 440px;
`;

const PanelInformations = styled.div`
margin: 30px 30px 30px 30px;
.filer{
    display: flex;
    img{
        width: 20px;
        height: 20px;
        margin-left: 10px;
    }
}
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
    margin-right: 10px;
    display: flex;
    #name{
        margin-left: 0px;
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
    margin-top: 20px;
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
    margin-top: 30px;
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
    margin-top: 20px;
    .one{
        margin-left: 214px;
    }
}
`;


export const Profile: FC = () => {

    const { usersList } = useSelector<IState, IUsersReducer>(globalState => globalState.users);
    const { photosList } = useSelector<IState, IPhotosReducer>(globalState => globalState.photos);

    let [isChange, showChange] = useState(false);
   
    let [name, setName] = useState(usersList?.[0]?.name);
    let [company,setCompany] = useState(usersList?.[0]?.company.name);
    let [city,setCity] = useState(usersList?.[0]?.address.city);
    let [partner,setPartner] = useState('Partner');
    let [email,setEmail] = useState(usersList?.[0]?.email);
    let [phone,setPhone] = useState(usersList?.[0]?.phone);

    let [expertise, setExpertise] = useState('Neque porro');
    let [specialities, setSpecialities] = useState('est qui dolorem');
    let [specialities2, setSpecialities2] = useState('ipsum quia');
    let [administration, setAdministration] = useState('ipsum quia');
    let [administration2, setAdministration2] = useState('dolor sit');
    let [countries, setCountries] = useState('Poland');

    let [fee, setFee] = useState('610€/hour (Negociated)');
    let [term, setTerm] = useState('Monthly 10k€ - see with Jeanny Smith');
    let [service, setService] = useState('Corporate M&A and international acquisitions');
    let [file, setFile] = useState('File name');

    let [propname1, setPropName1] = useState('John');
    let [propname2, setPropName2] = useState('kaminski');
    let [propname3, setPropName3] = useState('Chad');
    let [propentity1, setPropEntity1] = useState('Lorem');
    let [propentity2, setPropEntity2] = useState('quaerat');
    let [propentity3, setPropEntity3] = useState('temporibus');
    let [proplocation1, setPropLocation1] = useState('France');
    let [proplocation2, setPropLocation2] = useState('USA');
    let [proplocation3, setPropLocation3] = useState('Italia');
    let [propexp1, setPropExp1] = useState('aporrot');
    let [propexp2, setPropExp2] = useState('molestias');
    let [propexp3, setPropExp3] = useState('corporis');
    let [propdate1, setPropDate1] = useState('2021-05-06');
    let [propdate2, setPropDate2] = useState('2021-04-07');
    let [propdate3, setPropDate3] = useState('2021-07-08');
    let [propfirm3, setPropFirm3] = useState('ASSA');
    let [propfirm2, setPropFirm2] = useState('HID');
    let [propfirm1, setPropFirm1] = useState('CDP');

    let [intname1, setIntName1] = useState('dolor sit');
    let [intname2, setIntName2] = useState('amconsectetur');
    let [intname3, setIntName3] = useState('adipisicing elit');
    let [intentity1, setIntEntity1] = useState('Lorem');
    let [intentity2, setIntEntity2] = useState('quaerat');
    let [intentity3, setIntEntity3] = useState('temporibus');
    let [intlocation1, setIntLocation1] = useState('France');
    let [intlocation2, setIntLocation2] = useState('Poland');
    let [intlocation3, setIntLocation3] = useState('Germany');
    let [intexp1, setIntExp1] = useState('aporrot');
    let [intexp2, setIntExp2] = useState('molestias');
    let [intexp3, setIntExp3] = useState('corporis');
    let [intdate1, setIntDate1] = useState('2021-05-06');
    let [intdate2, setIntDate2] = useState('2021-04-07');
    let [intdate3, setIntDate3] = useState('2021-07-08');

    let [amyear1, setAmYear1] = useState('2019');
    let [amyear2, setAmYear2] = useState('2018');
    let [amyear3, setAmYear3] = useState('2017');
    let [amcost1, setAmCost1] = useState('CS 153');
    let [amcost2, setAmCost2] = useState('CS 153');
    let [amcost3, setAmCost3] = useState('CS 47');
    let [amcost4, setAmCost4] = useState('CS 153');
    let [amcost5, setAmCost5] = useState('CS 32');
    let [amtotal1, setAmTotal1] = useState('3 500€');
    let [amtotal2, setAmTotal2] = useState('9 500€');
    let [amtotal3, setAmTotal3] = useState('10 500€');
    let [amtotal4, setAmTotal4] = useState('18 500€');
    let [amtotal5, setAmTotal5] = useState('15 500€');
    let [amlaw1, setAmLaw1] = useState('Clifford chance');
    let [amlaw2, setAmLaw2] = useState('Linklaters');
    let [amlaw3, setAmLaw3] = useState('Linklaters');
    let [amlaw4, setAmLaw4] = useState('Linklaters');
    let [amlaw5, setAmLaw5] = useState('Linklaters');


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
                            <img src = 'media/icons/pen.png' alt = '' onClick={()=>showChange(isChange === false ? isChange = true:isChange=false)}/>
                        </div>
                        <div className = 'form'>
                            {isChange === false?(
                                <div>
                                    <div className = 'left'>
                                        <p>{name}</p>
                                        <p>{company}</p>
                                        <p>{city}</p>
                                        <p>{partner}</p>
                                    </div>
                                    <div className = 'right'>
                                        <p>{email}</p>
                                        <p>{phone}</p>
                                    </div>
                                </div>
                             ):(
                                <div>
                                    <p><input type = "text" placeholder = "Name" value = {name} onChange = {event => setName(event.target.value)}/></p>
                                    <p><input type = "text" placeholder = "Company" value = {company} onChange = {event => setCompany(event.target.value)}/></p>
                                    <p><input type = "text" placeholder = "City" value = {city}  onChange = {event => setCity(event.target.value)}/></p>
                                    <p><input type = "text" placeholder = "Partner" value = {partner} onChange = {event => setPartner(event.target.value)}/></p>
                                    <p><input type = "text" placeholder = "e-mail" value = {email} onChange = {event => setEmail(event.target.value)}/></p>
                                    <p><input type = "text" placeholder = "Phone number" value = {phone} onChange = {event => setPhone(event.target.value)}/></p>
                                </div>
                            )}
                        </div>
                    </Edit>
                </Right>
            </MiniProfile>
            <ChooseFields>
                <LeftField>
                    <div className = 'wrapper'>
                        <b>Expertise</b>
                            {isChange === false?(
                                <p>{expertise}</p>
                            ):(
                        <p><select value = {expertise} onChange = {event => setExpertise(event.target.value)}>
                            <option value = "Neque porro">Neque porro</option>
                            <option value = "est qui dolorem">est qui dolorem</option>
                            <option value = "ipsum quia">ipsum quia</option>
                            <option value = "dolor sit">dolor sit</option>
                            <option value = "amet, consectetur">amet, consectetur</option>
                            <option value = "adipisci velit">adipisci velit</option>
                            <option value = "Nulla non">Nulla non</option>
                            <option value = "Suspendisse qu">Suspendisse qu</option>
                        </select></p>
                            )}
                        <b>Specialities</b>
                            {isChange === false?(
                                <p>{expertise}</p>
                            ):(
                        <p><select value = {specialities} onChange = {event => setSpecialities(event.target.value)}>
                            <option value = "Neque porro">Neque porro</option>
                            <option value = "est qui dolorem">est qui dolorem</option>
                            <option value = "ipsum quia">ipsum quia</option>
                            <option value = "dolor sit">dolor sit</option>
                            <option value = "amet, consectetur">amet, consectetur</option>
                            <option value = "adipisci velit">adipisci velit</option>
                            <option value = "Nulla non">Nulla non</option>
                            <option value = "Suspendisse qu">Suspendisse qu</option>
                        </select>
                        <select value = {specialities2} onChange = {event => setSpecialities2(event.target.value)}>
                            <option value = "Neque porro">Neque porro</option>
                            <option value = "est qui dolorem">est qui dolorem</option>
                            <option value = "ipsum quia">ipsum quia</option>
                            <option value = "dolor sit">dolor sit</option>
                            <option value = "amet, consectetur">amet, consectetur</option>
                            <option value = "adipisci velit">adipisci velit</option>
                            <option value = "Nulla non">Nulla non</option>
                            <option value = "Suspendisse qu">Suspendisse qu</option>
                        </select></p>
                            )}
                        <b>Admition to practice law</b>
                            {isChange === false?(
                                <p>{expertise}</p>
                            ):(
                        <p><select value = {administration} onChange = {event => setAdministration(event.target.value)}>
                            <option value = "Neque porro">Neque porro</option>
                            <option value = "est qui dolorem">est qui dolorem</option>
                            <option value = "ipsum quia">ipsum quia</option>
                            <option value = "dolor sit">dolor sit</option>
                            <option value = "amet, consectetur">amet, consectetur</option>
                            <option value = "adipisci velit">adipisci velit</option>
                            <option value = "Nulla non">Nulla non</option>
                            <option value = "Suspendisse qu">Suspendisse qu</option>
                        </select>
                        <select value = {administration2} onChange = {event => setAdministration2(event.target.value)}>
                            <option value = "Neque porro">Neque porro</option>
                            <option value = "est qui dolorem">est qui dolorem</option>
                            <option value = "ipsum quia">ipsum quia</option>
                            <option value = "dolor sit">dolor sit</option>
                            <option value = "amet, consectetur">amet, consectetur</option>
                            <option value = "adipisci velit">adipisci velit</option>
                            <option value = "Nulla non">Nulla non</option>
                            <option value = "Suspendisse qu">Suspendisse qu</option>
                        </select></p>
                            )}
                        <b>Countries</b>
                            {isChange === false?(
                                <p>{expertise}</p>
                            ):(
                        <p> <select value = {countries} onChange = {event => setCountries(event.target.value)}>
                            <option value = "Poland">Poland</option>
                            <option value = "Germany">Germany</option>
                            <option value = "Sweden">Sweden</option>
                            <option value = "Denmark">Denmark</option>
                            <option value = "Italy">Italy</option>
                            <option value = "Norway">Norway</option>
                            <option value = "Spain">Spain</option>
                            <option value = "Portugal">Portugal</option>
                        </select></p>
                        )}
                    </div>
                </LeftField>
            </ChooseFields>
            <Informations>
                <PanelInformations>
                    <div className = 'top'>
                        <b>Panel Informations</b>
                        <p><b>Hourly fee</b></p>
                            {isChange === false?(
                                <p>{fee}</p>
                            ):(
                            <input type = "text" placeholder = "Haurly fee" value = {fee} onChange = {event => setFee(event.target.value)} />)}
                            <p className ='graycolor'><b>Terms conditions</b></p>
                            {isChange === false?(
                                <p>{term}</p>
                            ):(
                            <input type = "text" placeholder = "Terms conditions" value = {term} onChange = {event =>setTerm(event.target.value)} />)}
                            {isChange === false?(
                            <div className='filer'>
                                <div>{file}</div>
                                <img src = 'media/icons/folder.png' alt = ''/>
                            </div>
                            ):(
                            <div>
                                <input type="file"  name = {file} onChange = {event => setFile(event.target.value)}/>
                            </div>)}
                    </div>
                </PanelInformations>
                <ServicesProjects>
                    <div>
                        <b>Services and projects</b>
                        {isChange === false?(
                        <p>{service}</p>
                        ):(
                    <div><input type="text" placeholder="Services and projects" value={service} onChange={event =>setService(event.target.value)} /></div>)}
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
                    {isChange === false?(
                        <div className = 'topText'>
                            <div id = 'name'>
                                <p>Name</p>
                                <p>{propname1}</p>
                                <p>{propname2}</p>
                                <p>{propname3}</p>
                            </div>
                            <div id = 'entity'>
                                <p>Entity</p>
                                <p>{propentity1}</p>
                                <p>{propentity2}</p>
                                <p>{propentity3}</p>
                            </div>
                            <div id = 'location'>
                                <p>Location</p>
                                <p>{proplocation1}</p>
                                <p>{proplocation2}</p>
                                <p>{proplocation3}</p>
                            </div>
                            <div id = 'expertise'>
                                <p>Expertise</p>
                                <p>{propexp1}</p>
                                <p>{propexp2}</p>
                                <p>{propexp3}</p>
                            </div>
                            <div id = 'date'>
                                <p>Date</p>
                                <p>{propdate1}</p>
                                <p>{propdate2}</p>
                                <p>{propdate3}</p>
                            </div>
                            <div id = 'firm'>
                                <p>Firm</p>
                                <p>{propfirm1}</p>
                                <p>{propfirm2}</p>
                                <p>{propfirm3}</p>
                            </div>
                        </div>                           
                    ):(
                    <div>
                    <div className = 'firstRow'>
                        <input type = "text" value = {propname1} onChange = {event => setPropName1(event.target.value)}/>
                        <input type = "text" value = {propentity1} onChange = {event => setPropEntity1(event.target.value)}/>
                        <input type = "text" value = {proplocation1} onChange = {event => setPropLocation1(event.target.value)}/>
                        <input type = "text" value = {propexp1} onChange = {event => setPropExp1(event.target.value)}/>
                        <input type = "date" value = {propdate1} onChange = {event =>setPropDate1(event.target.value)}/>
                        <input type = "text" value = {propfirm1} onChange = {event => setPropFirm1(event.target.value)}/>
                    </div>
                    <p>
                    <div className = 'firstRow'>
                        <input type = "text" value = {propname2} onChange = {event => setPropName2(event.target.value)}/>
                        <input type = "text" value = {propentity2} onChange = {event => setPropEntity2(event.target.value)}/>
                        <input type = "text" value = {proplocation2} onChange = {event => setPropLocation2(event.target.value)}/>
                        <input type = "text" value = {propexp2} onChange = {event => setPropExp2(event.target.value)}/>
                        <input type = "date" value = {propdate2} onChange = {event => setPropDate2(event.target.value)}/>
                        <input type = "text" value = {propfirm2} onChange = {event => setPropFirm2(event.target.value)}/>
                    </div>
                    </p>
                    <div className = 'firstRow'>
                        <input type = "text" value = {propname3} onChange = {event => setPropName3(event.target.value)}/>
                        <input type = "text" value = {propentity3} onChange = {event => setPropEntity3(event.target.value)}/>
                        <input type = "text" value = {proplocation3} onChange = {event => setPropLocation3(event.target.value)}/>
                        <input type = "text" value = {propexp3} onChange = {event => setPropExp3(event.target.value)}/>
                        <input type = "date" value = {propdate3} onChange = {event => setPropDate3(event.target.value)}/>
                        <input type = "text" value = {propfirm3} onChange = {event => setPropFirm3(event.target.value)}/>
                    </div>
                    </div>
                    )}
                    <div className = 'more'>
                        <p><b>See more proposals</b></p>
                    </div>
                </PropTable>
            </Proposals>
            <InternarReviews>
                <Reviews>
                <b>Internal Reviews</b>
                    {isChange === false?(
                        <div className = 'topText'>
                            <div id = 'name'>
                                <p>Name</p>
                                <p>{intname1}</p>
                                <p>{intname2}</p>
                                <p>{intname3}</p>
                            </div>
                            <div id = 'entity'>
                            <p>Entity</p>
                                <p>{intentity1}</p>
                                <p>{intentity2}</p>
                                <p>{intentity3}</p>
                            </div>
                            <div id = 'location'>
                            <p>Location</p>
                                <p>{intlocation1}</p>
                                <p>{intlocation2}</p>
                                <p>{intlocation3}</p>
                            </div>
                            <div id = 'expertise'>
                            <p>Expertise</p>
                                <p>{intexp1}</p>
                                <p>{intexp2}</p>
                                <p>{intexp3}</p>
                            </div>
                            <div id = 'date'>
                            <p>Date</p>
                                <p>{intdate1}</p>
                                <p>{intdate2}</p>
                                <p>{intdate3}</p>
                            </div>
                        </div> 
                        ):(                          
                    <div>
                    <div className = 'firstRow'>
                        <input type = "text" value = {intname1} onChange = {event => setIntName1(event.target.value)} className = 'rowOne'/>
                        <input type = "text" value = {intentity1} onChange = {event => setIntEntity1(event.target.value)} className = 'rowTwo'/>
                        <input type = "text" value = {intlocation1} onChange = {event => setIntLocation1(event.target.value)} className = 'rowThree'/>
                        <input type = "text" value = {intexp1} onChange = {event => setIntExp1(event.target.value)} className = 'rowFour'/>
                        <input type = "date" value = {intdate1} onChange = {event => setIntDate1(event.target.value)} className = 'rowFive'/>
                    </div>
                    <p>
                    <div className = 'firstRow'>
                        <input type="text" value = {intname2} onChange = {event => setIntName2(event.target.value)} className = 'rowOne'/>
                        <input type="text" value = {intentity2} onChange = {event => setIntEntity2(event.target.value)} className = 'rowTwo'/>
                        <input type="text" value = {intlocation2} onChange = {event => setIntLocation2(event.target.value)} className = 'rowThree'/>
                        <input type="text" value = {intexp2} onChange = {event => setIntExp2(event.target.value)} className = 'rowFour'/>
                        <input type="date" value = {intdate2} onChange = {event => setIntDate2(event.target.value)} className = 'rowFive'/>
                    </div>
                    </p>
                    <div className = 'firstRow'>
                        <input type = "text" value = {intname3} onChange = {event => setIntName3(event.target.value)} className = 'rowOne'/>
                        <input type = "text" value = {intentity3} onChange = {event => setIntEntity3(event.target.value)} className = 'rowTwo'/>
                        <input type = "text" value = {intlocation3} onChange = {event => setIntLocation3(event.target.value)} className = 'rowThree'/>
                        <input type = "text" value = {intexp3} onChange = {event => setIntExp3(event.target.value)} className = 'rowFour'/>
                        <input type = "date" value = {intdate3} onChange = {event => setIntDate3(event.target.value)} className = 'rowFive'/>
                    </div>
                    <div className = 'more'>
                        <p><b>See more reviews</b></p>
                    </div>
                    </div>
                    )}
                </Reviews>
            </InternarReviews>
            <Fees> 
                <Amount>
                    <b>Amount of fees</b>
                    
                    {isChange === false?(
                        <div className = 'topText'>
                            <div id = 'year'>
                            <p>Year</p>
                                <p>{amyear1}</p>
                                <p>{amyear2}</p>
                                <p>{amyear3}</p>
                            </div>
                            <div id = 'center'>
                            <p>Cost center</p>
                                <p>{amcost1}</p>
                                <p>{amcost2}</p>
                                <p>{amcost3}</p>
                                <p>{amcost4}</p>
                                <p>{amcost5}</p>
                            </div>
                            <div id = 'amount'>
                            <p>Total amount</p>
                                <p>{amtotal1}</p>
                                <p>{amtotal2}</p>
                                <p>{amtotal3}</p>
                                <p>{amtotal4}</p>
                                <p>{amtotal5}</p>
                            </div>
                            <div id = 'firm'>
                            <p>Law firm</p>
                                <p>{amlaw1}</p>
                                <p>{amlaw2}</p>
                                <p>{amlaw3}</p>
                                <p>{amlaw4}</p>
                                <p>{amlaw5}</p>
                            </div>
                        </div>                           
                     ):(
                         <div>
                    <div className = 'firstRow'>
                        <input type = "text" value = {amyear1} onChange = {event => setAmYear1(event.target.value)}/>
                        <input type = "text" value = {amcost1} onChange = {event => setAmCost1(event.target.value)}/>
                        <input type = "text" value = {amtotal1} onChange = {event => setAmTotal1(event.target.value)}/>
                        <input type = "text" value = {amlaw1} onChange = {event => setAmLaw1(event.target.value)}/>
                    </div>
                    <p>
                    <div className = 'firstRow'>
                        <input type = "text" value = {amyear2} onChange = {event => setAmYear2(event.target.value)}/>
                        <input type = "text" value = {amcost2} onChange = {event => setAmCost2(event.target.value)}/>
                        <input type = "text" value = {amtotal2} onChange = {event => setAmTotal2(event.target.value)}/>
                        <input type = "text" value = {amlaw2} onChange = {event => setAmLaw2(event.target.value)}/>
                    </div>
                    </p>
                    <div className = 'firstRow'>
                        <input type = "text" value = {amyear3} onChange = {event => setAmYear3(event.target.value)}/>
                        <input type = "text" value = {amcost3} onChange = {event => setAmCost3(event.target.value)}/>
                        <input type = "text" value = {amtotal3} onChange = {event => setAmTotal3(event.target.value)}/>
                        <input type = "text" value = {amlaw3} onChange = {event => setAmLaw3(event.target.value)}/>
                    </div>
                    <p>
                    <div className = 'firstRow'>   
                        <input type = "text" value = {amcost4} onChange = {event => setAmCost4(event.target.value)} className = 'one'/>
                        <input type = "text" value = {amtotal4} onChange = {event => setAmTotal4(event.target.value)} className = 'two'/>
                        <input type = "text" value = {amlaw4} onChange = {event => setAmLaw4(event.target.value)} className = 'three'/>
                    </div>
                    </p>
                    <div className = 'firstRow'>                       
                        <input type = "text" value = {amcost5} onChange = {event => setAmCost5(event.target.value)} className = 'one'/>
                        <input type = "text" value = {amtotal5} onChange = {event => setAmTotal5(event.target.value)} className = 'two'/>
                        <input type = "text" value = {amlaw5} onChange = {event => setAmLaw5(event.target.value)} className = 'three'/>
                    </div>
                    </div>
                    )}
                </Amount>
            </Fees>
        </MainWrapper>
    )
}