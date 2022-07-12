export const addingTask = (userId, title, content) => {
  return {
    type: "ADDING_TASK",
    userId: userId,
    title: title,
    content: content,
  };
};



export const deletingTask = () => {
  return {
    type: "DELETING_TASK",
    taskId: "",
  };
};
