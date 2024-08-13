import React, { useState, useEffect } from 'react';
import { TOTAL_SCREENS, GET_SCREEN_INDEX } from '../../../utilities/commonUtils';
import ScrollService from '../../../utilities/ScrollService';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Header.css';

export default function Header() {
    // Initialize selected screen based on URL hash or default to Home (index 0)
    const [selectedScreen, setSelectedScreen] = useState(GET_SCREEN_INDEX(window.location.hash.substring(1)) || 0);
    const [showHeaderOptions, setShowHeaderOptions] = useState(false);

    useEffect(() => {
        const updateCurrentScreen = (currentScreen) => {
            if (!currentScreen || !currentScreen.screenInView) return;
            let screenIndex = GET_SCREEN_INDEX(currentScreen.screenInView);
            if (screenIndex < 0) return;
            setSelectedScreen(screenIndex);
        };

        // Subscribe to screen change events from ScrollService
        const currentScreenSubscription = ScrollService.currentScreenBroadCaster.subscribe(updateCurrentScreen);
        return () => {
            currentScreenSubscription.unsubscribe();
        };
    }, []);

    const getHeaderOptions = () => {
        return TOTAL_SCREENS.map((screen, i) => (
            <div
                key={screen.screen_name}
                className={getHeaderOptionsClass(i)}
                onClick={() => switchScreen(i, screen)}
            >
                <span>{screen.screen_name}</span>
            </div>
        ));
    };

    const getHeaderOptionsClass = (index) => {
        let classes = "header-option";
        if (index < TOTAL_SCREENS.length - 1) classes += " header-option-separator";
        if (selectedScreen === index) classes += " active-header-option"; // Add active class if selected
        return classes;
    };

    const switchScreen = (index, screen) => {
        let screenComponent = document.getElementById(screen.screen_name);
        if (!screenComponent) return;
        screenComponent.scrollIntoView({ behavior: 'smooth' });
        setSelectedScreen(index); // Update selected screen state
        setShowHeaderOptions(false);
    };

    return (
        <div className="header-container">
            <div className="header-parent">
                <div className="header-hamburger" onClick={() => setShowHeaderOptions(!showHeaderOptions)}>
                    <FontAwesomeIcon className="header-hamburger-bars" icon={faBars} />
                </div>
                <div className="header-logo">
                    <span>WELCOME</span>
                </div>
                <div className={showHeaderOptions ? "header-options show-hamburger-options" : "header-options"}>
                    {getHeaderOptions()}
                </div>
            </div>
        </div>
    );
}
