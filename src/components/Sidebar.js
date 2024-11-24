import React, { useState } from 'react';
import { motion } from 'framer-motion';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import CodeIcon from '@mui/icons-material/Code';
import EmailIcon from '@mui/icons-material/Email';

const SidebarItem = ({ icon, name, isOpen }) => {
  return (
    <motion.div className='sidebar-item'
      whileHover={{
        backgroundColor: "rgba(255, 255, 255, 0.1)",
        backdropFilter: "blur(3.5px)",
        cursor: 'pointer'
      }}
      transition={{
        type: 'none',
        duration: 0.1
      }}
    >
      <motion.div className='sidebar-icon'>
        {icon}
      </motion.div>
      {isOpen && (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
        >
          {name}
        </motion.span>
      )}
    </motion.div>
  );
};

export const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const sidebarVariants = {
    open: {
      width: "15rem",
      transition: {
        duration: 0.3
      }
    },
    closed: {
      width: "4rem",
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <motion.div 
      className="sidebar-container"
      initial="closed"
      animate={isOpen ? "open" : "closed"}
      variants={sidebarVariants}
    >
      <motion.div className="sidebar">
        <motion.div
          className="toggle-button"
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            scale: 1.1
          }}
        >
          <MenuIcon />
        </motion.div>

        <div className="sidebar-content">
          <div className="sidebar-section">
            <SidebarItem icon={<HomeIcon />} name="Home" isOpen={isOpen} />
            <SidebarItem icon={<PersonIcon />} name="About" isOpen={isOpen} />
            <SidebarItem icon={<CodeIcon />} name="Projects" isOpen={isOpen} />
            <SidebarItem icon={<EmailIcon />} name="Contact" isOpen={isOpen} />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};