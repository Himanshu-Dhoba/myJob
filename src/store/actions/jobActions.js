import axios from "axios";
import { url, setHeaders } from "../../api";
import { toast } from "react-toastify";

export const getJobs = () => {
  return (dispatch) => {
    axios
      .get(`${url}/recruiters/jobs`, setHeaders())
      .then((jobs) => {
        dispatch({
          type: "GET_JOBS",
          jobs: jobs.data.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const allJobs = () => {
  return (dispatch) => {
    axios
      .get(`${url}/candidates/jobs`, setHeaders())
      .then((jobs) => {
        dispatch({
          type: "ALL_JOBS",
          jobs: jobs.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const addJob = (newJob) => {
  return (dispatch, getState) => {
    const name = getState().auth.title;
    const desc = getState().auth.description;
    const loc = getState().auth.location;
    const id = getState().auth.id;
    axios
      .post(`${url}/jobs`, { ...newJob, name, desc, loc, id }, setHeaders())
      .then((job) => {
        dispatch({
          type: "ADD_JOB",
          job,
        });
      })
      .catch((error) => {
        console.log(error.response);

        toast.error(error.response?.data.message, {
          position: toast.POSITION.TOP_RIGHT,
        });
      });
  };
};

export const applyJob = (jobId) => {
  return (dispatch) => {
    axios
      .post(`${url}/candidates/jobs`, { jobId }, setHeaders())
      .then((applied) => {
        dispatch({
          type: "APPLY_JOB",
          applied
        });
      })
      .catch((error) => {
        console.log(error.response);

        toast.error(error.response?.data.message, {
          position: toast.POSITION.TOP_RIGHT,
        });
      });
  };
};

export const jobApplication = (jobId) => {
  return (dispatch) => {
    axios
      .get(`${url}/recruiters/jobs/${jobId}/candidates`, setHeaders())
      .then((applications) => {
        dispatch({
          type: "JOB_APPLICATIONS",
          applications: applications.data.data
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const updateJob = (updatedJob, id) => {
  return (dispatch) => {
    axios
      .put(`${url}/jobs/${id}`, updatedJob, setHeaders())
      .then((job) => {
        dispatch({
          type: "UPDATE_JOB",
          job,
        });
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.response?.data.message, {
          position: toast.POSITION.TOP_RIGHT,
        });
      });
  };
};

export const deleteJob = (id) => {
  return (dispatch) => {
    axios
      .delete(`${url}/jobs/${id}`, setHeaders())
      .then(() => {
        dispatch({
          type: "DELETE_JOB",
          id,
        });
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.response?.data.message, {
          position: toast.POSITION.TOP_RIGHT,
        });
      });
  };
};

