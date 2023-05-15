/* eslint-disable no-unused-vars */
import React,{useState} from "react";
import createSvg from "../assets/add.svg";
import searchSvg from "../assets/search.svg";
import Notes from "./Notes";
import NewPost from "./newPost";

function Container() {
    const [showBox, setShowBox] = useState(false);
    const handelDailougeBox = ()=>{
        setShowBox(!showBox)
    }
  return (
    <main className="wrapper">
      <div className="main-container">
        <div className="side-bar-nav">
          <div className="brand-title">
            <h3>myNotes.</h3>
          </div>
          <div className="function-items">
            <div className="buttons">
              <div className="create-btn" onClick={handelDailougeBox}>
                <img src={createSvg} alt="addBtn" />
              </div>
            </div>
            <p>Add note</p>
          </div>
        </div>
        <div className="content-pannel">
          <header className="header">
            <div className="search-wrapper">
              <img src={searchSvg} alt="search" />
              <input
                type="text"
                id="search"
                className="search-box"
                placeholder="Search.."
                aria-controls="input-search"
              />
            </div>
          </header>
          <div className="content-body">
            <div className="content-title">
              <h2>Notes</h2>
            </div>
            <div className="content-body-wrapper">
              
             
             {showBox ? <NewPost func={handelDailougeBox}/> : ''}
              <Notes/>
              
             
              
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Container;
