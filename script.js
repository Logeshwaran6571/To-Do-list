var adding = document.getElementById("add");

adding.addEventListener("click", function() {
    var inputValue = document.getElementById("input").value;
    if (inputValue === '') {
        alert("You must write something!");
    } else {
        var newItem = document.createElement("li");
        newItem.textContent = inputValue;

        // Create and append the close button to the new item
        var closeBtn = document.createElement("span");
        closeBtn.className = "close";
        closeBtn.textContent = "×";
        newItem.appendChild(closeBtn);

        var ul = document.querySelector("ul");
        ul.appendChild(newItem);
        document.getElementById("input").value = "";

        // Add event listener to the new close button
        closeBtn.addEventListener("click", function() {
            this.parentElement.remove();
        });
    }
});

// Add event listeners to the existing close buttons
document.querySelectorAll(".close").forEach(function(closeBtn) {
    closeBtn.addEventListener("click", function() {
        this.parentElement.remove();
    });
});
