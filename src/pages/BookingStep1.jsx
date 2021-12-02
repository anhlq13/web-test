import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react/cjs/react.development';
import { OverView } from '../components/bookingStep1';
import { Bre, Tour3 } from '../components/common';
import ClienLayout from '../layouts/ClienLayout';
import { service } from '../services/service';
import { User } from '../ultis/checkUser';

const BookingStep1 = () => {
    const params = useParams()
    const { id } = params
    const [tour, setTour] = useState({})
    const user = User.getUser()
    useEffect(() =>{
        service.getDetailTour(id).then(payload => {
            setTour(payload)
        })
    }, [id])

    return (
        <ClienLayout >
            <Bre bre={["Booking","Nhập thông tin"]}/>
            <div className="step-breadcrumb breadcrumb">
                <span className="current">
                    1. Nhập thông tin
                </span>
                <span className="prev-page ">
                    <i className="fas fa-chevron-right" />
                    2. Xác nhận của bạn
                </span>
            </div>


            <Tour3 tour={tour}/>
            <OverView user ={user} tour={tour}/>
        </ClienLayout>
    );
};

export default BookingStep1;