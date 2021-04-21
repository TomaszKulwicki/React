import styled from 'styled-components';
import React, { FC } from 'react';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { TopBar } from '../TopBar/top';
import { LeftMenu } from '../LeftMenu/left';
import { Publications} from '../Publications/publications';
import { Ecosystem } from '../Ecosystem/ecosystem';
import { Entities } from '../Entities/entities';
import { Overwiev } from '../Overwiev/overwiev';
import { Profile } from '../Profile/profile';

const Wrapper = styled.div``;

const InnerWrapper = styled.div``;

const Content = styled.div`
    max-width: 100%;
    align-items: center;
    display: flex;
`;

export const Main: FC = () => {
    return(
        <Router>
            <Wrapper>
                <InnerWrapper>
                    <TopBar/>
                    <Content>
                        <LeftMenu/>
                        <Switch>
                            <Route path = '/publications'>
                                <Publications/>
                            </Route>
                            <Route path = '/ecosystem'>
                                <Ecosystem/>
                            </Route>
                            <Route path = '/entities'>
                                <Entities/>
                            </Route>
                            <Route path = '/profile'>
                                <Profile/>
                            </Route>
                            <Route path = '/'>
                                <Overwiev/>
                            </Route>
                        </Switch>
                    </Content>
                </InnerWrapper> 
            </Wrapper> 
        </Router>
    );
};

export default Main;