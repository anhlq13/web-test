import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Bre, SearchTour, Tour3 } from '../components/common';
import DiscoverPot from '../components/common/DiscoverPot';
import UniquePoint from '../components/common/UniquePoint';
import ClienLayout from '../layouts/ClienLayout';
import { service } from '../services/service';
import { User } from '../ultis/checkUser';
const BookedTour = () => {
    const [tours, setTours] = useState([])
    const [order, setOrder] = useState([])

    const [bookedTour, setBookedTour] = useState([])
    const history = useHistory()
    const [user, setUser] = useState(User.getUser())

    useEffect(() => {
        if (!user) {
            return history.push('/')
        }

        Promise.all([
            service.getAllTour(),
            service.getOrder(),
        ]).then((data) => {
            setTours(data[0])
            setOrder(data[1])

            const get = []
            data[1].forEach(item => {
                get.push(service.getOrderDetail(item.order_id))
            });

            Promise.all(get).then(payload => {
                console.log(payload);
                setBookedTour(payload)
            })
        }).catch(er => {
            User.logOut()
            return history.push('/login')
        })



    }, [history, user])
    return (
        <ClienLayout>
            <Bre />
            <SearchTour className="search-tool forFavTour" />
            <div className="tourlist-line2"></div>
            <div>
                <div className="tour-sumoup-wrapper container">
                    <h1 className="heading align-center for-contract">Tour đã đặt</h1>
                    {
                        tours.map((tour, key) => {
                            let check = false
                            let index = null
                            bookedTour.forEach((item, key2) => {
                                if (tour.tour_id === item.tour_id) {
                                    index = key2
                                    return check = true
                                }
                            })
                            if (check) {
                                return (
                                    <Link to={"/contract/" + order[index].order_id} key={key}>
                                    <Tour3 tour={tour} />
                                    </Link>
                                )
                            }
                            return null
                        })
                    }
                </div>
                <div className="tourlist-line2" />
                {/* <div className="tour-sumoup-wrapper container">
                    <h1 className="heading align-center for-contract">Tour đã trải nghiệm</h1>
                    <Tour3 />
                    <Tour3 />
                </div> */}
            </div>
            <DiscoverPot tours={tours} bookedTour={bookedTour} />
            <UniquePoint />
        </ClienLayout>
    );
};

export default BookedTour;