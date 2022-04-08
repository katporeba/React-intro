// using state - now variable tasks is a state, we use function setTasks to change it
import Task from "./Task";

const Tasks = ({ tasks, onDelete, onToggle }) => {

    return (
        <>
            {tasks.map((task) => (
                <Task key={task.id} task={task} onDelete={onDelete} onToggle={onToggle}/>
            ))}
        </>
    );
};

export default Tasks;
