/*import React from "react";
import {
Box,
Container,
Row,
Column,
FooterLink,
Heading,
} from "./footer_styles";

const Footer = () => {
return (
	<Box>
	<h1 style={{ color: "green",
				textAlign: "center",
				marginTop: "-50px" }}>
		Heading
	</h1>
	<Container>
		<Row>
		<Column>
			<Heading>About Us</Heading>
			<FooterLink href="#">Aim</FooterLink>
			<FooterLink href="#">Vision</FooterLink>
			<FooterLink href="#">Testimonials</FooterLink>
		</Column>
		<Column>
			<Heading>Services</Heading>
			<FooterLink href="#">Writing</FooterLink>
			<FooterLink href="#">Internships</FooterLink>
			<FooterLink href="#">Coding</FooterLink>
			<FooterLink href="#">Teaching</FooterLink>
		</Column>
		<Column>
			<Heading>Contact Us</Heading>
			<FooterLink href="#">Uttar Pradesh</FooterLink>
			<FooterLink href="#">Ahemdabad</FooterLink>
			<FooterLink href="#">Indore</FooterLink>
			<FooterLink href="#">Mumbai</FooterLink>
		</Column>
		<Column>
			<Heading>Social Media</Heading>
			<FooterLink href="#">
			<i className="fab fa-facebook-f">
				<span style={{ marginLeft: "10px" }}>
				Facebook
				</span>
			</i>
			</FooterLink>
			<FooterLink href="#">
			<i className="fab fa-instagram">
				<span style={{ marginLeft: "10px" }}>
				Instagram
				</span>
			</i>
			</FooterLink>
			<FooterLink href="#">
			<i className="fab fa-twitter">
				<span style={{ marginLeft: "10px" }}>
				Twitter
				</span>
			</i>
			</FooterLink>
			<FooterLink href="#">
			<i className="fab fa-youtube">
				<span style={{ marginLeft: "10px" }}>
				Youtube
				</span>
			</i>
			</FooterLink>
		</Column>
		</Row>
	</Container>
	</Box>
);
};
export default Footer;
*/

import React from 'react';
import { CDBFooter, CDBFooterLink, CDBBtn, CDBIcon, CDBContainer,CDBBox } from 'cdbreact';

export const Footer = () => {
  return (
    <footer style={{backgroundColor:"#1D2A4D"}}>
    <CDBFooter className="shadow">
      <CDBBox display="flex" flex="column" className="mx-auto py-5" style={{ width: '90%' }}>
        <CDBBox display="flex" justifyContent="between" className="flex-wrap">
          <CDBBox>
            <a href="/" className="d-flex align-items-center p-0 text-dark">
              <img alt="logo" src="https://cdn5.vectorstock.com/i/1000x1000/75/74/health-care-logo-vector-12607574.jpg" width="30px" />
              <span className="ml-3 h5 font-weight-bold" style ={{color:"#13C5DD"}}>GET IN TOUCH</span>
            </a>
            <p className="my-3" style={{ color:"#EFF5F9",width: '250px',fontStyle:"bold"}}>
              We are creating High Quality Resources and tools to Aid developers during the
              developement of their projects
            </p>
          </CDBBox>
          <CDBBox>
            <p className="h5 mb-4" style={{ fontWeight: '600' ,color:"#13C5DD" }}>
              Quick Links
            </p>
            <CDBBox flex="column" display="flex" style={{ cursor: 'pointer', padding: '0'}}>

              <CDBFooterLink href="https://www.fortishealthcare.com/publications/hospitals" ><span style={{color:"white"}}>Resources</span></CDBFooterLink>
              <CDBFooterLink href="../../pages/about" ><span style={{color:"white"}}>About Us</span></CDBFooterLink>
              <CDBFooterLink href="../../pages/contact"><span style={{color:"white"}}>Contact</span></CDBFooterLink>
              <CDBFooterLink href="/https://thehealthcareblog.com/"><span style={{color:"white"}}>Blog</span></CDBFooterLink>
            </CDBBox>
          </CDBBox>
          <CDBBox>
            <p className="h5 mb-4" style={{ fontWeight: '600', color:"#13C5DD" }}>
              Help
            </p>
            <CDBBox display="flex" flex="column" style={{ cursor: 'pointer', padding: '0',color:"#EFF5F9" }}>
              <CDBFooterLink href="/"><span style={{color:"white"}}>Support</span></CDBFooterLink>
              <CDBFooterLink href="/"><span style={{color:"white"}}>Sign up</span></CDBFooterLink>
              <CDBFooterLink href="/"><span style={{color:"white"}}>Sign in</span></CDBFooterLink>
            </CDBBox>
          </CDBBox>
          <CDBBox>
            <p className="h5 mb-4" style={{ fontWeight: '600', color:"#13C5DD" }}>
              Products
            </p>
            <CDBBox display="flex" flex="column" style={{ cursor: 'pointer', padding: '0',color:"#EFF5F9" }}>
              <CDBFooterLink href="/https://www.apollopharmacy.in/"><span style={{color:"white"}}>Apollo Pharmacy</span></CDBFooterLink>
              <CDBFooterLink href="/https://www.cvshealth.com/"><span style={{color:"white"}}>cvs health</span></CDBFooterLink>
              <CDBFooterLink href="/https://asterpharmacy.in/"><span style={{color:"white"}}>Aster Pharmacy</span></CDBFooterLink>
            </CDBBox>
          </CDBBox>
        </CDBBox>
        <CDBBox
          display="flex"
          justifyContent="center"
          style={{ width: '100%' }}
          className="mx-auto mt-4"
        >
          <CDBBtn flat color="dark" className="p-2" >
            <CDBIcon fab icon="facebook-f" />
          </CDBBtn>
          <CDBBtn flat color="dark" className="mx-3 p-2" >
            <CDBIcon fab icon="twitter" />
          </CDBBtn>
          <CDBBtn flat color="dark" className="p-2">
            <CDBIcon fab icon="instagram" />
          </CDBBtn>
        </CDBBox>
        <small className="text-center mt-5" style={{color:"#EFF5F9"}}>&copy; Copyrights Smart Health Care, 2022. All rights reserved.</small>
      </CDBBox>
    </CDBFooter>
    </footer>
  );
};
export default Footer;