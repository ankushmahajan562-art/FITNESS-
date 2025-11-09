document.getElementById("start-btn").addEventListener("click", function(){
  alert("Welcome to Ankush Fitness! More content coming soon 💪");
});
