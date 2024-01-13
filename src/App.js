// import logo from './logo.svg';
import "./App.css";
import TaskApp from "./components/TaskApp";
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import TaskPerson from "./components/TaskPerson";
import TaskProvider from "./context/context";
import CompletedTasks from "./components/CompleteTasks";
function App() {
  return (
    <div className="container">

    <TaskProvider>
      <Router>
      <Routes>
        <Route path="/TaskPerson" element={<TaskPerson />}  />
        <Route path="/Task-Assigner" element={<TaskApp />} />
        <Route path="/CompleteTasks" element={<CompletedTasks />} />
      </Routes>
    </Router>
    </TaskProvider>
    
    </div>
  );
}

export default App;
