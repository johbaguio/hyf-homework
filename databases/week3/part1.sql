
#findDatabaseTasks, to find all users assigned to tasks that have the word 'databases' in the title or description
SELECT * 
FROM user JOIN user_task ON user.id = user_task.user_id
JOIN task ON user_task.task_id = task.id
WHERE task.title LIKE '%database%' OR task.description LIKE '%database%';

#findUserTasks, to find all tasks assigned to Donald Duck
SELECT *
FROM user JOIN user_task ON user.id = user_task.user_id
JOIN task ON user_task.task_id = task.id
WHERE user.name = 'Donald Duck';

#findUserTasksStatus, to find the status name of the tasks assigned to Pavel
SELECT *
FROM user JOIN user_task ON user.id = user_task.user_id
JOIN task ON user_task.task_id = task.id
JOIN status ON task.status_id = status.id
WHERE user.name LIKE '%Pavel%';

#addNewTask, to add a new task
INSERT INTO task (title, description, created, updated, due_date, status_id) values ('Finish db homework.', 'Make homework and push to github.' , NOW(), NOW(), null, 2);

#changeTaskTitle, to change the title of a task
UPDATE task
SET title = 'Go out and buy groceries'
WHERE id = 4;

#changeTaskDueDate, to change the due date of a task
UPDATE task
SET due_date = '2019-05-12 23:59:59'
WHERE id = 16;

#changeTaskStatus, to change the status of a task
UPDATE task
SET status_id = 2
WHERE id = 10;

#markTaskAsCompleted, to mark a task as completed
UPDATE task
SET status_id = 3
WHERE id = 36;

#deleteTask, to delete a task
DELETE FROM task
WHERE id = 12;

#deleteUser, to delete a user
DELETE FROM user
WHERE id = 6;




