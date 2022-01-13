import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Parser from "html-react-parser";
import loading from "../assets/loading.gif";
import { useDispatch, useSelector } from "react-redux";
import { set_experience } from "../redux/action";

const Experience = ({ expRemark }) => {
  const dispatch = useDispatch();
  const [items, setItems] = useState([]);
  const [isloading, setisLoading] = useState(true);
  const fetchExperience = async () => {
    const result = await axios("experiences");
    setItems(result.data);
    dispatch(set_experience(result.data));
    setisLoading(false);
  };
  const cachedExperience = useSelector((state) => state.experience);
  // console.log(items, "NotCached");
  useEffect(() => {
    if (cachedExperience.length === 0) {
      fetchExperience();
    } else {
      setItems(cachedExperience);
      setisLoading(false);
    }
  }, []);
  return (
    <div>
      <section className="resume-section" id="experience">
        <div className="resume-section-content">
          <a href="#experience" className="js-scroll-trigger">
            <h2 className="mb-5">Experience</h2>
          </a>
          {isloading ? (
            <img src={loading} alt="Loading..." width="200px" />
          ) : (
            items.map((item) => (
              <div key={item.id}>
                <div className="d-flex flex-column flex-md-row justify-content-between">
                  <div className="flex-grow-1">
                    <h3 className="mb-0">{item.title}</h3>
                    <div className="subheading mb-3">
                      <a
                        target="_blank"
                        rel="noreferrer"
                        href={item.worked_organization_url}
                      >
                        {item.worked_organization}
                      </a>
                    </div>
                    <div>{Parser(item.short_info)}</div>
                  </div>
                  <div className="flex-shrink-0">
                    <span className="text-primary">
                      {item.from_date} - {item.to_date}
                    </span>
                  </div>
                </div>
                <hr />
              </div>
            ))
          )}
          <div className="d-flex flex-column flex-md-row justify-content-between">
            <div className="flex-grow-1">{Parser(expRemark)}</div>
          </div>
        </div>
      </section>
      <hr className="m-0" />
    </div>
  );
};

export default Experience;
