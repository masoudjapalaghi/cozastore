import React from "react";
import { Fragment } from "react";
import { Helmet } from "react-helmet";

const InformationUser = ({ user }) => {
  const {gender,username,role, email, phone, createdAt} =user;
  return (
    <Fragment>
      <Helmet>
        <title>داشبورد</title>
      </Helmet>
      <div
        className="page-content page-container p-b-30 p-t-100"
        id="page-content"
      >
        <div className="padding">
          <div className=" container d-flex justify-content-center ">
            <div className="col-xl-6 col-md-12">
              <div className="card_profile user-card-full rtl">
                <div className="row m-l-0 m-r-0">
                  <div className="col-sm-4 bg-c-lite-green user-profile">
                    <div className="card-block text-center text-white">
                      <div className="m-b-25">
                        <img
                          src={
                            gender === "male"
                              ? "/images/icons/img_avatar.png"
                              : "/images/icons/avatar6.png"
                          }
                          alt="Avatar"
                          className="avatar_features"
                        />
                      </div>

                      <h6 className="f-w-600 pb-2">{username}</h6>
                      <p>{role.name}</p>
                      <i className=" fa fa-edit feather pointer icon-edit m-t-10 f-16"></i>
                    </div>
                  </div>
                  <div className="col-sm-8">
                    <div className="card-block">
                      <h6 className="m-b-20 p-b-5 b-b-default f-w-600">
                        اطلاعات
                      </h6>
                      <div className="row">
                        <div className="col-sm-8 ">
                          <p className="m-b-10  f-w-600">Email</p>
                          <h6 className=" text-muted f-w-400">{email}</h6>
                        </div>
                        <div className="col-sm-4">
                          <p className="m-b-10 f-w-600">Phone</p>
                          <h6 className="text-muted f-w-400">{phone}</h6>
                        </div>
                      </div>
                      <h6 className="m-b-20 m-t-40 p-b-5 b-b-default f-w-600">
                        اطلاعات تکمیلی
                      </h6>
                      <div className="row">
                        <div className="col-sm-6">
                          <p className="m-b-10 f-w-600">Date create</p>
                          <h6 className="text-muted  f-w-400">
                            {createdAt}
                          </h6>
                        </div>
                        <div className="col-sm-6">
                          <p className="m-b-10 f-w-600">gender</p>
                          <h6 className="text-muted f-w-400">{gender}</h6>
                        </div>
                      </div>
                      <ul className="social-link list-unstyled m-t-20 ">
                        <li>
                          <a
                            href="#!"
                            data-toggle="tooltip"
                            data-placement="bottom"
                            title=""
                            data-original-title="facebook"
                            data-abc="true"
                          >
                            <i
                              className="fa fa-facebook pl-2 feather icon-facebook facebook"
                              aria-hidden="true"
                            ></i>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#!"
                            data-toggle="tooltip"
                            data-placement="bottom"
                            title=""
                            data-original-title="twitter"
                            data-abc="true"
                          >
                            <i
                              className="fa fa-twitter pl-2 feather icon-twitter twitter"
                              aria-hidden="true"
                            ></i>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#!"
                            data-toggle="tooltip"
                            data-placement="bottom"
                            title=""
                            data-original-title="instagram"
                            data-abc="true"
                          >
                            <i
                              className="fa fa-instagram pl-2 feather icon-instagram instagram"
                              aria-hidden="true"
                            ></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default InformationUser;
