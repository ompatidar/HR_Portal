import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../../../Employee/components/Sidebar/Sidebar.css"
import IconMapper from "../../../components/IconMapper/IconMapper";
const Sidebar = ({ isOpen, toggleSidebar }) => {
  const location = useLocation();
  const [activeItem, setActiveItem] = useState(location.pathname);
  const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 1000);
  useEffect(() => {
    const handleResize = () => setIsMobileView(window.innerWidth <= 1000);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleItemClick = (path) => {
    setActiveItem(path);
    if (isMobileView) {
      toggleSidebar();
    }
  };


  return (
    <>
      {isMobileView ? (
        <div className={`sidebar-popup ${isOpen ? "open" : ""}`}>
          <div className="sidebar-content">
            <div className="sidebar-header">
              <div className="popup-sidebar1">
                <div onClick={toggleSidebar} className="toggleMenu">
                  <img src="/assets/logo/hirefleX247.com-dark.png" alt="Logo" />
                </div>
                <div className="close-icon-sidebar" onClick={toggleSidebar}>
                  <IconMapper iconName="close" isFontAwesome={true} />
                </div>
              </div>
              <hr />
              <div className="slider2">
                <li
                  className={`list-item ${
                    activeItem === "/admin/dashboard" ? "active" : ""
                  }`}
                  onClick={() => handleItemClick("/admin/dashboard")}
                >
                  <Link to="/admin/dashboard" className="list-item">
                    <IconMapper className="ImageIcons" iconName="ePayslips" />
                    {isOpen && (
                      <span className="list-item-text"> Dashboard</span>
                    )}
                  </Link>
                </li>
                <li
                  className={`list-item ${
                    activeItem === "/documents" ? "active" : ""
                  }`}
                  onClick={() => handleItemClick("/documents")}
                >
                  <Link to="/documents" className="list-item">
                    <IconMapper className="ImageIcons" iconName="MyDocuments" />
                    {isOpen && (
                      <span className="list-item-text"> My Documents</span>
                    )}
                  </Link>
                </li>

                <li
                  className={`list-item ${
                    activeItem === "/admin/payslip" ? "active" : ""
                  }`}
                  onClick={() => handleItemClick("/admin/payslip")}
                >
                  <Link to="/admin/payslip" className="list-item">
                    <IconMapper className="ImageIcons" iconName="MyDocuments" />
                    {isOpen && <span className="list-item-text"> Payslip</span>}
                  </Link>
                </li>
                <li
                  className={`list-item ${
                    activeItem === "/admin/adminpaydata" ? "active" : ""
                  }`}
                  onClick={() => handleItemClick("/perks")}
                >
                  <Link to="/admin/adminpaydata" className="list-item">
                    <IconMapper className="ImageIcons" iconName="Perks" />
                    {isOpen && (
                      <span className="list-item-text"> AdminPayData</span>
                    )}
                  </Link>
                </li>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="sidebar" style={{ width: isOpen ? "270px" : "68px" }}>
          <div className="sidebar-header">
            <div className="slider1">
              <div onClick={toggleSidebar} className="toggleMenu">
                <li className="list-items">
                  <IconMapper
                    className="ImageIcon"
                    iconName="bars"
                    isFontAwesome={true}
                  />
                  {isOpen && (
                    <img
                      className="LogoImage"
                      src="/assets/logo/hirefleX247.com-dark.png"
                      alt="Logo"
                    />
                  )}
                </li>
              </div>
            </div>
            <div className="slider2">
              <li
                className={`list-item ${
                  activeItem === "/admin/dashboard" ? "active" : ""
                }`}
                onClick={() => handleItemClick("/admin/dashboard")}
              >
                <Link to="/admin/dashboard" className="list-item">
                  <IconMapper className="ImageIcons" iconName="ePayslips" />
                  {isOpen && <span className="list-item-text"> Dashboard</span>}
                </Link>
              </li>
              <li
                className={`list-item ${
                  activeItem === "/admin/payslip" ? "active" : ""
                }`}
                onClick={() => handleItemClick("/admin/payslip")}
              >
                <Link to="/admin/payslip" className="list-item">
                  <IconMapper className="ImageIcons" iconName="MyDocuments" />
                  {isOpen && <span className="list-item-text"> Payslip</span>}
                </Link>
              </li>
              <li
                className={`list-item ${
                  activeItem === "/admin/adminpaydata" ? "active" : ""
                }`}
                onClick={() => handleItemClick("/perks")}
              >
                <Link to="/admin/adminpaydata" className="list-item">
                  <IconMapper className="ImageIcons" iconName="Perks" />
                  {isOpen && (
                    <span className="list-item-text"> AdminPayData</span>
                  )}
                </Link>
              </li>

              {/* <li
                className={`list-item ${
                  activeItem === "/account" ? "active" : ""
                }`}
                onClick={() => handleItemClick("/account")}
              >
                <Link to="/account" className="list-item">
                  <IconMapper
                    className="ImageIcons"
                    iconName="LogoMini"
                  />
                  {isOpen && (
                    <span className="list-item-text">Account</span>
                  )}
                </Link>
              </li>
              <li
                className={`list-item ${
                  activeItem === "/logout" ? "active" : ""
                }`}
                onClick={() => handleItemClick("/logout")}
              >
                <Link to="/logout" className="list-item">
                  <IconMapper
                    className="ImageIcons"
                    iconName="Logout"
                  />
                  {isOpen && (
                    <span className="list-item-text">Logout</span>
                  )}
                </Link>
              </li> */}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Sidebar;
