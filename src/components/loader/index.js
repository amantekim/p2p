import React from "react";
import ClipLoader from "react-spinners/ClipLoader";
import "./index.scss"

const ContentLoader = ({ loading }) => {
  return (
    <div className="loader-container">
      <ClipLoader size={48} color={"#123abc"} loading={loading} />
    </div>
  );
};

export default ContentLoader;
