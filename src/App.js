import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import {useState} from "react";

//components can be functions or classes, most people these days use functions with hooks
const App = () => {
    const [showAddTask, setShowAddTask] = useState(false);

    const [tasks, setTasks] = useState([
        {
            id: 1,
            text: "Task 1",
            day: "Monday",
            reminder: false
        },
        {
            id: 2,
            text: "Task 2",
            day: "Monday",
            reminder: true
        },
        {
            id: 3,
            text: "Task 3",
            day: "Monday",
            reminder: false
        },
        {
            id: 4,
            text: "Task 4",
            day: "Monday",
            reminder: true
        },
        {
            id: 5,
            text: "Task 5",
            day: "Monday",
            reminder: false
        }
    ]);

    // delete task
    const deleteTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id));
    }

    // toggle task
    const toggleTask = (id) => {
        setTasks(tasks.map(task => {
            if (task.id === id) {
                task.reminder = !task.reminder;
            }
            return task;
        }));
    }

    // add task
    const addTask = (task) => {
        const id = tasks.length + 1;
        const newTask = { id, ...task };
        setTasks([...tasks, newTask]);
    }

    return (
        <div className='container'>
            <Header title={"Task Tracker"} onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
            {showAddTask && <AddTask onAdd={addTask}/>}
            {tasks.length > 0 ?<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleTask}/> : 'No tasks'}
      </div>
  )
}

// TODO: function component
// function App() {
//       const name ="Brad";
//       const x = true;
//       return (
//           // the difference - className instead of class, for -> htmlFor
//           //if we don't want a div - then create <> and end with </>
//           <div className="container">
//               {/*<h1>Hello from react</h1>*/}
//               {/*<h2>Hello {1+1} {name} {x ? 'yes' : 'no'} </h2>*/}
//               <Header />
//           </div>
//     );
// }

// TODO: class component
// class App extends React.Component {
//     render() {
//         return <h1>Hello from a class</h1>
//     }
// }


export default App;
