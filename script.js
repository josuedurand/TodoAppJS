
/*
Todo:
Cree une fonction qui cree le formulaire de base et verifie si javascipt est activé
*/

// Todo:
// Créé une fonction qui au demarage de la page => importe dans la page les taches

const initialize = () => { // * good
    // importer depuis le lS au lancement
    // cree dans lS numberOfTasks = 0 => a faire une fois si il n'existe pas

    // Definit les references du numeros des taches si inexistant
    if (localStorage.getItem("numberOfTasks") === null) {
        localStorage.setItem("numberOfTasks", 0);
    }

    // definir taskId et taskText comme recuperation de tout les element du local storage sauf numberOfTasks
    for (let i = 1; i < localStorage.length; i++) {

        let taskId   = localStorage.key(i);
        let taskText = localStorage.getItem(taskId);

        importFromLocalStorage(taskId, taskText);
    }
}

const saveToLocalStorage = () => { // * good

    // Incremente les taches totales
    let numberOfTasks = Number(localStorage.getItem("numberOfTasks")) + 1;
    localStorage.setItem("numberOfTasks", numberOfTasks);

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


    // // * declarer id et text en cours d'ajout
    // if (taskId == undefined && taskText == undefined) {
    //     let taskId   = 'task-' + numberOfTasks;
    //     let taskText = localStorage.getItem(taskId);
    // }



    var taskListEl = document.getElementById('task-list');
    // Conteneur de la tâche
    var newTask = document.createElement('div');
    newTask.className = 'task';
    newTask.id = taskId;
    taskListEl.appendChild(newTask);

    // Button : Bouger de la tâche
    var currentTask = document.getElementById(taskId);
    var buttonEl = document.createElement('button');
    buttonEl.id = taskId + '-move';
    currentTask.appendChild(buttonEl);

    // Icon du bouton
    var buttonEl = currentTask.getElementsByTagName('button')[0];
    var iconEl = document.createElement('i');
    iconEl.className = 'fas fa-arrows-alt';
    buttonEl.appendChild(iconEl);

    // Button : Check de la tâche
    var currentTask = document.getElementById(taskId);
    var buttonEl = document.createElement('button');
    buttonEl.id = taskId + '-checkbox';
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
    inputEl.id = taskId + '-value';
    inputEl.value = taskText;
    currentTask.appendChild(inputEl);

    // Input : date:heure de la tâche
    // var inputEl = document.createElement('input');
    // inputEl.type = 'datetime-local';
    // inputEl.name = 'task-time';
    // inputEl.id = numberOfTasks + '-date';
    // currentTask.appendChild(inputEl);

    // Button : Supprimé la tâche
    var buttonEl = document.createElement('button');
    buttonEl.id = taskId + '-cancel';
    currentTask.appendChild(buttonEl);

    // Icon du bouton
    var buttonEl = currentTask.getElementsByTagName('button')[2];
    var iconEl = document.createElement('i');
    iconEl.className = 'fas fa-caret-down';
    buttonEl.appendChild(iconEl);

}

const createTask = () => {

    // Store l'entrer dans le localStorage
    saveToLocalStorage();

    // Declare les entrers necessaire a la fonction d'import
    let numberOfTasks = Number(localStorage.getItem("numberOfTasks"));
    let taskId   = 'task-' + numberOfTasks;
    let taskText = localStorage.getItem(taskId);

    // Puis execute l'import
    importFromLocalStorage(taskId, taskText);
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


// support de la touche 'entrer' pour ecrire les taches
// support natural order for task
// pouvoir netoyer la liste de toute les entre
    // bouton => fn localSorage.clear() avec un confirm au clic
