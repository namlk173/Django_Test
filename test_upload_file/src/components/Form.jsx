import React, { useState } from "react";

import API from "../Api/API";

import "./Form.css";

const Form = () => {
  const [data, setData] = useState({
    file: "",
    remark: "",
  });

  const handleChangeRemark = (e) => {
    let newData = { ...data };
    newData["remark"] = e.target.value;
    setData(newData);
  };
  const handleChangeFile = (e) => {
    let newData = { ...data };
    newData["file"] = e.target.files[0];
    setData(newData);
  };

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    const response = await API.createListing(data);
    console.log(response);
  };

  return (
    <div>
      <form onSubmit={(e) => handleSubmitForm(e)}>
        <input
          type="file"
          name="file"
          accept="image/*"
          onChange={(e) => handleChangeFile(e)}
        />
        <div>
          <label htmlFor="remark">Remark:</label>
          <input
            type="text"
            name="remark"
            onChange={(e) => handleChangeRemark(e)}
          />
        </div>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Form;
