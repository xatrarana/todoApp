/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import penSvg from "../assets/pen.svg";
import deleteSvg from "../assets/delete.svg";
import Service from '../api/api';

const api = new Service();
function Notes() {
    const [data,setData] = useState([]);
    const [postId,setPostId] = useState('')
    const [updateTitle,setUpdatedTitle] = useState("");
    const [updateTodo, setUpdateTodo] = useState("")
    const [isLoading,setIsLoading] = useState(true);
    useEffect(() => {
        const fetchData = async () => {
          try {
            const result = await api.getPosts();
            setData(result.data);
            setIsLoading(false);
          } catch (error) {
            console.error(error);
            setIsLoading(false);
          }
        };
    
        fetchData();
      },[data]);
      
      function handleDelte(e,_id){
        e.preventDefault();
        console.log(_id);
        
        const res = api.deletePost(_id);
        if(!res){
            alert("error is deleting note")
        }
        alert("note deleted")
      }

      function handleUpdate(e,id){
            e.preventDefault();
            const res = api.updatePost(id,updateTitle,updateTodo);
      }
  return (
    <>
      {data.length > 0 && isLoading ? (
        <div>Loading...</div>
      ) : (
        data.map((post)=>{
            return (
              
              <div className="content-body-item" key={post.id} >
                <form className="content-body-item notes-form">
                <input
                  spellCheck="false"
                  type="text"
                  className="note-title"
                  id="title"
                  defaultValue={post.title}
                  onChange={e=>setUpdatedTitle(e.target.value)}
                />
                <textarea spellCheck="false" className="textbox" defaultValue={post.value} 
                onChange={e => setUpdateTodo(e.target.value)}></textarea>
                <div className="bottom-func">
                  <span className="time-span">{post.date}</span>
                  <div className="btns">
                    <div className="btns-operation" onChange={e=>handleUpdate(e,post.id)}>
                      <img src={penSvg} alt="updateBtn" />
                    </div>
                    <div className="btns-operation" onClick={e=>handleDelte(e,post.id)}>
                      <img src={deleteSvg} alt="delteBtn" />
                    </div>
                  </div>
                </div>
                </form>
              </div>
            );
        })
      )}
    </>
  )
}

export default Notes
