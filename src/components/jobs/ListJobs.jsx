import React, { useEffect } from "react";
import { Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Job from "./Job";

import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import jwtDecode from "jwt-decode";
import { getJobs, allJobs } from "../../store/actions/jobActions";

const useStyles = makeStyles({
  jobsStyle: {
    margin: "5rem 0rem 5rem 5rem",
    alignItems: "center !important"
  },
});

const ListJobs = ({ job, setJob }) => {
  const auth= useSelector((state) => state.auth);
  const jobs = useSelector((state) => state.jobs);
  const role = jwtDecode(auth.token);
  const classes = useStyles();
  const dispatch = useDispatch();
  useEffect(() => {
    role.userRole === 0 ? dispatch(getJobs()) : dispatch(allJobs())
  }, [job.id, dispatch]);
  
  if (!auth.id) return <Redirect to="/signin" />;

  return (
    <>
      <div className={classes.jobsStyle}>
        <Typography className="heading" variant="h5">
          {" "}
          {role.userRole === 0 ? "Job posted by you" : "Available Jobs"}{" "}
        </Typography>
        {jobs &&
          jobs.map((job) => {

            return (

              <div className="card">
              <div className="card-body">
                <Job
                job={job}
                key={job.id}
                setJob={setJob}
                jobs={jobs}
              />
              </div>
            </div>
            );
          })}
      </div>
    </>
  );
};

export default ListJobs;
