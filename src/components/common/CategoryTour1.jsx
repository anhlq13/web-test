/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Tour1 } from '.';

export const CategoryTour1 = ({title, tours}) => {
    return (
        <div className="category tourlist-category container">
            <div className="heading">{title}</div>
            <div className="row">
            {
                    tours.map((value,key) => {
                        return (
                            <a href="#" className="col-3" key={key}>
                            <Tour1 tour={value} />
                        </a>
                        )
                    })
                }
                
                

            </div>
        </div>
    );
};
