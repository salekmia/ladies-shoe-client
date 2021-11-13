import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import AllReview from '../AllReview/AllReview';
import Banner from '../Banner/Banner';
import BestProducts from '../BestProducts/BestProducts';
import Choice from '../Choice/Choice';
import Fetured from '../Fetured/Fetured';
import './Home.css';
const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <Choice></Choice>
            <Fetured></Fetured>
            <BestProducts></BestProducts>
            <AllReview></AllReview>
            <Footer></Footer>
        </div>
    );
};

export default Home;