import React from "react";
import { useState } from "react";

const Calculator = () => {
  const [val, setVal] = useState("");
  const backspace = () => {
    try {
      setVal(val.slice(0, -1));
    } catch (error) {
      setVal("");
    }
  };
  const calculate = () => {
    try {
      setVal(eval(val));
    } catch (error) {
      setVal("Error");
    }
  };

  return (
    <div>
      <div className="container my-2">
        <div className="row">
          <div className="col-12">
            <h1 className="display-6 fw-bolder text-center text-primary">
              CALCULATOR
            </h1>
            <hr />
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-4">
            <div className="card  mb-3 pt-3 shadow">
              <div className="card-body text-primary">
                <input
                  type="text"
                  className="fs-4 text-primary shadow form-control text-center bg-light mb-4 form-control-lg"
                  value={val}
                  onChange={(e) => setVal(e.target.value)}
                />
                <div className="row">
                  <div className="col-3">
                    <button
                      className="btn btn-light text-primary shadow p-4 fs-4"
                      onClick={(e) => setVal(val + e.target.value)}
                      value="1"
                    >
                      1
                    </button>
                  </div>

                  <div className="col-3">
                    <button
                      className="btn btn-light text-primary shadow p-4 fs-4"
                      onClick={(e) => setVal(val + e.target.value)}
                      value="2"
                    >
                      2
                    </button>
                  </div>
                  <div className="col-3">
                    <button
                      className="btn btn-light text-primary shadow p-4 fs-4"
                      onClick={(e) => setVal(val + e.target.value)}
                      value="3"
                    >
                      3
                    </button>
                  </div>
                  <div className="col-3">
                    <button
                      className="btn btn-light text-primary shadow px-2 py-4 fs-4"
                      onClick={() => backspace()}
                      value="C"
                    >
                      C/CE
                    </button>
                  </div>
                </div>

                <div className="row mt-2">
                  <div className="col-3">
                    <button
                      className="btn btn-light text-primary shadow p-4 fs-4"
                      onClick={(e) => setVal(val + e.target.value)}
                      value="4"
                    >
                      4
                    </button>
                  </div>

                  <div className="col-3">
                    <button
                      className="btn btn-light text-primary shadow p-4 fs-4"
                      onClick={(e) => setVal(val + e.target.value)}
                      value="5"
                    >
                      5
                    </button>
                  </div>
                  <div className="col-3">
                    <button
                      className="btn btn-light text-primary shadow p-4 fs-4"
                      onClick={(e) => setVal(val + e.target.value)}
                      value="6"
                    >
                      6
                    </button>
                  </div>
                  <div className="col-3">
                    <button
                      className="btn btn-light text-primary shadow p-4 fs-4"
                      onClick={(e) => setVal(val + e.target.value)}
                      value="+"
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="row mt-2">
                  <div className="col-3">
                    <button
                      className="btn btn-light text-primary shadow p-4 fs-4"
                      onClick={(e) => setVal(val + e.target.value)}
                      value="7"
                    >
                      7
                    </button>
                  </div>

                  <div className="col-3">
                    <button
                      className="btn btn-light text-primary shadow p-4 fs-4"
                      onClick={(e) => setVal(val + e.target.value)}
                      value="8"
                    >
                      8
                    </button>
                  </div>
                  <div className="col-3">
                    <button
                      className="btn btn-light text-primary shadow p-4 fs-4"
                      onClick={(e) => setVal(val + e.target.value)}
                      value="9"
                    >
                      9
                    </button>
                  </div>
                  <div className="col-3">
                    <button
                      className="btn btn-light text-primary shadow p-4 fs-4"
                      onClick={(e) => setVal(val + e.target.value)}
                      value="-"
                    >
                      -
                    </button>
                  </div>
                </div>

                <div className="row mt-2">
                  <div className="col-3">
                    <button
                      className="btn btn-light text-primary shadow p-4 fs-4"
                      onClick={(e) => setVal(val + e.target.value)}
                      value="."
                    >
                      .
                    </button>
                  </div>

                  <div className="col-3">
                    <button
                      className="btn btn-light text-primary shadow p-4 fs-4"
                      onClick={(e) => setVal(val + e.target.value)}
                      value="0"
                    >
                      0
                    </button>
                  </div>
                  <div className="col-3">
                    <button
                      className="btn btn-light text-primary shadow p-4 fs-4"
                      onClick={() => calculate()}
                      value="="
                    >
                      =
                    </button>
                  </div>
                  <div className="col-3">
                    <button
                      className="btn btn-light text-primary shadow p-4 fs-4"
                      onClick={(e) => setVal(val + e.target.value)}
                      value="*"
                    >
                      X
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
