
/*
Todo:
- Cree une fonction qui cree le formulaire de base et verifie si javascipt est activé
- [x] Créé une fonction qui au demarage de la page => importe dans la page les tâches
- support de la touche 'entrer' pour ecrire les tâches
- support natural order for task
- pouvoir netoyer la liste de toute les entre
    bouton => fn localSorage.clear() avec un confirm au clic
-  bien commenter

note:
@done : pour les tâches terminé regExpS
ou #/ ... /#
*/


function initialize () {

    // Définit les références du numéro des tâches si inexistant
    if (localStorage.getItem("numberOfTasks") === null) {
        localStorage.clear();
        localStorage.setItem("numberOfTasks", 0);
    }

    // Définit taskId et taskText pour récupérer tout les éléments du local storage sauf numberOfTasks (i = 1 et non 0)
    for (var i = 1; i < localStorage.length; i++) {

        var taskId   = localStorage.key(i);
        var taskText = localStorage.getItem(taskId);

        importFromLocalStorage(taskId, taskText);
    }
}

function saveToLocalStorage () {

    // Récupère l'entrer utilisateur
    var newTodoText = document.getElementById("add-task-field").value;

    // Si non vide alors ajout la tâche
    if (newTodoText !== "") {

        // Récupère et incrémente les tâches totales
        var numberOfTasks = Number(localStorage.getItem("numberOfTasks")) + 1;
        var currentID     = "task-" + numberOfTasks;
        // Puis la met à jour dans le localStorage
        localStorage.setItem("numberOfTasks", numberOfTasks);
        // Valeur de l'entrer dans l'input
        // Stockage de la tâche dans le localStorage
        localStorage.setItem(currentID, newTodoText);
        // Réinitialise l'entrer
        document.getElementById("add-task-field").value = "";
        // Affiche la référence de la tâche créée dans la console
        console.log("La tâche " + currentID + " a été créée");
    }

}

function importFromLocalStorage (taskId, taskText) {

    // Récupère le form comprenant les tâches
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

    // Button : Supprimer la tâche
    var buttonEl       = document.createElement("button");
    buttonEl.id        = taskId + "-delete";
    buttonEl.className = "delete-task";
    currentTask.appendChild(buttonEl);
    // * Event pour supprimer la tâche aux cliques du bouton
    // * document.getElementById(taskId + "-delete").addEventListener('click', deleteTask(taskId));

    // Icon du bouton
    var buttonEl     = currentTask.getElementsByTagName("button")[2];
    var iconEl       = document.createElement("i");
    iconEl.className = "far fa-times-circle";
    buttonEl.appendChild(iconEl);
}

function createTask () {

    // Store l'entrer dans le localStorage si non-vide
    saveToLocalStorage();

    // Déclare les entrer nécessaire à la fonction d'import
    var numberOfTasks = Number(localStorage.getItem("numberOfTasks"));
    var taskId        = "task-" + numberOfTasks;
    var taskText      = localStorage.getItem(taskId);

    // Puis exécute l'import
    importFromLocalStorage(taskId, taskText);
}

function updateTask () {
    // todo:
    // Récupérer la valeur de la tâche modifier
    // Mètre en paramètre la tâche modifier
    // Créer un évènement qui écouter tout les tâches et retourne la valeur au localStorage puis en la réinsère dedans
}

function deleteTask (taskId) {
    // todo:
    // Récupérer au click la tâche a supprimé
    // la retirer du localStorage
    // actualiser ou supprimé de la page l'élément
    localStorage.removeItem(taskId);
}

// * Evenements
// Initialise les tâches déjà créé du localStorage
window.addEventListener("load", initialize);

// * document.getElementById(taskId + '-delete').onclick = 'deleteTask()';
var deleteButtons = document.getElementsByClassName("delete-task")
for (var i = 1; i < deleteButtons.length; i++) {
    deleteButtons[i];

}

for (var i = 1; i < localStorage.length; i++) {

    var taskId   = localStorage.key(i);
    var taskText = localStorage.getItem(taskId);

    importFromLocalStorage(taskId, taskText);
}
