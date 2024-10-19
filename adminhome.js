import React from "react";
import { useNavigate } from "react-router-dom";
import '../styles/adminhome.css'
 
import {
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";
 
const AdminHomePage = () => {
  const navigate = useNavigate();
 
  const handleAddRestaurant = () => {
    navigate("/add-restaurant");
  };
 
  const handleDisplayRestaurants = () => {
    navigate("/display-restaurants");
  };
 
  const handleAddUser = () => {
    navigate("/add-user");
  };
 
  const handleDisplayUsers = () => {
    navigate("/display-users");
  };
 
  return (
    <>
      <nav className="navbar navbar-light bg">
        <span className="navbar-brand font">Cibo App</span>
      </nav>
      <MDBContainer className="containers mt-5">
        <MDBCard className="cardbody">
          <MDBCardBody className="MDBCardBody">
            <MDBCardTitle className="MDBCardTitle text-center">Admin Dashboard</MDBCardTitle>
         
            <MDBRow className="MDBRow mt-4">
              <MDBCol md="6" className="mb-3">
                <button className="btn btn-warning" onClick={handleAddRestaurant} block>
                  Add Restaurant
                </button>
              </MDBCol>
              <MDBCol md="6" className="mb-3">
                <button className="btn btn-warning" onClick={handleDisplayRestaurants} block>
                  List of Restaurants
                </button>
              </MDBCol>
              <MDBCol md="6" className="mb-3">
                <button className="btn btn-warning" onClick={handleAddUser} block>
                  Add User
                </button>
              </MDBCol>
              <MDBCol md="6" className="mb-3">
                <button className="btn btn-warning" onClick={handleDisplayUsers} block>
                  List of Users
                </button>
              </MDBCol>
              <MDBCol md="6" className="mb-3">
                <button className="btn btn-warning" onClick={handleAddUser} block>
                  List of Orders
                </button>
              </MDBCol>
              <MDBCol md="6" className="mb-3">
                <button className="btn btn-warning" onClick={handleDisplayUsers} block>
                  Manage Reviews
                </button>
              </MDBCol>
            </MDBRow>
          </MDBCardBody>
        </MDBCard>
      </MDBContainer>
    </>
  );
};
 
export default AdminHomePage;
 