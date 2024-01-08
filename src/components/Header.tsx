import { useState } from "react";
import { Link } from "react-router-dom";
import dumbo from "../assets/dumbo.png";
import Menu from "./Menu";
import "../styles/Header.scss";
import {
  AppBar,
  Box,
  Container,
  List,
  Toolbar,
} from "@mui/material";

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <AppBar className="nav">
      <Toolbar className="cloud-navbar">
        <Container
          maxWidth="xl"
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mt: -10,
          }}
        >
          <Link to={"/"}>
            <img src={dumbo} style={{ width: 160 }} />
          </Link>
          <Box sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}>
            <List>
              <Link to={"/"} className="header-link">
                Pocetna
              </Link>
              <Link to={"/cenovnik"} className="header-link">
                Cenovnik
              </Link>
              <Link to={"/kontakt"} className="header-link">
                Kontakt
              </Link>
              <Link to={"/o-nama"} className="header-link">
                O nama
              </Link>
            </List>
          </Box>

        </Container>
      </Toolbar>
    </AppBar>
    // <div className='header'>
    //     <div className='header-left'>
    //         <Link to={'/'}><motion.img whileHover={{ scale: 1.075 }} src={dumbo} className='header-logo'/></Link>
    //   <ul>
    //       <Link to={'/'} className='header-link'>Pocetna</Link>
    //       <Link to={'/cenovnik'} className='header-link'>Cenovnik</Link>
    //       <Link to={'/kontakt'} className='header-link'>Kontakt</Link>
    //       <Link to={'/onama'} className='header-link'>O nama</Link>
    //   </ul>
    //     </div>
    //     <div className='header-contact'>
    //         <p>Pozovite nas 065 8329 832</p>
    //         <div className='circle'>
    //             <FontAwesomeIcon icon={faInstagram} style={{color: "#fff"}} className='icon'/>
    //         </div>
    //     </div>
    //     <div className="menu-btn" onClick={() => setIsOpen(!isOpen)}>
    //     <AnimatePresence>
    //         {isOpen ? (
    //             <motion.img initial={{ opacity: 1 }} exit={{ opacity: 0 }} src={menuCloseBtn} alt="menu-icon" className='menu-icon' />
    //         ) : (
    //             <motion.img initial={{ opacity: 1 }} exit={{ opacity: 0 }} src={menuOpenBtn} alt="menu-icon" className='menu-icon' />
    //         )}
    //     </AnimatePresence>
    //     </div>
    //     <AnimatePresence>
    //         {isOpen ? (
    //             <Menu isOpen={isOpen} />
    //         ) : null}
    //     </AnimatePresence>
    // </div>
  );
};

export default Header;
