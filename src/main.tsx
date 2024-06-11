import React from 'react'
import ReactDOM from 'react-dom/client'
import TodoApp from './components/TodoApp/TodoApp.tsx'
import 'styles/index.scss';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <TodoApp />
  </React.StrictMode>,
)
