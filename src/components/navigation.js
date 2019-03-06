import React from 'react'
import { Router, Stack, Scene, Drawer, Tabs } from 'react-native-router-flux'
import Splash from './onboarding/splash'
import Intro from './onboarding/intro'
import Login from './onboarding/login'
import Signup from './onboarding/signup'
import Home from './home/home'
import Hospital from './home/hospital'
import Sidebar from './common/sidebar'
import Tools from './home/tools'
import MyBelleCommunity from './home/myBelleCommunity'

const Navigation = () => {
    return (
        <Router>
            <Stack key="onboarding">
                <Scene key="splash" component={Splash} hideNavBar />
                <Scene key="intro" component={Intro} hideNavBar />
                <Scene key="login" component={Login} hideNavBar />
                <Scene key="signup" component={Signup} hideNavBar />
                <Drawer key='drawer' initial hideNavBar>
                    <Scene key='home' initial component={Home} hideNavBar />
                    <Scene key='hospital' component={Hospital} hideNavBar />
                    <Scene key='tools' component={Tools} hideNavBar/>
                    <Scene key='myBelleCommunity' component={MyBelleCommunity} hideNavBar/>
                </Drawer>
            </Stack>
        </Router>
    );
}

export default Navigation