import React, { createContext, useEffect, useState } from "react";
import ListRoute from "../route/route";
import _ from "lodash";
import { BrowserRouter } from "react-router-dom";
import Oclock from "./animation/oclock";
import Intro from "./animation/intro";
export const UserContext = createContext();
export default function Hone(props) {
  const [data, setData] = useState([]);
  const [dataProduct, setDataProduct] = useState([]);
  const [intro, setIntro] = useState(false);
  useEffect(() => {
    setIntro(true);
    fetch(
      "https://api.appfast.io/v3?operationName=getContent&variables=%7B%22limit%22%3A20%2C%22start%22%3A0%2C%22where%22%3A%7B%22source%22%3A%5B%5D%2C%22tag%22%3A%5B%22609e2238bbca91001079bbc6%22%5D%2C%22type%22%3A%5B%22photo%22%2C%22video%22%2C%22news%22%2C%22event%22%2C%22link%22%2C%22pdf%22%2C%22mp4%22%5D%2C%22projectId%22%3A%22604f2564831b6f001062735a%22%2C%22key%22%3A%22SWIPE_POST_CONTENT_AML4qE7N15%22%2C%22active%22%3Atrue%2C%22_cache%22%3Afalse%7D%7D&extensions=%7B%22persistedQuery%22%3A%7B%22version%22%3A1%2C%22sha256Hash%22%3A%22be56086ed0eff4528148a4e27b56e7b57df1367bdbb2e7cfe5a024c400189e6c%22%7D%7D"
    )
      .then((response) => response.json())
      .then((data) => setData(_.get(data, "data.contentFilter", [])))
      .then(
        fetch(
          "https://api.appfast.io/v3?operationName=getContent&variables=%7B%22limit%22%3A12%2C%22start%22%3A0%2C%22where%22%3A%7B%22projectId%22%3A%22604f2564831b6f001062735a%22%2C%22type%22%3A%5B%22product%22%5D%2C%22key%22%3A%22PRODUCT_LIST_D9Waiecfj7%22%2C%22active%22%3Atrue%2C%22_cache%22%3Atrue%7D%7D&extensions=%7B%22persistedQuery%22%3A%7B%22version%22%3A1%2C%22sha256Hash%22%3A%22be56086ed0eff4528148a4e27b56e7b57df1367bdbb2e7cfe5a024c400189e6c%22%7D%7D"
        )
          .then((response) => response.json())
          .then((data) => setDataProduct(_.get(data, "data.contentFilter", [])))
          .then(function () {
            setTimeout(() => {
              setIntro(false);
            }, 1000);
          })
      );
    // fetch(
    //   "https://api.appfast.io/v3?operationName=getContent&variables=%7B%22limit%22%3A20%2C%22start%22%3A0%2C%22where%22%3A%7B%22tag%22%3A%5B%22609e2238bbca91001079bbc6%22%5D%2C%22type%22%3A%5B%22photo%22%2C%22video%22%2C%22news%22%2C%22event%22%2C%22link%22%2C%22pdf%22%2C%22mp4%22%5D%2C%22projectId%22%3A%22604f2564831b6f001062735a%22%2C%22key%22%3A%22POST_CONTENT_crtooduucr%22%2C%22active%22%3Atrue%2C%22_cache%22%3Afalse%7D%7D&extensions=%7B%22persistedQuery%22%3A%7B%22version%22%3A1%2C%22sha256Hash%22%3A%22be56086ed0eff4528148a4e27b56e7b57df1367bdbb2e7cfe5a024c400189e6c%22%7D%7D"
    // )
    //   .then((response) => response.json())
    //   .then((data) => setDataProduct(_.get(data, "data.contentFilter", [])))
    //   .then(function () {
    //     setTimeout(() => {
    //       setIntro(false);
    //     }, 2000);
    //   });
  }, []);
  return (
    <BrowserRouter>
      <>
        <div className="container">
          <div className="logo">
            <div className="title">a</div>
          </div>
          <Oclock />
          <div
            style={{
              position: "relative",
              width: "250px",
              height: "550px",
              margin: "40px auto"
            }}
          >
            {intro ? <Intro /> : ""}

            {/* {info && <Intro />} */}
            <UserContext.Provider
              value={{ data: data, intro: intro, dataProduct: { dataProduct } }}
            >
              <ListRoute />
            </UserContext.Provider>
          </div>
        </div>
      </>
    </BrowserRouter>
  );
}
