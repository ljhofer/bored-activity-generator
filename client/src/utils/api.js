// user routes
export const getUsers = () => {
  return fetch("/api/user", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
};

// export const createUser = () => {
//   return fetch("/api/user", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//   });
// };

export const getUserById = (userId) => {
  return fetch(`api/user/${userId}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const updateUser = (userId) => {
  return fetch(`api/user/${userId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
  });
};

// activity routes
export const getTopActivities = () => {
  return fetch("/api/activity", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const createActivity = () => {
  return fetch("/api/activity", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const getActivityById = (activityId) => {
  return fetch(`/api/activity/${activityId}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
};

// comment routes
export const addComment = () => {
  return fetch("/api/comment", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const updateComments = (commentId) => {
  return fetch(`/api/comment/${commentId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const deleteComment = (commentId) => {
  return fetch(`/api/comment/${commentId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
};

// export const getTopActivities = () => {
//   return fetch('/api/activity', {
//     method: 'GET',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   }

export const getMe = async () => {
  const result = await fetch (`/api/user/me`, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return result;

};

export const createUser = async (userData) => {
  const result = await fetch("/api/user", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });
  return result;
};

export const loginUser = async (userData) => {
  const result = await fetch(`/api/user/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });
  return result;

};