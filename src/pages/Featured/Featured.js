import React, { useEffect, useState } from 'react'
import styles from './Featured.module.scss';
import cx from 'classnames';
import { images } from '../../assets/images';
import { icons } from '../../assets/icons';


const tabConfig = [
    { label: 'House', id: 'house', icon: <icons.HouseIcon/> },
    { label: 'Villa', id: 'villa', icon: <icons.VillaIcon />},
    { label: 'Apartment', id: 'apartment', icon: <icons.ApartmentIcon/> },
];

const houseConfig = [
{
    label:'Ikeja, Lagos',
    id:'lkeja-lagos',
    price:2000000,
    bedroom:3,
    interest:'31',
    rating:4.5,
    imgSrc:images.featuredhouse1,
},
{
    label:'keja, Lagos',
    id:'keja-lagos',
    price:20000,
    bedroom:2,
    interest:'23',
    rating:4.8,
    imgSrc:images.featuredhouse2,
},
{
    label:'eja, Lagos',
    id:'eja-lagos',
    price:20000,
    bedroom:4,
    interest:'14',
    rating:4.2,
    imgSrc:images.featuredhouse3,
},
{
    label:'ja, Lagos',
    id:'ja-lagos',
    price:1000000,
    bedroom:3,
    interest:'36',
    rating:4.4,
    imgSrc:images.featuredhouse4,
},
{
    label:'a, Lagos',
    id:'a-lagos',
    price:1000000,
    bedroom:2,
    interest:'31',
    rating:4.6,
    imgSrc:images.featuredhouse5,
},
{
    label:'Na, Lagos',
    id:'na-lagos',
    price:20000,
    bedroom:3,
    interest:'8',
    rating:4.9,
    imgSrc:images.featuredhouse1,
}
];


const Featured = () => {

    const [currentTab, setCurrentTab] = useState();
    const [currentHouse, setCurrentHouse] = useState();
    const [activeArrow, setactiveArrow] = useState();


    useEffect(() => {

        setCurrentTab(tabConfig[0])

    }, [])

    const handlePreviousHouse = () => {
    }

    const handleNextHouse = () => {

    }

    const renderTab = (data) => {
        const { label, id, icon } = data
        return (
            <div
                key={id}
                className={cx(styles.tab,

                    currentTab?.id === id ? styles.activeTabs : ''
                )}
                onClick={() => setCurrentTab(data)}
            >
                {icon} <span> {label}</span>
            </div>
        )

    }

    const renderHouse = (data) => {

        const {label,id,price,rating,imgSrc,bedroom,interest} =data;

      return(
              <div key={id}  className="buliding">
                <img src={imgSrc} alt={label} />
                <div className="details">
                    <div className="label">{label}</div>
                    <div className="otherDetails">
                        <div className="section">
                         {<icons.PersonIcon />}
                         <div className="">{bedroom}bedroom</div>
                        </div>

                        <div className="section">
                         {<icons.WifiIcon />}
                         <div className="">WI-FI</div>
                        </div>

                    </div>
                </div>
           <div className="price">
            <span>RS</span>
            {price}
            <span>/annum</span>
           </div>
           <div className="interest">
            {interest} have interest in this property
           </div>
          <button className="viewMore">
            <span>view more </span> {<icons.ArrowForwardIcon/>}
          </button>

              </div>
    



      )
    }


    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.title}><span>Featured </span>Houses</div>
                <div className={styles.tabs}>{tabConfig.map(renderTab)}</div>
                <div className={styles.scrollButtons}>
                    <icons.KeyboardArrowLeftIcon className={styles.right} />
                    <icons.KeyboardArrowLeftIcon className={styles.left} />
                </div>
            </div>
            <div className={styles.house}>
                {houseConfig.map(renderHouse)}
            </div>
        </div>
    )
}

export default Featured