import React from "react";
import { Typography } from "@material-ui/core";

const Applications = ({ applications }) => {
    return (
        <>
            <div>
                <div>
                    <Typography variant="h6" >
                        {applications.name}
                    </Typography>
                    <Typography variant="body2">
                        {applications.email}
                    </Typography>
                    <Typography variant="body2">
                        {applications.skills}
                    </Typography>
                </div>
            </div>
        </>
    );
};

export default Applications;
