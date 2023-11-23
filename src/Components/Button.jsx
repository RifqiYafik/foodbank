import React from "react";

const Button = ({ TextButton }) => {
  return (
    <div>
      <button type="button" className="button-all">
        {TextButton}
      </button>
    </div>
  );
};

export default Button;
