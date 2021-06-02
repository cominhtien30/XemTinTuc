import React from "react";
import _ from "lodash";
import { BrowserRouter as Route, Link, useHistory } from "react-router-dom";
import moment from "moment";

export default function Tab2(props) {
  const history = useHistory();
  const { data } = props;
  const viewDetail = (item, id) => {
    history.push({
      pathname: "/news/" + id,
      state: item
    });
  };

  return (
    <>
      {/* Main */}
      <div className="row" id="tab2">
        <div
          className="list-info list-info_tab2"
          style={props.inputSearch ? { maxHeight: "418px" } : {}}
        >
          <div
            className="item-info main-info_tab2"
            onClick={() => viewDetail(data[0], _.get(data[0], "_id"))}
          >
            <img src={_.get(data[0], "images[0].src")} alt="" />
            <div className="main-tab2">
              <div className="row" style={{ width: "100%" }}>
                <div className="main-title-info_tab2">
                  {_.get(data[0], "title")}
                </div>
              </div>
              <div className="row" style={{ width: "100%" }}>
                <div className="main-name-info_tab2">
                  <span>
                    {_.get(data[0], "source_id.source.categories[19].title")}
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

          {/* List */}
          {data
            .filter((item, index) => {
              return index !== 0;
            })
            .map((item, index) => {
              return (
                <Link
                  to={{
                    pathname: `/news/${item._id}`,
                    state: item
                  }}
                  key={index}
                  style={{
                    textDecoration: "none",
                    borderRadius: "5px"
                  }}
                >
                  <div
                    className="item-info"
                    key={index}
                    style={{ borderRadius: "5px", background: "white" }}
                  >
                    <div className="border-info border-info_tab2">
                      <div className="picture">
                        <img
                          style={{ borderRadius: "5px" }}
                          src={_.get(item, "images[0].src")}
                          alt=""
                        />
                      </div>
                      <div className="info">
                        <div className="box-info">
                          <div className="i-info name-info name-info_tab2">
                            {" "}
                            {_.get(
                              item,
                              "source_id.source.categories[19].title"
                            )}
                          </div>
                          <div className="i-info title-info title-info_tab2">
                            {_.get(item, "title")}
                          </div>
                          <div className="i-info content-info content-info_tab2">
                            {moment(_.get(item, "createdAt")).format(
                              "DD [Thg]  MM YYYY H:mm"
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
        </div>
      </div>
    </>
  );
}
