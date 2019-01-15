import React from 'react'
import { ImageBackground } from 'react-native'
import { Router, Stack, Scene } from 'react-native-router-flux'
import Splash from './onboarding/splash'
import Intro from './onboarding/intro'

const Navigation = () => {
    return (
        <Router>
            <Stack key="onboarding">
                <Scene key="splash" component={Splash} hideNavBar />
                <Scene key="intro" component={Intro} initial hideNavBar />
            </Stack>
        </Router>
    );
}

export default Navigation