import React from 'react'
import { Router, Stack, Scene } from 'react-native-router-flux'
import Splash from './onboarding/splash'
import Intro from './onboarding/intro'
import Login from './onboarding/login'

const Navigation = () => {
    return (
        <Router>
            <Stack key="onboarding">
                <Scene key="splash" component={Splash} hideNavBar />
                <Scene key="intro" component={Intro} hideNavBar />
                <Scene key="login" component={Login} initial hideNavBar />
            </Stack>
        </Router>
    );
}

export default Navigation