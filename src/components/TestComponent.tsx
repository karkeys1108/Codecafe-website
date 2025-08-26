import React from 'react';

const TestComponent = () => {
  console.log('TestComponent is rendering');
  
  return (
    <div style={{
      position: 'relative',
      width: '100%',
      padding: '80px 20px',
      backgroundColor: 'red',
      color: 'white',
      textAlign: 'center',
      zIndex: 1000,
      border: '5px solid yellow'
    }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '20px' }}>TEST COMPONENT</h1>
      <p>If you can see this, the component is rendering but might be hidden by other styles.</p>
    </div>
  );
};

export default TestComponent;
