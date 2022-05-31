import { Input } from "antd";
import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { layDanhSachCongViecAction } from "../../redux/actions/QuanLyCongViecAction";
import "./JobList.scss"


export default function JobList(props) {

  // Mảng Api
  const {danhSachCongViec} = useSelector(state => state.QuanLyCongViecReducer )
  
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(layDanhSachCongViecAction());
  }, []);

  let arrsp = [
    {
      subTypeJobs: [
        {
          deleteAt: false,
          _id: "61987691aef344001cecfd45",
          name: "Databases",
          status: true,
          typeJob: "6198768aaef344001cecfd43",
          __v: 0,
          image:
            "https://fiverr.cybersoft.edu.vn/public/images/job/1637387001989_create-airtable-automations-and-scripts.jpg",
        },
        {
          deleteAt: false,
          _id: "61987694aef344001cecfd49",
          name: "Data Analytics",
          status: true,
          typeJob: "6198768aaef344001cecfd43",
          __v: 0,
          image:
            "https://fiverr.cybersoft.edu.vn/public/images/job/1638186373182_47f752a085bb1d57bcbb2b74c589c8c27f4c28c2.jpg",
        },
        {
          deleteAt: false,
          _id: "61987697aef344001cecfd4d",
          name: "Data Processing",
          status: true,
          typeJob: "6198768aaef344001cecfd43",
          __v: 0,
          image:
            "https://fiverr.cybersoft.edu.vn/public/images/job/1638118254111_create-a-professional-excel-dashboard-macro-pivot.png",
        },
        {
          deleteAt: false,
          _id: "6198769caef344001cecfd51",
          name: "Data Visualization",
          status: true,
          typeJob: "6198768aaef344001cecfd43",
          __v: 0,
          image:
            "https://fiverr-res.cloudinary.com/image/upload/w_860/f_auto,q_auto/v1/attachments/generic_asset/asset/de489cb22421aef893ae23f70d599567-1622646144088/Data%20science-min.jpg",
        },
        {
          deleteAt: false,
          _id: "6198769faef344001cecfd55",
          name: "Data Engineering",
          status: true,
          typeJob: "6198768aaef344001cecfd43",
          __v: 0,
          image:
            "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/5b8960356ae63e5e0776e2f97962408f-1638182899333/databases-min.jpg",
        },
        {
          deleteAt: false,
          _id: "619876a2aef344001cecfd59",
          name: "Data Science",
          status: true,
          typeJob: "6198768aaef344001cecfd43",
          __v: 0,
          image:
            "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/0d18fa7474aa6879fec69b5feb82b26d-1638375322579/data%20visualization-min.jpg",
        },
        {
          deleteAt: false,
          _id: "619876a6aef344001cecfd5d",
          name: "Data Entry",
          status: true,
          typeJob: "6198768aaef344001cecfd43",
          __v: 0,
          image:
            "https://fiverr-res.cloudinary.com/t_gig_cards_web_x2,q_auto,f_auto/gigs3/115549223/original/7047c44de62d4ae3d9cf67a0582dc706c2797321.png",
        },
        {
          deleteAt: false,
          _id: "619876a8aef344001cecfd61",
          name: "Other",
          status: true,
          typeJob: "6198768aaef344001cecfd43",
          __v: 0,
          image:
            "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/232340559/original/6fe7b8212f5589c29a7e228670cc201784760efc/do-urgent-essay-writting-research-summary-paper-and-article.png",
        },
        {
          deleteAt: false,
          _id: "61989f68aef344001ced0772",
          name: "Edit Video",
          status: true,
          typeJob: "60b89c750e92cd4a38ae74fc",
          __v: 0,
          image:
            "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/217659283/original/58886ccb4dfa9c8476c5a83c4e2bd45d77fcf2f1/download-anything-from-internet.jpg",
        },
        {
          deleteAt: false,
          _id: "620627f5327461001d2ce6e6",
          name: "DataBase",
          status: true,
          typeJob: "6198768aaef344001cecfd43",
          __v: 0,
        },
        {
          deleteAt: false,
          _id: "62062803327461001d2ce6ea",
          name: "Data Víualization",
          status: true,
          typeJob: "6198768aaef344001cecfd43",
          __v: 0,
        },
        {
          deleteAt: false,
          _id: "62062835327461001d2ce6f0",
          name: "Data Visualization",
          status: true,
          typeJob: "6198768aaef344001cecfd43",
          __v: 0,
        },
        {
          deleteAt: false,
          _id: "6206283a327461001d2ce6f4",
          name: "Miscellaneous",
          status: true,
          typeJob: "6198768aaef344001cecfd43",
          __v: 0,
        },
        {
          deleteAt: false,
          _id: "62062854327461001d2ce6f8",
          name: "Data Collection",
          status: true,
          typeJob: "6198768aaef344001cecfd43",
          __v: 0,
        },
      ],
      deleteAt: false,
      _id: "6198768aaef344001cecfd43",
      name: "Data",
      status: true,
      __v: 14,
    },
    {
      subTypeJobs: [
        {
          deleteAt: false,
          _id: "619876b6aef344001cecfd67",
          name: "Virtual Assistant",
          status: true,
          typeJob: "619876b0aef344001cecfd65",
          __v: 0,
          image:
            "https://fiverr.cybersoft.edu.vn/public/images/job/1637385575408_desktop_business_virtual_assistant_2.jpg",
        },
        {
          deleteAt: false,
          _id: "619876b9aef344001cecfd6b",
          name: "E-Commerce Management",
          status: true,
          typeJob: "619876b0aef344001cecfd65",
          __v: 0,
          image:
            "https://fiverr.cybersoft.edu.vn/public/images/job/1638182921227_5adf388545949f33ac7a9a56d9ae6256b5895688.jpg",
        },
        {
          deleteAt: false,
          _id: "619876bcaef344001cecfd6f",
          name: "Market Research",
          status: true,
          typeJob: "619876b0aef344001cecfd65",
          __v: 0,
          image:
            "https://fiverr.cybersoft.edu.vn/public/images/job/1637385791762_any-web-research-and-data-analyzing.jpg",
        },
        {
          deleteAt: false,
          _id: "619876bfaef344001cecfd73",
          name: "Business Plans",
          status: true,
          typeJob: "619876b0aef344001cecfd65",
          __v: 0,
          image:
            "https://fiverr-res.cloudinary.com/f_auto,q_auto/v1/attachments/generic_asset/asset/da57cc8241eba51ba9918e343e8e9833-1637155993963/Event%20Management%20Category%20Image.png",
        },
        {
          deleteAt: false,
          _id: "619876c2aef344001cecfd77",
          name: "Legal Consulting",
          status: true,
          typeJob: "619876b0aef344001cecfd65",
          __v: 0,
          image:
            "https://fiverr-res.cloudinary.com/w_iw_div_3.0,f_auto,q_auto/v1/attachments/generic_asset/asset/7d6bf6919604c72b99a322f082050db8-1613649574055/Customer%20Care%20SC.png",
        },
        {
          deleteAt: false,
          _id: "619876c6aef344001cecfd7b",
          name: "Financial Consulting",
          status: true,
          typeJob: "619876b0aef344001cecfd65",
          __v: 0,
          image:
            "https://fiverr-res.cloudinary.com/w_iw_div_3.0,q_auto,f_auto/general_assets/categories/assets/f3/desktop_business_tips.png",
        },
        {
          deleteAt: false,
          _id: "619876caaef344001cecfd7f",
          name: "Sales",
          status: true,
          typeJob: "619876b0aef344001cecfd65",
          __v: 0,
          image:
            "https://fiverr-res.cloudinary.com/w_iw_div_3.0,f_auto,q_auto/v1/attachments/generic_asset/asset/90b0373da303ec7f9995861236f0118c-1605020876578/Supply%20Chain%20Management.png",
        },
        {
          deleteAt: false,
          _id: "619876cdaef344001cecfd83",
          name: "Customer Care",
          status: true,
          typeJob: "619876b0aef344001cecfd65",
          __v: 0,
          image:
            "https://fiverr-res.cloudinary.com/w_iw_div_3.0,q_auto,f_auto/general_assets/categories/assets/f3/desktop_business_flyer_distribution.jpg",
        },
        {
          deleteAt: false,
          _id: "619876d1aef344001cecfd87",
          name: "Business Consulting",
          status: true,
          typeJob: "619876b0aef344001cecfd65",
          __v: 0,
          image:
            "https://fiverr-res.cloudinary.com/image/upload/w_iw_div_3.0,q_auto,f_auto/v1/attachments/generic_asset/asset/81613989b758e35e9f2cfcb8c416bdea-1583673580912/Project%20Managment.jpg",
        },
        {
          deleteAt: false,
          _id: "619876d4aef344001cecfd8b",
          name: "HR Consulting",
          status: true,
          typeJob: "619876b0aef344001cecfd65",
          __v: 0,
        },
        {
          deleteAt: false,
          _id: "619876d8aef344001cecfd8f",
          name: "Presentations",
          status: true,
          typeJob: "619876b0aef344001cecfd65",
          __v: 0,
        },
        {
          deleteAt: false,
          _id: "619876dbaef344001cecfd93",
          name: "Supply Chain Management",
          status: true,
          typeJob: "619876b0aef344001cecfd65",
          __v: 0,
        },
        {
          deleteAt: false,
          _id: "619876e0aef344001cecfd97",
          name: "Game Concept Design",
          status: true,
          typeJob: "619876b0aef344001cecfd65",
          __v: 0,
        },
        {
          deleteAt: false,
          _id: "619876e5aef344001cecfd9b",
          name: "Career Counseling",
          status: true,
          typeJob: "619876b0aef344001cecfd65",
          __v: 0,
        },
        {
          deleteAt: false,
          _id: "619876e9aef344001cecfd9f",
          name: "Project Management",
          status: true,
          typeJob: "619876b0aef344001cecfd65",
          __v: 0,
        },
        {
          deleteAt: false,
          _id: "619876edaef344001cecfda3",
          name: "Flyer Distribution",
          status: true,
          typeJob: "619876b0aef344001cecfd65",
          __v: 0,
        },
        {
          deleteAt: false,
          _id: "619876f0aef344001cecfda7",
          name: "Other",
          status: true,
          typeJob: "619876b0aef344001cecfd65",
          __v: 0,
        },
        {
          deleteAt: false,
          _id: "6198a357aef344001ced0829",
          name: "Check Add Sub Job",
          status: false,
          typeJob: "619876b0aef344001cecfd65",
          __v: 0,
        },
        {
          deleteAt: false,
          _id: "61f3a11a725f6e001d91461f",
          name: "Back End ExpressJS",
          status: true,
          typeJob: "619876b0aef344001cecfd65",
          __v: 0,
        },
      ],
      deleteAt: false,
      _id: "619876b0aef344001cecfd65",
      name: "Business",
      status: true,
      __v: 20,
    },
  ];

  //demo api
  const arrsp2 = [
    {
      deleteAt: false,
      _id: "618d37c495d99f001c0c0c41",
      name: "Our Studio will design a unique modern logo and social media kit",
      rating: 5,
      price: 600,
      proServices: true,
      localSellers: true,
      onlineSellers: false,
      deliveryTime: false,
      type: null,
      subType: {
        deleteAt: false,
        _id: "618d245795d99f001c0c0aca",
        name: "Business Cards & Stationery",
        status: true,
        typeJob: "618c90ff95d99f001c0c047a",
        __v: 0,
      },
      status: true,
      userCreated: "618ce37f95d99f001c0c09e4",
      __v: 0,
      image:
        "https://fiverr.cybersoft.edu.vn/public/images/job/1647247213982_272954518_2443151049158321_7453736623362426594_n.png",
      usersBooking: null,
    },
    {
      deleteAt: false,
      _id: "618d380995d99f001c0c0c58",
      name: "illustrate detailed fantasy landscapes",
      rating: 6,
      price: 350,
      proServices: true,
      localSellers: true,
      onlineSellers: false,
      deliveryTime: false,
      type: null,
      subType: {
        deleteAt: false,
        _id: "618d245d95d99f001c0c0ace",
        name: "Illustration",
        status: true,
        typeJob: "61977cebaef344001cecee6c",
        __v: 0,
        image:
          "https://fiverr.cybersoft.edu.vn/public/images/subtype/1641195691234_Untitled (77)-211104-225529.png",
      },
      status: false,
      userCreated: "618ce37f95d99f001c0c09e4",
      __v: 0,
      image:
        "https://fiverr.cybersoft.edu.vn/public/images/job/1647232112735_272199338_4739009466212137_3881014068660428182_n.png",
      usersBooking: "625e45467c9718001de0b7b2",
    },
    {
      deleteAt: false,
      _id: "618d386c95d99f001c0c0c60",
      name: "design stunning seamless surface pattern textile prints",
      rating: 4,
      price: 200,
      proServices: false,
      localSellers: true,
      onlineSellers: true,
      deliveryTime: false,
      type: null,
      subType: {
        deleteAt: false,
        _id: "618d246795d99f001c0c0ad2",
        name: "Pattern Design",
        status: true,
        typeJob: "61977cebaef344001cecee6c",
        __v: 0,
        image:
          "https://fiverr.cybersoft.edu.vn/public/images/job/1638193475093_desktop_graphic_and_design_game_design.jpg",
      },
      status: false,
      userCreated: "618ce37f95d99f001c0c09e4",
      __v: 0,
      image:
        "https://fiverr.cybersoft.edu.vn/public/images/job/1636645046851_design-stunning-seamless-surface-pattern-textile-prints.jpg",
      usersBooking: "622ca2f3f85597001ca82fcb",
    },
    {
      deleteAt: false,
      _id: "618d398095d99f001c0c0cae",
      name: "design premium packaging for your product",
      rating: 5,
      price: 450,
      proServices: false,
      localSellers: true,
      onlineSellers: true,
      deliveryTime: true,
      type: null,
      subType: {
        deleteAt: false,
        _id: "618d24b695d99f001c0c0ae0",
        name: "Packaging & Label Design",
        status: true,
        typeJob: "61977cebaef344001cecee6c",
        __v: 0,
        image:
          "https://fiverr.cybersoft.edu.vn/public/images/job/1638116311270_aaef850c09b95ef20e6244f634a2e67f45fa7753.jpg",
      },
      status: false,
      userCreated: "618ce37f95d99f001c0c09e4",
      __v: 0,
      image:
        "https://fiverr.cybersoft.edu.vn/public/images/job/1636645262355_design-packaging-for-your-product.jpg",
      usersBooking: "622ca2f3f85597001ca82fcb",
    },
    {
      deleteAt: false,
      _id: "618d3a5895d99f001c0c0ce8",
      name: "create corporate brochure trifold leaflet catalog design",
      rating: 5,
      price: 650,
      proServices: true,
      localSellers: true,
      onlineSellers: false,
      deliveryTime: false,
      type: null,
      subType: {
        deleteAt: false,
        _id: "618d24e895d99f001c0c0aef",
        name: "Brochure Design",
        status: true,
        typeJob: "61977cebaef344001cecee6c",
        __v: 0,
        image:
          "https://fiverr.cybersoft.edu.vn/public/images/job/1638116712138_77a821229b377d4ccf1136a2e6197f6397a0fe73.jpg",
      },
      status: false,
      userCreated: "618ce37f95d99f001c0c09e4",
      __v: 0,
      image:
        "https://fiverr.cybersoft.edu.vn/public/images/job/1636645484695_professional-tri-fold-brochure-bifold-square-flyer-poster-dl-catalog-travel.jpg",
      usersBooking: "6256c78a4662d6001ca51385",
    },
    {
      deleteAt: false,
      _id: "618d3abc95d99f001c0c0cf7",
      name: "Do anything about graphic design clear and creative",
      rating: 5,
      price: 50,
      proServices: false,
      localSellers: true,
      onlineSellers: true,
      deliveryTime: false,
      type: null,
      subType: {
        deleteAt: false,
        _id: "618d24e995d99f001c0c0af3",
        name: "Poster Design",
        status: true,
        typeJob: "61977cebaef344001cecee6c",
        __v: 0,
        image:
          "https://fiverr.cybersoft.edu.vn/public/images/job/1636645574646_do-everything-about-graphic-design-for-you-clear-and-creative.jpg",
      },
      status: true,
      userCreated: "618ce37f95d99f001c0c09e4",
      __v: 0,
      image:
        "https://fiverr.cybersoft.edu.vn/public/images/job/1636645574646_do-everything-about-graphic-design-for-you-clear-and-creative.jpg",
    },
    {
      deleteAt: false,
      _id: "618d3af595d99f001c0c0d06",
      name: "Do outstanding roll up banner design",
      rating: 6,
      price: 50,
      proServices: false,
      localSellers: true,
      onlineSellers: false,
      deliveryTime: false,
      type: null,
      subType: {
        deleteAt: false,
        _id: "618d24fd95d99f001c0c0afe",
        name: "Signage Design",
        status: true,
        typeJob: "61977cebaef344001cecee6c",
        __v: 0,
        image:
          "https://fiverr.cybersoft.edu.vn/public/images/job/1636645653125_design-roll-up-banner-design-youtube-banner-facebook-banner-web-banner-ads.jpg",
      },
    },
  ];
  return (
    <Fragment >
     <div id="JobList" className="container"> 
      <div style={{ marginTop: `80px` }}></div>
      <div className="joblist-header">
      {arrsp.map((item, index) => {
          return <NavLink to='#' key={index}>{item.name}</NavLink>;
        })}
      </div>

      <div className="joblist-suggested">
        <p className="joblist-suggested-a">Suggested</p>
        <button className="joblist-suggested-btn">html css</button>
        
      </div>
      <div className="joblist-list">
        <div className="joblist-result">result</div>
        <div className="joblist-list-tasks">
          <button>Category</button>
          <button>Category</button>
          <button>Category</button>
          <button>Category</button>
          <button>Category</button>

          <p>Pro service</p>
          <p>Pro service</p>
          <p>Pro service</p>
        </div>
      </div>

      <div className="container d-flex justify-content-around align-items-center flex-wrap">
        
          {arrsp2.map((item, index) => {
            return (
              <Fragment>
                <div className="card w-25">
                <img className="card-img-top" src={item.subType.image} />
                <div className="card-body">
                  <h4 className="card-title">{item.subType.name}</h4>
                  <p className="card-text">{item.name}</p>
                </div>
                </div>
              </Fragment>
            );
          })}
        
      </div>
      <div className="joblist-list-mutil">
        <div className="joblist-list-mutil-item">
          <div className="joblist-list-mutil-img"></div>
          <div className="joblist-list-mutil-content">
            <div className="joblist-list-mutil-content-header"></div>
            <div className="joblist-list-mutil-content-footer"></div>
          </div>
        </div>

      </div>
      </div>
    </Fragment>
  );
}


