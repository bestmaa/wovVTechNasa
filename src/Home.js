import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  useNavigate } from "react-router-dom";
import { GetMoreNasaData, GetNasaData } from "./action/NasaDataAction";
import Loader from "./Loader/Loader";

function Home() {
  const { loading, data } = useSelector((state) => state.NasaData);
  const navigater = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetNasaData());
  }, [dispatch]);
  function LoadMoreNasaData() {
    dispatch(GetMoreNasaData());
  }
  useEffect(() => {
    var acc = document.getElementsByClassName("accordion");
    var i;

    for (i = 0; i < acc.length; i++) {
      // acc[i].style.maxHeight="0px"
      acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
          panel.style.maxHeight = null;
        } else {
          panel.style.maxHeight = panel.scrollHeight + "px";
        }
      });
    }
  }, [data,loading]);
  let KEY = [];
  function sodata(d) {
    KEY = [];
    let VALUE = [];
    for (const [key, value] of Object.entries(d)) {
      KEY = [...KEY, key];
      VALUE = [...VALUE, value];
    }
    return { key: KEY, value: VALUE };
  }
  function goToPage(agr, state) {
    // window.location.state=state
    navigater(agr, { state: state });
  }
  return (
    <div>
      {loading && <Loader />}
      {data &&
        data.map((d, i) => (
          <div key={i}>
            <button className="accordion">
              <h3>{d.title}</h3>
            </button>
            <div className="panel">
              <div style={{ textAlign: "center" }}>
                <button
                  to="details"
                  state={{ state: d }}
                  onClick={() => goToPage("details", d)}
                  style={{
                    padding: "10px 20px",
                    backgroundColor: "#cfc",
                    borderRadius: "20px",
                  }}
                >
                  Go to details page
                </button>
              </div>
              {sodata(d).value.map((d, i) => (
                <div key={i}>
                  <b style={{ width: "150px", display: "inline-block" }}>
                    {KEY[i]}:
                  </b>
                  <i>
                    {KEY[i] === "url" ? (
                      <a href={d}>
                        {String(d)}
                      </a>
                    ) : (
                      String(d)
                    )}
                  </i>
                  <br />
                </div>
              ))}
            </div>
          </div>
        ))}
      <div style={{textAlign:"center"}}>
        <button onClick={LoadMoreNasaData} className="loadbtn">
          Load
        </button>
      </div>
    </div>
  );
}

export default Home;
