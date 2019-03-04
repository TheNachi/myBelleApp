import React from 'react'
import { Router, Stack, Scene } from 'react-native-router-flux'
import Splash from './onboarding/splash'
import Intro from './onboarding/intro'
import Login from './onboarding/login'
import Signup from './onboarding/signup'

const Navigation = () => {
    return (
        <Router>
            <Stack key="onboarding">
                <Scene key="splash" component={Splash} hideNavBar />
                <Scene key="intro" component={Intro} hideNavBar />
                <Scene key="login" component={Login} hideNavBar />
                <Scene key="signup" component={Signup} initial hideNavBar />
            </Stack>
        </Router>
    );
}

export default Navigation