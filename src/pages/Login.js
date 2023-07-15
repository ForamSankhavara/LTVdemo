import { useState } from "react";

const Login = () => {
  return (
    <div className="row my-5">
      <div className="col">
        <h4 className="border-bottom">Filters</h4>
      </div>
      <div className="col-sm-12 my-2">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          className="form-control"
          id="name"
          // value={filters.name}
          // onChange={handleInput("name")}
        />
      </div>

      <div className="col-sm-12 my-2">
        <label htmlFor="gender">Gender</label>
        <select
          className="form-control"
          id="gender"
          // onChange={handleInput("gender")}
        >
          <option value="">Select</option>
          {/* {genders.map((gender) => (
            <option value={gender} key={gender}>
              {gender}
            </option>
          ))} */}
        </select>
      </div>
    </div>
  )
}

export default Login
