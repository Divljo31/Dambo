import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import dumbo from "../assets/dumbo.png";
import "../styles/Header.scss";
import {
  AppBar,
  Box,
  Container,
  IconButton,
  List,
  Toolbar,
  Typography,
} from "@mui/material";
import Hamburger from "hamburger-react";
import { AnimatePresence, motion } from "framer-motion";
import { useClickAway } from "react-use";

const Header = () => {
  const [isOpen, setOpen] = useState(false);
  const ref = useRef(null);

  useClickAway(ref, () => setOpen(false));

  return (
    <AppBar className="nav" sx={{ height: 300 }}>
      <Toolbar
        className="cloud-navbar"
        sx={{ backgroundPositionY: { xs: "-100px", md: "-75px" } }}
      >
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
              <Link to={"/o-nama"} className="header-link">
                O nama
              </Link>
              <Link to={"/rodjendaonica"} className="header-link">
                Rodjendaonica
              </Link>
              <Link to={"/igraonica"} className="header-link">
                Igraonica
              </Link>
              <Link to={"/kontakt"} className="header-link">
                Kontakt
              </Link>
            </List>
          </Box>
          <Box
            sx={{
              mr: 2,
              display: {
                xs: "block",
                md: "none",
              },
            }}
          >
            <IconButton edge="start" color="inherit">
              <Hamburger
                toggled={isOpen}
                toggle={setOpen}
                color="#32355d"
                rounded
              />
            </IconButton>
            <AnimatePresence>
              {isOpen && (
                <Box
                  sx={{
                    position: "absolute",
                    right: 0,
                    top: "80px",
                    width: "35%",
                    bgcolor: "#D7F5FA",
                    borderRadius: 22,
                    padding: 8,
                  }}
                  ref={ref}
                  component={motion.div}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <IconButton
                    edge="end"
                    color="inherit"
                    sx={{
                      position: "absolute",
                      top: 0,
                      right: "52px",
                    }}
                  >
                    <Hamburger
                      toggled={isOpen}
                      toggle={setOpen}
                      color="#32355d"
                      rounded
                    />
                  </IconButton>
                  <List
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      // paddingLeft: 10
                    }}
                  >
                    <Typography variant="h5">
                      <Link
                        to={"/"}
                        onClick={() => setOpen((prev) => !prev)}
                        className="header-link"
                      >
                        Pocetna
                      </Link>
                    </Typography>
                    <Typography variant="h5">
                      <Link
                        to={"/o-nama"}
                        onClick={() => setOpen((prev) => !prev)}
                        className="header-link"
                      >
                        O nama
                      </Link>
                    </Typography>
                    <Typography variant="h5">
                      <Link
                        to={"/rodjendaonica"}
                        onClick={() => setOpen((prev) => !prev)}
                        className="header-link"
                      >
                        Rodjendaonica
                      </Link>
                    </Typography>

                    <Typography variant="h5">
                      <Link
                        to={"/igraonica"}
                        onClick={() => setOpen((prev) => !prev)}
                        className="header-link"
                      >
                        Igraonica
                      </Link>
                    </Typography>

                    <Typography variant="h5">
                      <Link
                        to={"/kontakt"}
                        onClick={() => setOpen((prev) => !prev)}
                        className="header-link"
                      >
                        Kontakt
                      </Link>
                    </Typography>
                  </List>
                </Box>
              )}
            </AnimatePresence>
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
