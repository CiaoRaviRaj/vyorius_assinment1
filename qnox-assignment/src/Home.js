import React, { useEffect, useState } from "react";

import axios from "axios";

import "./Home.css";

import { addingTask } from "./redux/action/actions";
import { useDispatch } from "react-redux";

function Home({
  _id,
  firstName,
  lastName,
  collegeName,
  phone,
  email,
  password,
}) {
  const dispatch = useDispatch();

  const [tasks, setTasks] = useState([]);

  const [loadTask, setloadTask] = useState(true);

  const [formStatus, setformStatus] = useState(false);

  const [formData, setformData] = useState({
    title: "",
    content: "",
  });

  const addingEvent = (e) => {
    e.preventDefault();
    dispatch(addingTask(_id, formData.title, formData.content));
    setformStatus(false);
    getAllPost();
  };

  const handleDelete = async (id) => {

    // const post = e.target.value;

    // const postID = {
    //   id: post,
    // };

    // const data = JSON.stringify(postID);
    // console.log(data);
    // const config = {
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // }

    await axios.delete(`http://localhost:5000/posts/${_id}`).then((res) => {
      const del = tasks.filter((task) => _id !== task._id);
      setTasks(del);
    });

    getAllPost();
  };

  const getAllPost = async (e) => {
    const userId = {
      id: _id,
    };

    const data = JSON.stringify(userId);
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const res = await axios.post("http://localhost:5000/posts", data, config);

    console.log(res.data);

    setTasks(res.data);
  };

  if (loadTask) {
    getAllPost();
    setloadTask(false);
  }

  const handleFormDataChange = (e) => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    setformData({ ...formData, [name]: value });
  };
  // console.log(tasks);
  // console.log(_id);

  return (
    <>
      {/* {firstName ? ( */}
      <div className="home">
        <div className="profile__container">
          {firstName ? (
            <>
              <p>
                First Name: <span>{firstName}</span>
              </p>
              <p>
                Last Name: <span>{lastName}</span>
              </p>
              <p>
                College Name: <span>{collegeName}</span>
              </p>
              <p>
                phone Number: <span>{phone}</span>
              </p>
              <p>
                Email: <span>{email}</span>
              </p>
              <p>
                Password:
                <span>
                  {Array(password.length - 1)
                    .fill()
                    .map((_) => {
                      return <p>*</p>;
                    })}
                </span>
              </p>
            </>
          ) : null}
        </div>

        <div className="task__post">
          <h2>Task Post</h2>

          {!loadTask ? (
            <div className="task__post__container">
              {tasks.map((post) => {
                {
                  /* console.log(post); */
                }
                return (
                  <div className="task__post__details">
                    <h3>{post.title} </h3>
                    <p>{post.content}</p>

                    <button
                      onClick={() => handleDelete(_id)}
                      name="postID"
                      value={post._id}
                    >
                      X
                    </button>
                  </div>
                );
              })}
            </div>
          ) : null}
        </div>

        {formStatus ? (
          <form className="adding__task__form" onSubmit={addingEvent}>
            <input
              onChange={handleFormDataChange}
              type="text"
              name="title"
              placeholder="title"
              value={formData.title}
            />
            <input
              onChange={handleFormDataChange}
              type="text"
              name="content"
              placeholder="content"
              value={formData.content}
            />

            <button type="submit">Add</button>
          </form>
        ) : (
          <div className="adding__button" onClick={() => setformStatus(true)}>
            <a>+</a>
          </div>
        )}
      </div>
    </>
  );
}

export default Home;

<div className="adding__button"></div>;
