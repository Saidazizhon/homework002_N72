import React from "react";
import { Link } from "react-router-dom";
import { GoArrowRight } from "react-icons/go";

const Path = ({ btnTitle, title, url, btn }) => {
  return (
    <section id="path">
      <div className="container">
        <div className="path">
          <h2>{title}</h2>
          {btn ? (
            <Link to={`/${url}`}>
              <button>
                {btnTitle}
                <GoArrowRight />
              </button>
            </Link>
          ) : (
            <></>
          )}
        </div>
      </div>
    </section>
  );
};

export default Path;
