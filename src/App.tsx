import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import AppLoader from './components/atoms/app-loader/AppLoader';
import TaskAssigner from './components/modules/task-assigner/TaskAssigner';
import { getAuthCredentials } from './redux/actions/actions';
 
function App() {
  const auth  = useSelector((state: any) => state.auth)
  const showAppLoader = useSelector((state: any) => state.loading);

  useEffect(() => {
    if (auth.isAuthenticated) return
    getAuthCredentials()
  }, [auth.isAuthenticated])

  return (
    <>
      <AppLoader show={showAppLoader} />
      <TaskAssigner />
    </>
  );
}

export default App;
