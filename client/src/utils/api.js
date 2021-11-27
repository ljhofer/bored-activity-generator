// user routes <-- not sure on exact fetch routes; i.e., /api/..?
export const getUsers = () => {
  return fetch("/api/profile", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const createUser = () => {
  return fetch("/api/profile", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const getUserById = () => {
  return fetch(`api/profile/${userId}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const updateUser = () => {
  return fetch(`api/profile/${userId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
  });
};

// activity routes <-- not sure on exact fetch routes; i.e., /api/..?
export const getTopActivities = () => {
  return fetch("/api/home", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const getActivityById = () => {
  return fetch(`/api/home/${activityId}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const createActivity = () => {
  return fetch("/api/home", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  });
};

// comment routes <-- not sure on exact fetch routes; i.e., /api/..?

export const getComments = () => {
  return fetch("/api", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const addComment = () => {
  return fetch("/api", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const updateComments = () => {
  return fetch("/api", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const deleteComment = () => {
  return fetch("/api", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
};
