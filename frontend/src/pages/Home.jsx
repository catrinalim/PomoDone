import { useEffect, useState } from 'react'

// components
import TaskDetails from '../components/TaskDetails'

const Home = () => {
    const [tasks, setTasks] = useState(null)

    useEffect(() => {
        const fetchTasks = async () => {
            try {
                const response = await fetch('/api/tasks')
                const json = await response.json()  // creates array of task objects

                if (response.ok) {
                    setTasks(json)
                }
            } catch (error) {
                console.error("Error fetching tasks:", error);
            }
        }

        fetchTasks()
    }, [])

    return (
        <div className="home">
            <div className="tasks">
                {tasks && tasks.map((task) => (
                    <TaskDetails key={task._id} task={task} />
                ))}
            </div>
        </div>
    )
}

export default Home;