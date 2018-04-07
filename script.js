
/*
Todo:
Cree une fonction qui cree le formulaire de base et verifie si javascipt est activé
*/

// Todo:
// Créé une fonction qui au demarage de la page => importe dans la page les taches

const initialize = () => {
    // importer depuis le lS au lancement
    // cree dans lS numberOfTasks = 0 => a faire une fois si il n'existe pas

    // Definit les references du numeros des taches si inexistant
    if (localStorage.getItem("numberOfTasks") === null) {
        localStorage.setItem("numberOfTasks", 0);
    }


}

const saveToLocalStorage = () => {

    // Incremente les taches totales
    let numberOfTasks = Number(localStorage.getItem("numberOfTasks"));
    localStorage.setItem("numberOfTasks", numberOfTasks + 1);

    var currentID = 'task-' + numberOfTasks;

    // Valeur de l'entrer dans l'input
    // Stockage de la tache dans le localStorage
    localStorage.setItem(currentID, document.getElementById('add-task-field').value);

    // Reset entrer
    document.getElementById('add-task-field').value = '';

    console.log('La tâche ' + currentID + ' a été créée');
}

const importFromLocalStorage = (taskId, taskText) => {
    // importer depuis le lS
    // ! Corriger currendID
    // * U R HERE !
    var taskListEl = document.getElementById('task-list');
    // Conteneur de la tâche
    var newTask = document.createElement('div');
    newTask.className = 'task';
    newTask.id = currentID;
    taskListEl.appendChild(newTask);

    // Button : Bouger de la tâche
    var currentTask = document.getElementById(currentID);
    var buttonEl = document.createElement('button');
    buttonEl.id = currentID + '-move';
    currentTask.appendChild(buttonEl);

    // Icon du bouton
    var buttonEl = currentTask.getElementsByTagName('button')[0];
    var iconEl = document.createElement('i');
    iconEl.className = 'fas fa-arrows-alt';
    buttonEl.appendChild(iconEl);

    // Button : Check de la tâche
    var currentTask = document.getElementById(currentID);
    var buttonEl = document.createElement('button');
    buttonEl.id = currentID + '-checkbox';
    currentTask.appendChild(buttonEl);

    // Icon du bouton
    var buttonEl = currentTask.getElementsByTagName('button')[1];
    var iconEl = document.createElement('i');
    iconEl.className = 'far fa-circle';
    buttonEl.appendChild(iconEl);

    // Input : texte de la tâche
    var inputEl = document.createElement('input');
    inputEl.type = 'text';
    inputEl.name = 'task';
    inputEl.id = currentID + '-value';
    inputEl.value = localStorage.getItem(currentID);
    currentTask.appendChild(inputEl);

    // Input : date:heure de la tâche
    // var inputEl = document.createElement('input');
    // inputEl.type = 'datetime-local';
    // inputEl.name = 'task-time';
    // inputEl.id = currentID + '-date';
    // currentTask.appendChild(inputEl);

    // Button : Supprimé la tâche
    var buttonEl = document.createElement('button');
    buttonEl.id = currentID + '-cancel';
    currentTask.appendChild(buttonEl);

    // Icon du bouton
    var buttonEl = currentTask.getElementsByTagName('button')[2];
    var iconEl = document.createElement('i');
    iconEl.className = 'fas fa-caret-down';
    buttonEl.appendChild(iconEl);

}

const createTask = () => {
    saveToLocalStorage();
    importFromLocalStorage();
}




// function initialise() {

// }

// ! Corriger
// const init = () => {
//     localStorage.forEach(element => {
//         let ID = localStorage.key(element);
//         let value = localStorage.getItem(localStorage.key(element))
//     });
// }
// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
// var i;

// console.log("local storage");
// for (i = 0; i < localStorage.length; i++)   {
//     console.log(localStorage.key(i) + "=[" + localStorage.getItem(localStorage.key(i)) + "]");
// }


window.addEventListener('load', initialize);


// @done : pour les taches terminé regExpS
// ou #/ ... /#

// TODO: Read
// TODO: Update
// TODO: Delete
