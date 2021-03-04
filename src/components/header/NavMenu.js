import PropTypes from "prop-types";
import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listCategories } from "../../redux/actions/categoriesActions";
import { listSubCategories } from "../../redux/actions/subCategoriesActions";
import { Link } from "react-router-dom";
import { multilanguage } from "redux-multilanguage";
import axios from "axios";

const NavMenu = ({ strings, menuWhiteClass, sidebarMenu }) => {
  const categoryList = useSelector((state) => state.categoryList);
  const { categories, error } = categoryList;
  const subCategoryList = useSelector((state) => state.subCategoryList);
  const { subCategories } = subCategoryList;
  const dispatch = useDispatch();

  const [show, showSub] = useState([]);
  const [click, setClick] = useState(false);
  const [cat, setCat] = useState(null);

  useEffect(() => {
    dispatch(listCategories());
    dispatch(listSubCategories());
  }, []);

  const handleClick = async (id) => {
    setCat(id);
    axios
      .get(`https://www.api.oliveagro.org/api/subCategory/category/${id}`)
      .then((response) => {
        const res = response.data.subCategory;
        console.log(res);
        showSub(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const linkClick = (id) => {
    console.log("testing", id);
  };

  // const handleRemove = () => {
  //   setClick(!click);
  //   console.log("working");
  // };

  return (
    <div
      className={` ${
        sidebarMenu
          ? "sidebar-menu"
          : `main-menu ${menuWhiteClass ? menuWhiteClass : ""}`
      } `}
    >
      <nav>
        <ul>
          <li>
            <Link to={process.env.PUBLIC_URL + "/"}>{strings["home"]}</Link>
          </li>
          <li>
            <Link to={process.env.PUBLIC_URL + "/"}>
              {" "}
              {strings["shop"]}
              {sidebarMenu ? (
                <span>
                  <i className='fa fa-angle-right'></i>
                </span>
              ) : (
                <i className='fa fa-angle-down' />
              )}
            </Link>
            <ul className='mega-menu'>
              {categories.map((category, id) => {
                return (
                  <div key={id}>
                    <li
                      className='request-info-action'
                      onMouseEnter={() => handleClick(category._id)}
                      // onMouseLeave={handleRemove}
                    >
                      {category.name}
                    </li>
                    {category._id === cat && (
                      <>
                        {show.map((sub, id) => {
                          return (
                            <div key={id}>
                              <Link to='/from-cat' className=''>
                              {sub.name}
                                <p
                                  // key={id}
                                  className='subCat'
                                  // onClick={() => linkClick(sub.category_id)}
                                >
                                  {sub.name}
                                </p>
                              </Link>
                            </div>
                          );
                        })}
                      </>
                    )}
                  </div>
                );
              })}
            </ul>
          </li>

          <li>
            <Link to={process.env.PUBLIC_URL + "/contact"}>
              {strings["contact_us"]}
            </Link>
          </li>
          <li>
            <Link to={process.env.PUBLIC_URL + "/vendor-register"}>
              Register as a Vendor
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

NavMenu.propTypes = {
  menuWhiteClass: PropTypes.string,
  sidebarMenu: PropTypes.bool,
  strings: PropTypes.object,
};

export default multilanguage(NavMenu);
