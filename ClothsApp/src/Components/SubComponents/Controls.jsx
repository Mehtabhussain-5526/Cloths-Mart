import React from "react";
import {
  BrandsIcon,
  MarketIcon,
  NewsIcon,
  PeopleIcon,
} from "../../../util/logo";

const Controls = () => {
  return (
    <>
      <p>News Feed</p>
      <div className="flex">
        <NewsIcon />
        <p>News Feed</p>
      </div>
      <div className="flex">
        <MarketIcon />
        <p>Market Place</p>
      </div>
      <div className="flex">
        <BrandsIcon />
        <p>Brands</p>
      </div>
      <div className="flex">
        <PeopleIcon />
        <p>People</p>
      </div>
    </>
  );
};

export default Controls;
