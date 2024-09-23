import React from 'react'
import HouseIcon from '@mui/icons-material/House';
import VillaIcon from '@mui/icons-material/Villa';
import ApartmentIcon from '@mui/icons-material/Apartment';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import styles from './Featured.module.scss';

const tabConfig =[
    {label:'House', id:'house', icon:<  HouseIcon/>},
    {label:'Villa', id:'villa', icon:<VillaIcon/> },
    {label:'Apartment', id:'apartment', icon:<ApartmentIcon/>},
    
]

const houseConfig =[

]


const Featured = () => {

    const handlePreviousHouse =() =>{
    }
   
    const handleNextHouse = () =>{

    }

    const renderTab = (data) => {
     const {label,id,icon} = data
     return(
        <div className={styles.tab}>
            {icon} <span> {label}</span>
        </div>
     )

    }

    const renderHouse =() =>{

    }

  return (
   <div className={styles.container}>
    <div className={styles.header}>
        <div className={styles.title}><span>Featured </span>Houses</div>
        <div className={styles.tabs}>{tabConfig .map(renderTab)}</div>
        <div className={styles.scrollButtons}>
            <KeyboardArrowLeftIcon className={styles.right}/> 
            <KeyboardArrowLeftIcon className={styles.left}/> 
        </div>
    </div>
    <div className={styles.house}>
      {houseConfig.map(renderHouse)}  
     </div>
   </div>
  )
}

export default Featured