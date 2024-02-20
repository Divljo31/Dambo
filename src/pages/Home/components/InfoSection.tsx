import house from '../../../assets/house.png'
import cake from '../../../assets/cake.png'
import baloons from '../../../assets/baloons.png'
import BasicDateCalendar from './Calendar'
// import storyImg from '../assets/story.jpg';
// import checkImg from '../assets/greenCheck.png';
import { motion } from 'framer-motion'
import { Box, Typography } from '@mui/material'

const InfoSection = () => {
    return (
        <div className="info-section">
            <div className="info">
                <motion.div className="item" transition={{ ease: "easeOut" }} initial={{ x: -100, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }}>
                    <div className="circle"><img src={baloons} alt="info-icon" /></div>
                    <div className="info-text-wrapper">
                        <h2 className='info-heading'>Caffe bar</h2>
                        <p className='text'>Odvojen kutak u kome uživaju roditelji.</p>
                    </div>
                </motion.div>
                <motion.div className="item" transition={{ ease: "easeOut" }} initial={{ x: -100, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }}>
                    <div className="circle"><img src={house} alt="info-icon" /></div>
                    <div className="info-text-wrapper">
                        <h2 className='info-heading'>Čuvaonica</h2>
                        <p className='text'>Čuvaonica "Dambo" je mesto gde možete dovesti Vaše dete i biti uvereni da je u sigurnom, prijatnom i kreativnom okruženju...</p>
                    </div>
                </motion.div>
                <motion.div className="item" transition={{ ease: "easeOut" }} initial={{ x: -100, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }}>
                    <div className="circle"><img src={cake} alt="info-icon" /></div>
                    <div className="info-text-wrapper">
                        <h2 className='info-heading'>Rođendaonica</h2>
                        <p className='text'>Ukoliko Vi i Vaše dete želite kreativnu i nesvakidašnju proslavu rođendana, "Dambo" je pravo mesto za vas...</p>
                    </div>
                </motion.div>
            </div>
            <div className="time-wrapper">
                <Box className='worktime-div' sx={{ display: "flex", flexDirection: "column", padding: 5, gap: 6 }}>
                    <Typography
                        component="h3"
                        variant='h3'
                        textAlign="center"
                    >
                        RADNO VREME
                    </Typography>
                    <Box component="div" sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                        <Typography
                            component="h4"
                            variant="h4"
                            fontWeight="600"
                        >
                            PON - PET   
                        </Typography>
                        <Typography
                            component="h4"
                            variant="h4"
                            fontWeight="600"
                        >
                            12:00 - 20:00
                        </Typography>

                    </Box>
                    <Box component="div" sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                        <Typography
                            component="h4"
                            variant="h4"
                            fontWeight="600"
                        >
                            VIKENDOM     
                        </Typography>
                        <Typography
                            component="h4"
                            variant="h4"
                            fontWeight="600"
                        >
                            10:00 - 21:00
                        </Typography>

                    </Box>


                    {/* <h3 className='table-h3'>Radno vreme</h3>
                        <table className='tabela-radno-vreme'>
                            <thead>
                                <tr>
                                    <th>Dan</th>
                                    <th>Pocetak</th>
                                    <th>Kraj</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Ponedeljak</td>
                                    <td>9:00 </td>
                                    <td>5:00 </td>
                                </tr>
                                <tr>
                                    <td>Utorak</td>
                                    <td>9:00 </td>
                                    <td>5:00 </td>
                                </tr>
                                <tr>
                                    <td>Sreda</td>
                                    <td>9:00</td>
                                    <td>5:00</td>
                                </tr>
                                <tr>
                                    <td>Cetvrtak</td>
                                    <td>9:00 </td>
                                    <td>5:00 </td>
                                </tr>
                                <tr>
                                    <td>Petak</td>
                                    <td>9:00 </td>
                                    <td>5:00 </td>
                                </tr>
                                <tr>
                                    <td>Subota</td>
                                    <td>9:00 </td>
                                    <td>5:00 </td>
                                </tr>
                                <tr>
                                    <td>Nedelja</td>
                                    <td>9:00 </td>
                                    <td>5:00 </td>
                                </tr>
                            </tbody>
                        </table> */}
                </Box>
                <div className="calendar-div">
                    <BasicDateCalendar />
                </div>
            </div>
        </div>
    )
}

export default InfoSection