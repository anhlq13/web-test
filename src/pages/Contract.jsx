import React from 'react';
import { useEffect, useState } from 'react/cjs/react.development';
import { OverView } from '../components/bookingStep1';
import { Bre, Tour3 } from '../components/common';
import ClienLayout from '../layouts/ClienLayout';
import { service } from '../services/service';
import { User } from '../ultis/checkUser';
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

const Contract = () => {
    const [tour, setTour] = useState({})
    const [order, setOrder] = useState()
    const params = useParams()
    const { id } = params
    const user = User.getUser()
    const history = useHistory()
    useEffect(() => {
        if (!user) {
            return history.push('/')
        }
        service.getOrderDetail(id).then(data => {
            console.log(data);
            setOrder(data)
            service.getDetailTour(data.tour_id).then((payload) =>{
                setTour(payload)
            })
        }).catch(er => {
            User.logOut()
            return history.push('/booked')
        })
    },[history, id])
    return (
        <ClienLayout >
            <Bre bre={["Tour đã đặt","Hợp đồng tour"]}/>
            <h1 className="heading align-center for-contract">HỢP ĐỒNG TOUR</h1>
            {
                tour.tour_id && <Tour3 tour={tour}/>
            }
            
            <OverView user ={user} tour={tour} order={order}/>
        </ClienLayout>
    );
};

export default Contract;