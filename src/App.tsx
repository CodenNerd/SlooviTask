import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import TaskAssigner from './components/modules/task-assigner/TaskAssigner';
import { getAuthCredentials } from './redux/actions/actions';
import store from './redux/store';

function App() {
  const auth  = useSelector((state: any) => state.auth)

  console.log(store.getState(), 'AUTH:::')
  useEffect(() => {
    if (auth.isAuthenticated) return
    getAuthCredentials()
  }, [])

  return (
    <TaskAssigner />
  );
}

export default App;
