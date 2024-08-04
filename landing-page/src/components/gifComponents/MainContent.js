import React from 'react'
import CarouselComponent from './CarouselComponent'
import AboutPlatform from './AboutPlatform'
import LoginPage from './LoginPage'
import VisionMission from './VisionMission'

export default function MainContent() {
    return (
        <div>
            <CarouselComponent></CarouselComponent>
            <AboutPlatform></AboutPlatform>
            <VisionMission></VisionMission>
            <LoginPage></LoginPage>
        </div>
    )
}
