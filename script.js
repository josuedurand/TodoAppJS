
/*
TODOS
Gerer si js est disponible pour le navigateur
*/

// Atribue les IDs aux taches
var numberOfTasks = 1;


function createTask() {

    console.log('creation tache !');

    var currentID = numberOfTasks;

    // Valeur de l'entrer dans l'input
    var textTache = document.getElementById('add-task-field').value;

    var taskListEl = document.getElementById('task-list');
    // Conteneur de la tâche
    var newTask = document.createElement('div');
    newTask.className = 'task';
    newTask.id = currentID;
    taskListEl.appendChild(newTask);

    // Button : Check de la tâche
    var currentTask = document.getElementById(currentID);
    var buttonEl = document.createElement('button');
    buttonEl.id = currentID + '-checkbox';
    currentTask.appendChild(buttonEl);

    // Icon du bouton
    // ? correct
    var buttonEl = currentTask.getElementsByTagName('button')[0];
    var iconEl = document.createElement('i');
    iconEl.className = 'far fa-circle';
    buttonEl.appendChild(iconEl);

    // Input : texte de la tâche
    // * currentTask
    var inputEl = document.createElement('input');
    inputEl.type = 'text';
    inputEl.name = 'task';
    inputEl.id = currentID + '-value';
    inputEl.value = textTache;
    currentTask.appendChild(inputEl);

    // Input : date:heure de la tâche
    var inputEl = document.createElement('input');
    inputEl.type = 'datetimel-local';
    inputEl.name = 'task-time';
    inputEl.id = currentID + '-date';
    currentTask.appendChild(inputEl);

    // Button : Annulé une tâche
    var buttonEl = document.createElement('button');
    buttonEl.id = currentID + '-cancel';
    currentTask.appendChild(buttonEl);

    // Icon du bouton
    // ? correct
    var buttonEl = currentTask.getElementsByTagName('button')[1];
    var iconEl = document.createElement('i');
    iconEl.className = 'fas fa-caret-down';
    buttonEl.appendChild(iconEl);

    // Incremente les taches totales
    numberOfTasks++;
    // Reset entrer
    document.getElementById('add-task-field').value = '';

    console.log('tache ' + currentID + ' créé');
}








// TODO: Read
// TODO: Update
// TODO: Delete
