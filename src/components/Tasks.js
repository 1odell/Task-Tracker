import Task from './Task'

const Tasks = ({ tasks, onDelete, onToggle }) => {
  return (
    <div>
      {tasks.map((task) => (
      <Task className="task h2" 
      key={task.id} 
      task={task} 
      onDelete={onDelete}
      onToggle={onToggle}
      />
      ))}
    </div>
  )
}

export default Tasks