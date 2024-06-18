import React, { useState } from 'react';
import './bai1.css';

interface Task {
    id: number;
    name: string;
    completed: boolean;
}

const TaskManager: React.FC = () => {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [taskName, setTaskName] = useState('');

    const addTask = () => {
        if (taskName.trim() !== '') {
            const newTask: Task = { id: Date.now(), name: taskName, completed: false };
            setTasks([...tasks, newTask]);
            setTaskName('');
        }
    };
    const toggleTaskCompletion = (id: number) => {
        setTasks(tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task));
    };

    const deleteTask = (id: number) => {
        setTasks(tasks.filter(task => task.id !== id));
    };

    const deleteCompletedTasks = () => {
        setTasks(tasks.filter(task => !task.completed));
    };

    const deleteAllTasks = () => {
        setTasks([]);
    };
     
    return (
        <div className="task-manager">
            <h1>Quản lý công việc</h1>
            <input
                type="text"
                placeholder="Nhập tên công việc"
                value={taskName}
                onChange={e => setTaskName(e.target.value)}
            />
            <button onClick={addTask}>Thêm công việc</button>
            <div className="task-filters">
                <button>Tất cả</button>
                <button>Hoàn thành</button>
                <button>Đang thực hiện</button>
            </div>
            <ul>
                {tasks.map(task => (
                    <li key={task.id}>
                        <input
                            type="checkbox"
                            checked={task.completed}
                            onChange={() => toggleTaskCompletion(task.id)}
                        />
                        <span className={task.completed ? 'completed' : ''}>{task.name}</span>
                        <button onClick={() => deleteTask(task.id)}>🗑️</button>
                    </li>
                ))}
            </ul>
            <button onClick={deleteCompletedTasks}>Xóa công việc hoàn thành</button>
            <button onClick={deleteAllTasks}>Xóa tất cả công việc</button>
        </div>
    );
};

export default TaskManager;
