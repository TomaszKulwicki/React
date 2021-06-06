import { FC } from 'react';
import styled from 'styled-components';

const MainFilter = styled.div`
background-color: white;
height: 140px;
width: 560px;
position: absolute;
border: 1px black solid;
z-index: 2;
margin-top: 25px;
`;

const Wrapper = styled.div`
margin: 10px 10px 10px 10px;
.row{
    display: flex;
    margin: 5px 0px 0px 0px;
    .close{
        width: 15px;
        height: 15px;
        margin-right: 10px;
    }
}
.arrow{
    height: 6px;
    margin: 6px 6px 0px 6px;;

}
input{
    margin: 0px 6px 0px 6px;
    width: 100px;
}
.first{
    margin-right: 30px;
}
.second{
    margin-right: 45px;
}
.add{
    margin-right: 10px;
}
.row1{
    display: flex;
    margin: 5px 0px 0px 0px;
    color: #4254A8;
    .close{
        width: 15px;
        height: 15px;
        margin-right: 10px;
    } 
}
`;

export const EntitiesFilter: FC = () => {
    return(
        <MainFilter>
            <Wrapper>
                <div>Rows are filtered by the following conditions starting from the top</div>
                <div className = 'row'>
                    <div className = 'first'><img src = 'media/icons/close.png' alt = '' className = 'close'/> Where</div>
                    <div>Company</div>
                    <img src = 'media/icons/arrow-down.png' alt = '' className = 'arrow'/>
                    <div>Contains</div>
                    <img src = 'media/icons/arrow-down.png' alt = '' className = 'arrow'/>
                    <input type = 'text' placeholder = 'Type...'></input>
                </div>
                <div className = 'row'>
                    <div className = 'first'><img src = 'media/icons/close.png' alt = '' className = 'close'/> Where</div>
                    <div>Status</div>
                    <img src = 'media/icons/arrow-down.png' alt = '' className = 'arrow'/>
                    <div>Is</div>
                    <img src = 'media/icons/arrow-down.png' alt = '' className = 'arrow'/>
                    <input type = 'text' placeholder = 'Type...'></input>
                    <div>In</div>
                    <img src = 'media/icons/arrow-down.png' alt = '' className = 'arrow'/>
                    <input type = 'text' placeholder = 'Entity...'></input>
                </div>
                <div className = 'row'>
                    <div className = 'second'><img src = 'media/icons/close.png' alt = '' className = 'close'/> Add</div>
                    <div>Status</div>
                    <img src = 'media/icons/arrow-down.png' alt = '' className = 'arrow'/>
                    <div>Ends before</div>
                    <img src = 'media/icons/arrow-down.png' alt = '' className = 'arrow'/>
                    <input type = 'text' placeholder = 'Date'></input>
                    <div>In</div>
                    <img src = 'media/icons/arrow-down.png' alt = '' className = 'arrow'/>
                    <input type = 'text' placeholder = 'Entity...'></input>
                </div>
                <div className = 'row1'>
                    <div className = 'add'><img src = 'media/icons/add.png' alt = '' className = 'close'/> Add filter</div>
                    <div>choose property</div>
                    <img src = 'media/icons/arrow-down.png' alt = '' className = 'arrow'/>
                </div>
            </Wrapper>
        </MainFilter>
    )
}