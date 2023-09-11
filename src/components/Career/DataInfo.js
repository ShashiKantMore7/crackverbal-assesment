import React, { useState } from "react";
import { FcCollapse, FcExpand } from "react-icons/fc";

const DataInfo = ({ title, line, line1 }) => {
  const [show, setShow] = useState(false);

  return (
    <div
      className={show ? "post-card-open" : "post-card"}
      onClick={() => setShow(!show)}
    >
      <div className="collapse-option">
        <h6>{title}</h6>

        <p>{show ? <FcCollapse size={20} /> : <FcExpand size={20} />}</p>
      </div>
      <b>
        <p>{line}</p>
      </b>
      <div className="description">{show ? <p>{line1}</p> : null}</div>
    </div>
  );
};

export default DataInfo;
