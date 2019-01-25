import React from "react";

const Footer = () => {
  const dt = new Date();
  return <footer id="main-footer">Copyright &copy; {dt.getFullYear()}</footer>;
};

export default Footer;
