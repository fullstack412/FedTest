import React, {Fragment, Component} from 'react';
import { Link } from 'react-router-dom';
import ActionCard from './component/ActionCard'

import img1 from '../../assets/images/photography/www.knobcreek.com-1550031134660845.jpg'
import img2 from '../../assets/images/photography/www.knobcreek.com-1564585437648699.jpg'
import img3 from '../../assets/images/photography/www.knobcreek.com-1550074812575410.jpg'
import img4 from '../../assets/images/photography/www.knobcreek.com-1550224289791139.jpg'
import img5 from '../../assets/images/photography/www.knobcreek.com-1550246487292757.jpg'
import img6 from '../../assets/images/photography/www.knobcreek.com-1550293000153014.jpg'
import img7 from '../../assets/images/photography/www.knobcreek.com-1550319714280280.jpg'
import img8 from '../../assets/images/photography/www.knobcreek.com-1550664938574687.jpg'
import img9 from '../../assets/images/photography/www.knobcreek.com-1550653084056276.jpg'
import img10 from '../../assets/images/photography/www.knobcreek.com-1550660375610157.jpg'

import icon_article from '../../assets/images/iconography/Article.svg'
import icon_facebook from '../../assets/images/iconography/Facebook_Icon.svg'
import icon_gallery from '../../assets/images/iconography/Gallery.svg'
import icon_glass from '../../assets/images/iconography/Glass.svg'
import icon_twitter from '../../assets/images/iconography/TwitterIcon.svg'
import icon_video from '../../assets/images/iconography/Video.svg'

const data = [
    {
        img: img1,
        icon: <img src={icon_article} className="icon" />,
        date: "november 10",
        title:"This Creek Runs Full, Making Every Glass Count",
        button: <Link to="/" className="action">Read More</Link>
    },
    {
        img: img2,
        icon: <img src={icon_video} className="icon" />,
        date: "november 10",
        title:"This Creek Runs Full, Making Every Glass Count",
        button: <Link to="/" className="action">Watch Video</Link>
    },
    {
        img: img3,
        icon: <img src={icon_glass} className="icon" />,
        date: "november 10",
        title:"This Creek Runs Full, Making Every Glass Count",
        button: <Link to="/" className="action">Read More</Link>
    },
    {
        img: img4,
        icon: <img src={icon_video} className="icon" />,
        date: "november 10",
        title:"This Creek Runs Full, Making Every Glass Count",
        button: <Link to="/" className="action">Watch Video</Link>
    },
    {
        img: img5,
        icon: <img src={icon_article} className="icon" />,
        date: "november 10",
        title:"This Creek Runs Full, Making Every Glass Count",
        button: <Link to="/" className="action">Read More</Link>
    },
    {
        img: img6,
        icon: <img src={icon_gallery} className="icon" />,
        date: "november 10",
        title:"This Creek Runs Full, Maing Ev,ery Glass Count",
        button: <Link to="/" className="action">View Gallery</Link>
    },
    {
        img: img7,
        icon: <img src={icon_article} className="icon" />,
        date: "november 10",
        title:"This Creek Runs Full, Making Every Glass Count",
        button: <Link to="/" className="action">Read More</Link>
    },
    {
        img: img8,
        icon: <img src={icon_glass} className="icon" />,
        date: "november 10",
        title:"This Creek Runs Full, Making Every Glass Count",
        button: <Link to="/" className="action">Read More</Link>
    },
    {
        img: img9,
        icon: <img src={icon_gallery} className="icon" />,
        date: "november 10",
        title:"This Creek Runs Full, Making Every Glass Count",
        button: <Link to="/" className="action">View Gallery</Link>
    }
    
]

class WelcomePage extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <Fragment>
                <div className="h-100 welcome-content">
                    <h2>Recent Articles</h2>
                    <div className="content">
                        {data.map((item, index) => (
                            <ActionCard 
                            key={index}
                                {...item}
                            />
                        ))}
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default WelcomePage