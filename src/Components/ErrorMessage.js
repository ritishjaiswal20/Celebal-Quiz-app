import React from 'react'
const ErrorMessage = ({ children }) => {
    return (
      <div
        style={{
          width: "100%",
          padding: 2,
          marginBottom: 4,
          borderRadius: 4,
          backgroundColor: "orangered",
          textAlign: "center",
          color: "white",
          textTransform: "capitalize",
        }}
      >
        {children}
      </div>
    );
  };
  
  export default ErrorMessage;
  