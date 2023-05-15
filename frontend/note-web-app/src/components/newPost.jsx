/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Service from "../api/api";
const api = new Service();
function NewPost(props) {
  function getDate() {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");
    const formattedDate = `${year}-${month}-${day}`;
    return formattedDate;
  }
  function handleFormData() {
    const form = document.getElementById("post-form");
    const formData = new FormData(form);
    const title = formData.get("title-box");
    const todo = formData.get("todo-box");
    const date = getDate();
    const obj = {
      title: title,
      value: todo,
      date: date,
    };

    const res = api.createPost(obj.title, obj.value, obj.date);

    if (!res) {
      alert("error in note creation");
    }
    window.location.href = '/'
  }

  return (
    <div className="CreatePost-wrapper">
      <div className="cp-main-container">
        <form id="post-form">
          <div className="form-r1">
            <label htmlFor="title" className="label">
              Title
            </label>
            <input
              type="type"
              className="title-input-box"
              name="title-box"
              id="title-box"
            />
          </div>
          <div className="form-r2">
            <label htmlFor="desc" className="label">
              TODO
            </label>
            <textarea
              type="type"
              className="desc-input-box"
              name="todo-box"
              id="todo-box"
              defaultValue=''
            >
              
            </textarea>
          </div>
          <div className="form-r3">
            <div className="cp-primary" onClick={handleFormData}>
              <p>create note</p>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path
                  d="M21 1.99658C6 1.99658 4 15.9966 3 21.9966C3.66667 21.9966 4.33275 21.9966 4.99824 21.9966C5.66421 18.6635 7.33146 16.8301 10 16.4966C14 15.9966 17 12.4966 18 9.49658L16.5 8.49658C16.8333 8.16325 17.1667 7.82992 17.5 7.49658C18.5 6.49658 19.5042 4.99658 21 1.99658Z"
                  fill="rgba(255,255,255,1)"
                ></path>
              </svg>
            </div>
            <div className="cp-danger" onClick={props.func}>
              
              <p>cancel</p>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path
                  d="M12.0007 10.5865L16.9504 5.63672L18.3646 7.05093L13.4149 12.0007L18.3646 16.9504L16.9504 18.3646L12.0007 13.4149L7.05093 18.3646L5.63672 16.9504L10.5865 12.0007L5.63672 7.05093L7.05093 5.63672L12.0007 10.5865Z"
                  fill="rgba(255,255,255,1)"
                ></path>
              </svg>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default NewPost;
