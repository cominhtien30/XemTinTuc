import React from "react";
import _ from "lodash";
import { BrowserRouter as Route, Link, useHistory } from "react-router-dom";

import moment from "moment";

export default function Tab3(props) {
  let history = useHistory();
  const { data } = props;
  const viewDetail = (item, id) => {
    history.push({
      pathname: "/news/" + id,
      state: item
    });
  };
  const dataTab3 = () =>
    (data.length - 1) % 2 !== 0
      ? data.filter((item, index) => {
          return index !== 0 && index !== data.length - 1;
        })
      : data.filter((item, index) => {
          return index !== 0;
        });

  return (
    <>
      {/* Main */}
      <div className="row" id="tab3">
        <div
          className="list-info list-info_tab3"
          style={
            props.inputSearch ? { maxHeight: "415px" } : { maxHeight: "450px" }
          }
        >
          <div className="item-info main-info_tab3">
            <Link
              to={{
                pathname: `/news/${_.get(data[0], "_id")}`,
                state: data[0]
              }}
              style={{
                textDecoration: "none",
                color: "black"
              }}
            >
              <img src={_.get(data[0], "images[0].src")} alt="" />
              <div className="main-tab3">
                <div className="box-main-info_tab3">
                  <div className="img-logo">
                    <img
                      alt=""
                      draggable="false"
                      src="https://kenh14cdn.com/channel-icon/kenh14-152.png"
                    />
                  </div>
                  <div
                    className="row"
                    style={{ height: "75%", width: "100%", overflow: "hidden" }}
                  >
                    <div className="main-title-info_tab3">
                      {_.get(data[0], "title")}
                    </div>
                  </div>
                  <div className="row" style={{ width: "100%", height: "25%" }}>
                    <div className="main-name-info_tab3">
                      <span>
                        {_.get(
                          data[0],
                          "source_id.source.categories[19].title"
                        )}
                      </span>
                      <span>
                        {moment(_.get(data[0], "createdAt")).format(
                          "DD [Thg]  MM YYYY H:mm"
                        )}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <div className="list-info-item_tab3">
            {dataTab3().map((item, index) => {
              return (
                <div
                  onClick={() => viewDetail(item, item._id)}
                  key={index}
                  className="item-info item-info_tab3"
                >
                  <div className="border-info  border-info_tab3">
                    <div className="picture">
                      <img src={_.get(item, "images[0].src")} alt="" />
                    </div>
                    <div className="info">
                      <div className="box-info">
                        <div className="i-info  title-info   title-info_tab3">
                          {_.get(item, "title")}
                        </div>
                        <div className="i-info    content-info   content-info_tab3">
                          {" "}
                          {_.get(item, "description")}
                        </div>
                      </div>
                    </div>
                    <div className="logo-info_tab3">
                      {" "}
                      {_.get(item, "source_id.source.categories[19].title")}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          {dataTab3().length % 2 === 0 ? (
            <>
              <div className="item-info main-info_tab3">
                <Link
                  to={{
                    pathname: `/news/${_.get(data[data.length - 1], "_id")}`,
                    state: data[data.length - 1]
                  }}
                  style={{
                    textDecoration: "none",
                    color: "black"
                  }}
                >
                  <img
                    src={_.get(data[data.length - 1], "images[0].src")}
                    alt=""
                  />
                  <div className="main-tab3">
                    <div className="box-main-info_tab3">
                      <div className="img-logo">
                        <img
                          alt=""
                          draggable="false"
                          src="https://kenh14cdn.com/channel-icon/kenh14-152.png"
                        />
                      </div>
                      <div
                        className="row"
                        style={{
                          height: "75%",
                          width: "100%",
                          overflow: "hidden"
                        }}
                      >
                        <div className="main-title-info_tab3">
                          {_.get(data[data.length - 1], "title")}
                        </div>
                      </div>
                      <div
                        className="row"
                        style={{ width: "100%", height: "25%" }}
                      >
                        <div className="main-name-info_tab3">
                          <span>
                            {_.get(
                              data[data.length - 1],
                              "source_id.source.categories[19].title"
                            )}
                          </span>
                          <span>
                            {moment(
                              _.get(data[data.length - 1], "createdAt")
                            ).format("DD [Thg]  MM YYYY H:mm")}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
}
