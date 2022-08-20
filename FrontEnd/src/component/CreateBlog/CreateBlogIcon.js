import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AddCircleIcon from "@mui/icons-material/AddCircle";

import Tooltip from '@mui/material/Tooltip';


import "./CreateBlogIcon.css";

function CreateBlogIcon() {
  const navigate = useNavigate();

  return (
    <>
      <Tooltip title="Create a Blog" placement="top-start" arrow>

        <AddCircleIcon
          className="createIcon"
          // onMouseEnter={() => setHover(true)}
          // onMouseLeave={() => setHover(false)}
          onClick={() => navigate("/createblog")}
        />
      </Tooltip>

    </>
  );
}

export default CreateBlogIcon;
