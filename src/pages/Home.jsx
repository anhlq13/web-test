import React, { useEffect, useState } from 'react';
import { BannerHero } from '../components/common';
import { Discover, TourWishList, UniquePoint, WishList } from '../components/home';
import ClienLayout from '../layouts/ClienLayout';
import { service } from '../services/service';

const Home = () => {
    const [tours, setTours] = useState([])
    const [types, setTypes] = useState([])
    const [places, setPlaces] = useState([])
    
    useEffect(() => {
        Promise.all([
            service.getAllTour(),
            service.getType(),
            service.getPlace()
        ]).then((data) => {
            console.log(data);
            setTours(data[0])
            setTypes(data[1])
            setPlaces(data[2])
        })

    },[])
    return (
        <ClienLayout>
            <BannerHero />
            <WishList places={places} />
            <TourWishList types={types}  />
            <Discover tours={tours} places={places} types={types}/>

            <UniquePoint />
        </ClienLayout>
    );
}

export default Home;