import React from 'react';
import Header from './Header';
import Banner from './Home/Banner';
import Chefs from './Home/Chefs';

const Root = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <Chefs></Chefs>
        </div>
    );
};

export default Root;