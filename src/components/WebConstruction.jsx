import React from 'react';

const WebConstruction = () => {
  const containerStyle = {
    margin: '0',
    padding: '0',
    width: '100%',
    height: '100vh',
    backgroundImage: 'url("/website-under-construction.png")',
    backgroundSize: 'cover', 
    backgroundRepeat: 'no-repeat', 
  };

  return (
    <div style={containerStyle}>
      {/*  add any content */}
    </div>
  );
};

export default WebConstruction;
