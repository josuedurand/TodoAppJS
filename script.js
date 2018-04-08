
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
    buttonEl.id = taskId + '-delete';
    // buttonEl.onclick = deleteTask(taskId);
    currentTask.appendChild(buttonEl);

    // Ajout de l'evenement pour la supprssion de la tache
    document.getElementById(taskId + '-delete').addEventListener('click', deleteTask(taskId));

    // Icon du bouton
    var buttonEl = currentTask.getElementsByTagName('button')[2];
    var iconEl = document.createElement('i');
    iconEl.className = 'far fa-times-circle';
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

const updateTask = () => {
    // recuperer la valeur de la tache modifier
    // metre en parametre la tache modifier
    // cree un evenement qui ecouter tout les taches et retourne la valeur au localStorage puis en réinserer dedans
    let value = document.getElementById()

}

// $('#taskList').on("click", "li", function (event) {
//     self = $(this);
//     taskID = self.attr('id');
//     localStorage.removeItem(taskID);
//     self.slideUp('slow', function () {
//         self.remove();
//     });

// });

const deleteTask = (taskId) => {
    // Supprimer l'entrer du localStorage
    // suprimmer le la vue

    // var element = document.getElementById(taskId);
    // element.parentNode.removeChild(element);

        // document.getElementById(taskId).parentNode.removeChild(document.getElementById(taskId));
        // this.parentNode.removeChild(this).parentNode;

        // todo : suprimmé l'entré dans le localStorage

        localStorage.removeItem(taskId);

    // var elem = document.getElementById("myDiv");
    // elem.parentNode.removeChild(elem);

    // var parent = document.getElementById("div1");
    // var child = document.getElementById("p1");
    // parent.removeChild(child);

    // var elem = document.getElementById("myDiv");
    // elem.parentNode.removeChild(elem);

    // var parent = document.getElementById("div1");
    // var child = document.getElementById("p1");
    // parent.removeChild(child);
}



// taskListEl.addEventListener("focus", function( event ) {
//   event.target.style.background = "pink";
// }, true);
// taskListEl.addEventListener("blur", function( event ) {
//   event.target.style.background = "";
// }, true);

// Evenements
// initialise les taches deja créé
window.addEventListener('load', initialize);
// permet leur modifications

// permet leur suppressions
// buttonEl.onclick = deleteTask(taskId);



// tasktEls.addEventListener("blur", function( evenement ) {

    // modifie la value de l'input
    // localStorage.setItem(this.parentNode.evenement.target.id, evenement.target.value)
    // 'task-00-value' => 'task-00'

// }, false);

// * fn de suppression
// var tasktEls = document.getElementsByClassName('task');

// for (let i = 0; i < tasktEls.length; i++) {
//     tasktEls[i].onclick = function () {

//         var div = this.parentElement;
//         div.style.display = "none";
//     }
// }

// var i;
// for (i = 0; i < close.length; i++) {
//     close[i].onclick = function () {
//         var div = this.parentElement;
//         div.style.display = "none";
//     }
// }





// @done : pour les taches terminé regExpS
// ou #/ ... /#

// TODO: Update
// TODO: Delete

// support de la touche 'entrer' pour ecrire les taches
// support natural order for task
// pouvoir netoyer la liste de toute les entre
    // bouton => fn localSorage.clear() avec un confirm au clic
// bien commenter
