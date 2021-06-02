import React from "react";
import _ from "lodash";
import { BrowserRouter as Route, useHistory } from "react-router-dom";
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
      <div className="row tab" id="tab4">
        <div className="list-info list-info_tab4">
          {data.map((item, index) => {
            return (
              <div
                onClick={() => viewDetail(item, item._id)}
                key={index}
                className="item-info item-info_tab4"
                style={{ marginRight: "10px" }}
              >
                <div className="border-info  border-info_tab4">
                  <div className="picture">
                    <img src={_.get(item, "images[0].src")} alt="" />
                  </div>
                  <div className="info" style={{ height: "unset" }}>
                    <div className="box-info">
                      <div className="i-info  content-info     date-info_tab4">
                        {moment(_.get(item, "createdAt")).format(
                          "DD [Thg]  MM YYYY H:mm"
                        )}
                      </div>
                      <div className="i-info title-info title-info_tab4">
                        {_.get(item, "title")}
                      </div>
                      <div className="i-info content-info  content-info_tab4">
                        {" "}
                        {_.get(item, "description")}
                      </div>
                    </div>
                  </div>
                  <div className="logo-info_tab4">
                    {_.get(item, "source_id.source.categories[19].title")}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
