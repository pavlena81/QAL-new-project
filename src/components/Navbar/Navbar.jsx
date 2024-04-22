import '../Navbar/Navbar.css'
import viteLogo from '/vite.svg'


export const Navbar = () => { 

    return (
        <>
            <div className='container'>
            <header className='navbar'>
                
                <div className='navbar__title navbar__item'>
                    <a href="https://vitejs.dev" target="_blank">
                        <img src={viteLogo} className="logo" alt="Vite logo" />
                    </a>
                </div>
                <div className='navbar__item'>About Us</div>
                <div className='navbar__item'>Contact</div>
                
                <div className='navbar__item'>Help</div> 
                    
            </header></div>
        </>
    )
    
};

