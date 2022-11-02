let input = document.getElementById("task__input");
let tasks = document.getElementById("tasks__list");

const remove = e => {
	e.target.closest(".task").remove();
}

const add = e => {
	tasks.innerHTML +=
		`<div class="task">
      <div class="task__title">
        ${input.value}
      </div>
      <a href="#" class="task__remove">&times;</a>
    </div>`;

	input.value = "";

  [...(tasks.getElementsByClassName("task__remove"))].forEach(element => {
		element.addEventListener("click", remove)
	});

	e.preventDefault();
}

document.getElementById("tasks__add").addEventListener("click", add);
input.addEventListener("keydown", e => {
	if (e.key === 'Enter') {
        add(e);
    }
});