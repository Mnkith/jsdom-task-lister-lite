document.addEventListener("DOMContentLoaded", () => {
  const f = document.getElementsByTagName('form')[0];
  // b = document
  f.addEventListener("submit", function (e) {
    ul = document.getElementById("tasks");
    const text = document.getElementById("new-task-description").value;
    e.preventDefault();
    li = document.createElement("li");
    li.innerText = text;
    ul.appendChild(li);
  }, false);



});
