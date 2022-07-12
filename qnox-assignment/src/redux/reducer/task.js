import axios from "axios";

const initialState = {
  taskPost: [],
};

const tasks = (state = initialState, action) => {
  switch (action.type) {
    case "ADDING_TASK":
      const { userId, title, content } = action;
      console.log(userId + "  " + title + "  " + content);
      const post = async (e) => {
        const newTask = {
          userId: userId,
          title: title,
          content: content,
        };
        const config = {
          headers: {
            "Content-Type": "application/json",
          },
        };

        try {
          const data = JSON.stringify(newTask);
          await axios.post("http://localhost:5000/user", data, config);
        } catch (error) {
          console.error("error", error.response.data);
        }
      };

      post();

      // const newPostTask = {
      //   title: title,
      //   content: content
      // }

      // const prevPstSet = state.taskPost;

      // const newState = {
      //   userId : userId,
      //   taskPost: newset
      // }

      return {};

    

    case "DELETING_TASK":
      return {};
    default:
      return state;
  }
};

export default tasks;

// const onSubmit = async (e) => {
//   e.preventDefault();

//   const newUser = {
//     firstName: firstName,
//     lastName: lastName,
//     collegeName: collegeName,
//     phone: phone,
//     email: email,
//     password: password,
//   };

//   const config = {
//     headers: {
//       "Content-Type": "application/json",
//     },
//   };

//   try {
//     const data = JSON.stringify(newUser);

//     await axios.post("http://localhost:5000/registerUser", data, config);

//     setregisterUser({
//       firstName: "",
//       lastName: "",
//       collegeName: "",
//       phone: "",
//       email: "",
//       password: "",
//     });

//     // window.location.reload(); // you use post , put , delete
//   } catch (err) {
//     console.error("error", err.response.data);
//   }
// };
