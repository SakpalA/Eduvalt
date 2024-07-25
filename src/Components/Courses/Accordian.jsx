import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { FaYoutube } from "react-icons/fa";
import { CiLock } from "react-icons/ci";

const Accordian = () => {
    return (
        <div>
            <Accordion defaultExpanded>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon style={{ color: "#1363df" }} />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                    style={{ color: "#1363df", backgroundColor: "#eff1f6" }}
                >
                    <Typography style={{fontWeight: "600"}}>Advance Concepts</Typography>
                </AccordionSummary>
                <AccordionDetails style={{padding: "8px 16px 8px"}}>
                    <Typography>
                        <ul className='accod-ul'>
                            <li>
                                <div className="accod-text"><span><FaYoutube className='yt-icon'/></span> <span className='accod-ans'>Lorem ipsum dolor sit amet.</span></div>
                                <div className="accod-text"><span>07:00</span> <span><CiLock className='lock-icon'/></span></div>
                            </li>
                            <li>
                            <div className="accod-text"><span><FaYoutube className='yt-icon'/></span> <span className='accod-ans'>Lorem ipsum dolor sit amet.</span></div>
                                <div className="accod-text"><span>07:00</span> <span><CiLock className='lock-icon'/></span></div>
                            </li>
                            <li>
                            <div className="accod-text"><span><FaYoutube className='yt-icon'/></span> <span className='accod-ans'>Lorem ipsum dolor sit amet.</span></div>
                                <div className="accod-text"><span>07:00</span> <span><CiLock className='lock-icon'/></span></div>
                            </li>
                        </ul>
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon style={{ color: "#1363df" }} />}
                    aria-controls="panel2-content"
                    id="panel2-header"
                    style={{ color: "#1363df", backgroundColor: "#eff1f6" }}
                >
                    <Typography style={{fontWeight: "600"}}>Basic Concepts</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                    <ul className='accod-ul'>
                            <li>
                                <div className="accod-text"><span><FaYoutube className='yt-icon'/></span> <span className='accod-ans'>Lorem ipsum dolor sit amet.</span></div>
                                <div className="accod-text"><span>07:00</span> <span><CiLock className='lock-icon'/></span></div>
                            </li>
                            <li>
                            <div className="accod-text"><span><FaYoutube className='yt-icon'/></span> <span className='accod-ans'>Lorem ipsum dolor sit amet.</span></div>
                                <div className="accod-text"><span>07:00</span> <span><CiLock className='lock-icon'/></span></div>
                            </li>
                            <li>
                            <div className="accod-text"><span><FaYoutube className='yt-icon'/></span> <span className='accod-ans'>Lorem ipsum dolor sit amet.</span></div>
                                <div className="accod-text"><span>07:00</span> <span><CiLock className='lock-icon'/></span></div>
                            </li>
                        </ul>
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    )
}

export default Accordian;