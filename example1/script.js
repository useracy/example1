var input = document.getElementById("searchInput");
var list = document.getElementById("recent");

input.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        var res = Array.from(document.querySelectorAll('.recent-text'))
            .find(el => el.textContent.toLowerCase().trim() === input.value.toLowerCase().trim());
        if (res === undefined) {
            var li = document.createElement("li");
            li.innerHTML = " <i class='fa fa-clock-o' aria-hidden='true'></i>" + input.value + " <i class='fa fa-times' aria-hidden='true'></i>";
            list.appendChild(li);
        }
    }
});

