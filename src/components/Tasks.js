import React from 'react'
import { useState } from 'react';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';
import dateFnsFormat from 'date-fns/format';
import isAfter from 'date-fns/isAfter';
import isBefore from 'date-fns/isBefore';
import addDays from 'date-fns/addDays';
import isToday from 'date-fns/isToday';
const finalItem = {
    display: "flex",
    justifyContent: "space-between",
    border: "1px solid grey",
    padding :"3%"
}

const FORMAT = "dd/MM/yyyy";
function formatDate(date, format, locale) {
    return dateFnsFormat(date, format, { locale });
}
const AddTask = ({ addTask }) => {
    const [task, setTask] = useState("");
    const [date, setDate] = useState(null);
    const field = {
        width: "100%",
        height: "30px",
        fontSize: "16px"
    }
    const submit = {
        width: "130px",
        height: "30px",
        marginTop: "2%",
        backgroundColor: "#C9CCD5",
        cursor: "pointer",

    }
    return (

        <div>
            <div>
                <input value={task} style={field} onChange={(e) => setTask(e.target.value)} />
            </div>
            <div>
                <button
                    style={submit}
                    onClick={() => {
                        addTask(task, date);
                        setTask("");
                    }}>
                    Add
                </button> {` `}

                <DayPickerInput
                    inputProps={{ style: { height: 25 } }}
                    formatDate={formatDate}
                    format={FORMAT}
                    onDayChange={(day) => setDate(day)}
                    placeholder={`${dateFnsFormat(new Date(), FORMAT)}`}
                    dayPickerProps={{
                        modifiers: {
                            disabled: [{ before: new Date() }],
                        },
                    }}
                />
            </div>




        </div>
    )
}


const TaskItem = ({ selectedTab, tasks }) => {

    if (selectedTab == 'Next Week') {
        return tasks.
            filter((task) =>
                isAfter(tasks.date, new Date()) &&
                isBefore(tasks.date, addDays(new Date(), 7))
            )
            .map((task) => (
                <div style={finalItem}>
                    <div>
                        <p>{task.text} </p>
                    </div>
                    <div>
                        <p>{dateFnsFormat(new Date(task.date), FORMAT)}</p>
                    </div>
                </div>
            ));

    }
    if (selectedTab == 'Today') {
        return tasks
            .filter((task) => isToday(task.date))
            .map((task) => (
                <div style={finalItem}>
                    <div>
                        <p>{task.text} </p>
                    </div>
                    <div>
                        <p>{dateFnsFormat(new Date(task.date), FORMAT)}</p>

                    </div>

                </div>
            ));
    }
    return tasks.map((task) => (
        <div style={finalItem}>
            <div>
                <p>{task.text} </p>
            </div>
            <div>
                <p>{dateFnsFormat(new Date(task.date), FORMAT)}</p>
            </div>
        </div>
    ));

}
const Tasks = ({ selectedTab }) => {
    const [tasks, setTasks] = useState([]);
    const addNewTask = (text, date) => {
        const newTaskItem = { text, date: date || new Date() }
        setTasks((prevState) => [...prevState, newTaskItem]);
    }
    return (
        <div>
            <div style ={{width :"300px"}}>
                <h4>{selectedTab}</h4>
            </div>

            {
                (selectedTab == 'Inbox') ?
                    <div>
                        <div>
                            <span className="add"> Add task</span>
                        </div>
                        <div>
                            <AddTask addTask={addNewTask} />
                        </div>

                    </div>
                    : null

            }



            {
                tasks.length > 0 ?
                    <TaskItem
                        tasks={tasks}
                        selectedTab={selectedTab} /> : null
            }

        </div>
    )
}

export default Tasks
