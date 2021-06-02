import Tab1 from "../tab/tab1";
import Tab2 from "../tab/tab2";
import Tab3 from "../tab/tab3";
import Tab4 from "../tab/tab4";
import React from "react";
import Product1 from "../product/product1";
import Product2 from "../product/product2";
export default function listPages(inputSearch, data, dataProduct) {
  return [
    {
      key: "60ab1d11111",
      name: "Tab1",
      type: 1,
      component: <Tab1 inputSearch={inputSearch} data={data} />
    },
    {
      key: "60ab1d2222",
      name: "Tab2",
      type: 1,
      component: <Tab2 inputSearch={inputSearch} data={data} />
    },
    {
      key: "60ab1d3333",
      name: "Tab3",
      type: 1,
      component: <Tab3 inputSearch={inputSearch} data={data} />
    },
    {
      key: "60ab1d4444",
      name: "Tab4",
      type: 1,
      component: <Tab4 inputSearch={inputSearch} data={data} />
    },
    {
      key: "pagePoduct1",
      name: "Product 1",
      type: 2,
      component: <Product1 data={dataProduct} inputSearch={inputSearch} />
    },
    {
      key: "pagePoduct2",
      name: "Product 2",
      type: 2,
      component: <Product2 data={dataProduct} inputSearch={inputSearch} />
    }
  ];
}
