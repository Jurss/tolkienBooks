import React from 'react';
import './App.css';
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';
import HomeMobile from './component/mobile/HomeMobile';
import HomeDesktop from './component/desktop/HomeDesktop';

function App() {

    const renderContent = () => {
        if (isMobile) {
            return <HomeMobile />
        }
        return <HomeDesktop />
      }

  return renderContent()
}

export default App;
