import React, { useEffect, useRef, useState } from 'react'
import styles from './Featured.module.scss';
import cx from 'classnames';
import { images } from '../../assets/images';
import { icons } from '../../assets/icons';


const tabConfig = [
    { label: 'House', id: 'house', icon: <icons.HouseIcon /> },
    { label: 'Villa', id: 'villa', icon: <icons.VillaIcon /> },
    { label: 'Apartment', id: 'apartment', icon: <icons.ApartmentIcon /> },
];



const houseConfig = [
    {
        label: 'Ikeja, Lagos',
        id: 'lkeja-lagos',
        price: 2000000,
        bedroom: 3,
        interest: '31',
        rating: 4.5,
        imgSrc: images.featuredhouse1,
    },
    {
        label: 'keja, Lagos',
        id: 'keja-lagos',
        price: 20000,
        bedroom: 2,
        interest: '23',
        rating: 4.8,
        imgSrc: images.featuredhouse2,
    },
    {
        label: 'eja, Lagos',
        id: 'eja-lagos',
        price: 20000,
        bedroom: 4,
        interest: '14',
        rating: 4.2,
        imgSrc: images.featuredhouse3,
    },
    {
        label: 'ja, Lagos',
        id: 'ja-lagos',
        price: 1000000,
        bedroom: 3,
        interest: '36',
        rating: 4.4,
        imgSrc: images.featuredhouse4,
    },
    {
        label: 'a, Lagos',
        id: 'a-lagos',
        price: 1000000,
        bedroom: 2,
        interest: '31',
        rating: 4.6,
        imgSrc: images.featuredhouse5,
    },
    {
        label: 'Na, Lagos',
        id: 'na-lagos',
        price: 20000,
        bedroom: 3,
        interest: '8',
        rating: 4.9,
        imgSrc: images.featuredhouse1,
    }
];


const Featured = () => {

    const [currentTab, setCurrentTab] = useState();
    const [currentHouse, setCurrentHouse] = useState();
    const [activeArrow, setActiveArrow] = useState();

    const currentHouseRef =useRef();

    useEffect(() => {

        setCurrentTab(tabConfig[0])
        setCurrentHouse(houseConfig[0])
        setActiveArrow('left')
   
    }, [])

    useEffect(() => {
   if(currentHouseRef.current){
    currentHouseRef.current.scrollIntoView({
        behavior: 'smooth',
        block:'nearest',
        inline:'nearest',
    })
}
},[currentHouse])


    const handlePreviousHouse = () => {

        if(currentHouse.id === houseConfig[0].id)
            return null

        const currentIndex = houseConfig.findIndex(house =>
            house.id === currentHouse.id)

        if(currentIndex > 0){
         setCurrentHouse(houseConfig[currentIndex - 1])
        }
        
        if(houseConfig[0]){
            setActiveArrow('left')
        }

    }

    const handleNextHouse = () => {
          if(currentHouse.id === houseConfig[houseConfig.length-1].id)
            return null
       
          const currentIndex = houseConfig.findIndex(house =>
            house.id === currentHouse.id)
       
            if(currentIndex < houseConfig.length -1){
            setCurrentHouse(houseConfig[currentIndex + 1])
        }
        
            if(houseConfig[houseConfig.length -1]){
            setActiveArrow('right')
        }
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

        const { label, id, price, rating, imgSrc, bedroom, interest } = data;
        
        const check = currentHouse?.id === id
        return (
            <div
                key={id}
                className= {cx(styles.buliding ,
                check ? styles.activeBuliding : ''     
                )}

                ref={check ? currentHouseRef : null}
                onClick={() => setCurrentHouse(data)}
            >
                               
                
                <img src={imgSrc} alt={label} />
                <div className={styles.details}>
                    <div className={styles.label}>{label}</div>
                    <div className={styles.otherDetails}>

                        <div className={styles.section}>
                            {<icons.PersonIcon />}
                            <div className={styles.temp}>{bedroom} bedroom</div>
                        </div>

                        <div className={styles.section}>
                            {<icons.WifiIcon />}
                            <div className={styles.section}>WI-FI</div>
                        </div>

                    </div>
                </div>
                <div className={styles.price}>
                    <span>RS</span>
                    {price}
                    <span>/annum</span>
                </div>
                <div className={styles.interest}>
                    {interest} have interest in this property
                </div>
                <button className={styles.viewMore}>
                    <div className={styles.section}>
                        <span>View More </span>
                        {<icons.ArrowForwardIcon />}
                    </div>
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

                <icons.KeyboardArrowLeftIcon 
                    className={cx(styles.right,
                    activeArrow === 'left' ? styles.activeArrow : ''
                    )} 
                    // onClick={handleNextHouse}
                    onClick={handlePreviousHouse}                            
                    />

                <icons.KeyboardArrowLeftIcon 
                    className={cx(styles.left,
                    activeArrow === 'right' ? styles.activeArrow : ''
                    )} 
                    onClick={handleNextHouse}
                    // onClick={handlePreviousHouse}  
                    />
               
                </div>
            </div>
            <div className={styles.houses}>
                {houseConfig.map(renderHouse)}
            </div>
        </div>
    )
}

export default Featured
