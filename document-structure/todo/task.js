let input = document.getElementById("task__input");
let tasks = document.getElementById("tasks__list");

const remove = e => {
	e.target.closest(".task").remove();
}

const add = e => {
  if (input.value.trim()) {
    text =
      `<div class="task">
        <div class="task__title">
          ${input.value}
        </div>
        <a href="#" class="task__remove">&times;</a>
      </div>`;
    tasks.insertAdjacentHTML('afterend', text);
    let task = document.querySelector(".task__remove");
    task.addEventListener("click", remove);
  }
	input.value = "";
	e.preventDefault();
}

document.getElementById("tasks__add").addEventListener("click", add);
