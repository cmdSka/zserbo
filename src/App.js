import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import UserManagement from './containers/UserManagement/UserManagement';

function App() {
  return (
    <>
    <div className="container">
      <h1>User management</h1>
      <UserManagement />
    </div>
    </>
  );
}

export default App;
