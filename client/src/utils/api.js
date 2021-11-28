// user routes
export const getUsers = () => {
  return fetch("/api/user", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const createUser = () => {
  return fetch("/api/user", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const getUserById = () => {
  return fetch(`api/user/${userId}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const updateUser = () => {
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

export const getActivityById = () => {
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

export const updateComments = () => {
  return fetch(`/api/comment/${commentId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const deleteComment = () => {
  return fetch(`/api/comment/${commentId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const getTopActivities = () => {
  return fetch('/api/activity', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
};