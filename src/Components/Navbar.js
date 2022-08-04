import React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Towel from "./Towel";
import Make from "./Make";
import Story from "./Story";
import Contact from "./Contact";
import Products from "./Products";
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

function Navbar() {
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
              label="The towel"
              {...a11yProps(0)}
              style={{fontWeight: "bold",fontSize:'13px'}}
            />
            <Tab
              label="How We Make"
              {...a11yProps(1)}
              style={{fontWeight: "bold",fontSize:'13px'}}
            />
            <Tab
              label="Products"
              {...a11yProps(2)}
              style={{fontWeight: "bold",fontSize:'13px'}}
            />
            <Tab
              label="About Us"
              {...a11yProps(3)}
              style={{fontWeight: "bold",fontSize:'13px'}}
            />
            <Tab
              label="Contact"
              {...a11yProps(4)}
              style={{fontWeight: "bold",fontSize:'13px'}}
            />
          </Tabs>
          </div>
        <TabPanel value={value} index={0}>
        <Towel />
        </TabPanel>
        <TabPanel value={value} index={1}>
        <Make />
        </TabPanel>
        <TabPanel value={value} index={2}>
        <Products />

        </TabPanel>
        <TabPanel value={value} index={3}>
        <Story />
        </TabPanel>
        <TabPanel value={value} index={4}>
        <Contact />
        </TabPanel>
      </Box>
    </>
  );
}

export default Navbar;

