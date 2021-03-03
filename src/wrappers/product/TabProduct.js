import PropTypes from "prop-types";
import React from "react";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import SectionTitle from "../../components/section-title/SectionTitle";
import ProductGrid from "./ProductGrid";
import AllProducts from "../../pages/other/AllProducts";
import AllCategories from "../../pages/other/AllCategories";

const TabProduct = ({
  spaceTopClass,
  spaceBottomClass,
  bgColorClass,
  category,
}) => {
  return (
    <div
      className={`product-area ${spaceTopClass ? spaceTopClass : ""} ${
        spaceBottomClass ? spaceBottomClass : ""
      } ${bgColorClass ? bgColorClass : ""}`}
    >
      <div className='container'>
        <SectionTitle titleText='WHAT WE OFFER!' positionClass='text-center' />
        <Tab.Container defaultActiveKey='bestSeller'>
          <Nav
            variant='pills'
            className='product-tab-list pt-30 pb-55 text-center'
          >
            <Nav.Item>
              <Nav.Link eventKey='bestSeller'>
                <h4>Categories</h4>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey='newArrival'>
                <h4>Products</h4>
              </Nav.Link>
            </Nav.Item>
          </Nav>
          <Tab.Content>
            <Tab.Pane eventKey='bestSeller'>
              <AllCategories />
            </Tab.Pane>
            <Tab.Pane eventKey='newArrival'>
              <AllProducts />
            </Tab.Pane>
          </Tab.Content>
        </Tab.Container>
      </div>
    </div>
  );
};

TabProduct.propTypes = {
  bgColorClass: PropTypes.string,
  category: PropTypes.string,
  spaceBottomClass: PropTypes.string,
  spaceTopClass: PropTypes.string,
};

export default TabProduct;
