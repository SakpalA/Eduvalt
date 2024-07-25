import React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Accordian from './Accordian';
import ShowMoreLess from './ShowMoreLess';
import Review from './Review';
import { useParams } from 'react-router-dom';
import all_course from '../Assets/all_courses';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTab() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const {course_title} = useParams();
  const course = all_course.find(course => course.title === course_title);

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Course Info" {...a11yProps(0)} style={{fontWeight:"600"}}/>
          <Tab label="Curriculam" {...a11yProps(1)} style={{fontWeight:"600"}}/>
          <Tab label="Reviews" {...a11yProps(2)} style={{fontWeight:"600"}}/>
          <Tab label="Announcements" {...a11yProps(3)} style={{fontWeight:"600"}}/>
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <ShowMoreLess />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <Accordian />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <Review 
        no_rating={course.no_rating}
        star_rating={course.star_rating}/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        <h2 style={{color: '#39557e'}}>NO data available in this section</h2>
      </CustomTabPanel>
    </Box>
  );
}
