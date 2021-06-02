import React from "react";

export default function Overlay(props) {
  const hideNavHandle = () => {
    props.showChooseProductHandle(false);
    props.hideNavHandle(false);
  };
  return <div onClick={hideNavHandle} className="overlay-nav" />;
}
