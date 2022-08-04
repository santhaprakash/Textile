import React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Signup from "../Components/Signup";
import Login from "../Components/Login";
function TabPanel(props) {
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

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function Useauthnav() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <Box>
      <div style={{display: 'flex',flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
          <Tabs
            value={value}
            onChange={handleChange}
          >
            
            <Tab
              label="Sign Up"
              {...a11yProps(0)}
              style={{fontWeight: "bold",fontSize:'13px'}}
            />
            <Tab
              label="Login"
              {...a11yProps(1)}
              style={{fontWeight: "bold",fontSize:'13px'}}
            />
        
          </Tabs>
          </div>
        <TabPanel value={value} index={0}>
        <Signup />
        </TabPanel>
        <TabPanel value={value} index={1}>
        <Login />
        </TabPanel>
     
      </Box>
    </>
  );
}

export default Useauthnav;

