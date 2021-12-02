/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react';
import { CategoryTour1 } from '../components/common';
import DiscoverPot from '../components/common/DiscoverPot';
import UniquePoint from '../components/common/UniquePoint';
import { UserInfo } from '../components/userFile';
import ClienLayout from '../layouts/ClienLayout';
import { service } from '../services/service';

const UserFile = () => {
    const [tours, setTours] = useState([])
    useEffect(() => {
        service.getAllTour().then(data => {
            setTours(data)
        })
    },[])
    return (
        <ClienLayout>
            <UserInfo />
            <CategoryTour1 tours={tours} title = "Yêu thích" />
            <DiscoverPot tours={tours} /> 
            <UniquePoint />
        </ClienLayout>
    );
};

export default UserFile;