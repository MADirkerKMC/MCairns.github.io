var AbAcc = document.getElementsByClassName("accordion");
for(var i = 0; i<AbAcc.length; i++)
{
  AbAcc[i].addEventListener("click", function()
  {
    this.classList.toggle("active");
  

  var AbPanel = this.nextElementSibling;
  if(AbPanel.style.display === "block")
  {
    AbPanel.style.display = "none";
  }
  else
  {
    AbPanel.style.display = "block";
  }
  });
}