
/*
Todo:
- Cree une fonction qui cree le formulaire de base et verifie si javascipt est activé
- [x] Créé une fonction qui au demarage de la page => importe dans la page les taches
- support de la touche 'entrer' pour ecrire les taches
- support natural order for task
- pouvoir netoyer la liste de toute les entre
    bouton => fn localSorage.clear() avec un confirm au clic
-  bien commenter

note:
@done : pour les taches terminé regExpS
ou #/ ... /#
*/


function initialize () {

    // Definit les references du numeros des taches si inexistant
    if (localStorage.getItem("numberOfTasks") === null) {
        localStorage.setItem("numberOfTasks", 0);
    }

    // Definit taskId et taskText pour recuperer tout les element du local storage sauf numberOfTasks (i = 1 et non 0)
    for (var i = 1; i < localStorage.length; i++) {

        var taskId   = localStorage.key(i);
        var taskText = localStorage.getItem(taskId);

        importFromLocalStorage(taskId, taskText);
    }
}

function saveToLocalStorage () {

    // Recupere l'entrer utilisateur
    var newTodoText = document.getElementById("add-task-field").value;

    // Si non vide alors ajout la tache
    if (newTodoText !== "") {

        // Recupere et incremente les taches totales
        var numberOfTasks = Number(localStorage.getItem("numberOfTasks")) + 1;
        var currentID     = "task-" + numberOfTasks;
        // Puis la met a jour dans le localStorage
        localStorage.setItem("numberOfTasks", numberOfTasks);
        // Valeur de l'entrer dans l'input
        // Stockage de la tache dans le localStorage
        localStorage.setItem(currentID, newTodoText);
        // Reinitialise l'entrer
        document.getElementById("add-task-field").value = "";
        // Affuche la reference de la tache créée dans la console
        console.log("La tâche " + currentID + " a été créée");
    }

}

function importFromLocalStorage (taskId, taskText) {

    // Recupere le form comptenant les taches
    var taskListEl = document.getElementById("task-list");
    // Conteneur de la tâche
    var newTask           = document.createElement("div");
    newTask.className     = "task";
    newTask.id            = taskId;
    taskListEl.appendChild(newTask);

    // Button : Bouger la tâche
    var currentTask = document.getElementById(taskId);
    var buttonEl    = document.createElement("button");
    buttonEl.id     = taskId + "-move";
    currentTask.appendChild(buttonEl);

    // Icon du bouton
    var buttonEl         = currentTask.getElementsByTagName("button")[0];
    var iconEl           = document.createElement("i");
    iconEl.className     = "fas fa-arrows-alt";
    buttonEl.appendChild(iconEl);

    // Button : Check de la tâche
    var currentTask = document.getElementById(taskId);
    var buttonEl    = document.createElement("button");
    buttonEl.id     = taskId + "-checkbox";
    currentTask.appendChild(buttonEl);

    // Icon du bouton
    var buttonEl         = currentTask.getElementsByTagName("button")[1];
    var iconEl           = document.createElement("i");
    iconEl.className     = "far fa-circle";
    buttonEl.appendChild(iconEl);

    // Input : texte de la tâche
    var inputEl   = document.createElement("input");
    inputEl.type  = "text";
    inputEl.name  = "task";
    inputEl.id    = taskId + "-value";
    inputEl.value = taskText;
    currentTask.appendChild(inputEl);

    // Button : Supprimé la tâche
    var buttonEl       = document.createElement("button");
    buttonEl.id        = taskId + "-delete";
    buttonEl.className = "delete-task";
    currentTask.appendChild(buttonEl);

    // Icon du bouton
    var buttonEl     = currentTask.getElementsByTagName("button")[2];
    var iconEl       = document.createElement("i");
    iconEl.className = "far fa-times-circle";
    buttonEl.appendChild(iconEl);
}

function createTask () {

    // Store l'entrer dans le localStorage si non vide
    saveToLocalStorage();

    // Declare les entrers necessaire a la fonction d'import
    var numberOfTasks = Number(localStorage.getItem("numberOfTasks"));
    var taskId        = "task-" + numberOfTasks;
    var taskText      = localStorage.getItem(taskId);

    // Puis execute l'import
    importFromLocalStorage(taskId, taskText);
}

function updateTask () {
    // todo:
    // recuperer la valeur de la tache modifier
    // metre en parametre la tache modifier
    // cree un evenement qui ecouter tout les taches et retourne la valeur au localStorage puis en réinserer dedans
}

function deleteTask (taskId) {
    // todo:
    // recuperer auclick la tache a supprimé
    // la retirer du localStorage
    // actualiser ou supprimé de la page l'element
    localStorage.removeItem(taskId);
}

// * Evenements
// Initialise les taches deja créé du localStorage
window.addEventListener("load", initialize);

// * document.getElementById(taskId + '-delete').onclick = 'deleteTask()';
var deleteButtons = document.getElementsByClassName("delete-task")
for (var i = 1; i < deleteButtons.length; i++) {
    deleteButtons[i];

}
