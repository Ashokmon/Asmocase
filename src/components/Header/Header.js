import React, { Component, useEffect, useState } from 'react'
import styles from './Header.module.scss'
import { headerConfig,NavItems } from '../../constants';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { Link,useLocation } from 'react-router-dom';
// import WidgetsIcon from '@mui/icons-material/Widgets';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';


// Component

const RenderTitle = ({data}) => {
    const {title, options} = data;
    const [firstTitle,secondTitle]=title.split(' ');
    return (
        <div className= {styles.sectionOne}>
            <h1 className= {styles.title}> 
             <span>{firstTitle}</span>  
             <span>{secondTitle}</span>  
             </h1> 
             <div className= {styles.options}>
            { options.map ((val,index)=> 
             <div key={index}><span> {val} </span> <PlayArrowIcon/> </div> )}
             </div>
        </div>
    )
}



const RenderNavigationLinks = ({data,setCurrentNav,currentNav,setIsMenuOpen}) => {
    return (
       <div className={styles.sectionTwo}>
        <nav className={styles.navigation}>
            {data.map(nav => (
                <Link
                className={nav.id === currentNav.id ? styles.active :''}
                to={nav.routes}
                key={nav.id}
                onClick={()=>{setCurrentNav(nav);setIsMenuOpen(false);}}
                >
                    {nav.label}
                </Link>
))}
        </nav>
       </div>
    )
}




const Header = ({navData = NavItems,headerData = headerConfig}) => {
    const [currentNav,setCurrentNav] = useState ({ })
    const [isMenuOpen,setIsMenuOpen] = useState(false)
    const { pathname } = useLocation()





    useEffect(() => {
        const nav = navData.find(nav => nav.routes === pathname)
//  mount
    setCurrentNav(nav)
    },[pathname,navData])

// function

   

    const renderButtons = () => {
        return (
           <div className={styles.sectionThree}>
           <button>Log In</button>
           <button className={styles.signUp}>Sign Up</button>
           </div>
        )
    }


    const renderMobileMenu = () =>{
        return(
            <div className={styles.mobileContainer}>

                   <RenderNavigationLinks 
                   currentNav={currentNav}
                    setCurrentNav={setCurrentNav}
                    data={navData} 
                    setIsMenuOpen ={setIsMenuOpen}
                    />
                     {renderButtons()}
                     <div className={styles.closeIcon}
                     onClick={() => setIsMenuOpen(false)}
                     >< CloseIcon/></div>
            </div>
        )
    }

    return (
        <header>
            <div className= {styles.container}>
                <div className= {styles.header}>
                    {/* {renderTitle (headerData)} */}
                    <RenderTitle data={ headerData}/>
                    <RenderNavigationLinks  
                    currentNav={currentNav}
                    setCurrentNav={setCurrentNav}
                    data={navData}/>
                    {renderButtons()}
                   <div className={styles.mobileMenu}
                   onClick={() => setIsMenuOpen(true)}
                   >
                    <MenuIcon />
                    </div>                 
                </div>
                {isMenuOpen ?  renderMobileMenu () : ''}
            </div>
        </header>

    )
}

export default Header


// const renderTitle = (data) => {
    
//     return (
//         <div className="sectionOne">
//             <h1 className="title">Asmo case</h1> 
//             <div className="subHeadings">
//                 <div>Rent</div>
//                 <div>Buy</div>
//                 <div>sell</div>
//             </div>
//         </div>
//     )
// }