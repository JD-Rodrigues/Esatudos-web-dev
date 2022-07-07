const car = {
    name: "Monza",
    year: 1972,
    air: true,
    horn: function(sound) {
        return `${document.querySelector("input").value}: ${sound}`;
    }
};
document.querySelector("button").addEventListener("click", (e)=>{
    e.preventDefault();
    document.querySelector("h1").innerHTML = car.horn("Buuuuuuu");
});

//# sourceMappingURL=index.242b51c6.js.map
