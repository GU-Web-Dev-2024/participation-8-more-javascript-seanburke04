"use strict";

// function to save task to local storage
function saveTasks(tasks) {
	localStorage.setItem("tasks", JSON.stringify(tasks));
}

// function to load tasks from local storage
function loadTasks() {
	const tasks = localStorage.getItem("tasks");
	return tasks ? JSON.parse(tasks) : [];
}

// exports
export { loadTasks, saveTasks };
