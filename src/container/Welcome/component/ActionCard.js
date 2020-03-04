import React from 'react'
import {Link} from 'react-router-dom'

export default function ActionCard({icon, date, title, button, img}) {
    return (
        <div className="card">
            <div className="image">
                <img src={img} />
            </div>
            <div className="card-body">
                <div className="icon">
                    <div className="circle-icon">
                        {icon}
                    </div>
                </div>
                <p className="date">{date}</p>
                <h3>{title}</h3>
                {button}
            </div>
        </div>
    )
};