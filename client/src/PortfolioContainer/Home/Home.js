import React from 'react';
import Profile from './Profile/Profile';
import Footer from './Footer/Footer';
import Header from './Header/Header';

import './Home.css'

export default function Home(props) {
    return (
        <div className='home-container' id={PaymentResponse.id || ""}>
            <Header />
            <Profile />
            <Footer />
        </div>
    )
}