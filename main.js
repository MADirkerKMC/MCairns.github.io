//For accordion on About Me page
var AbAcc = document.getElementsByClassName("accordion");
//for loop to create a click event for each accordion segment in order to drop the panel.
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

//=========================Resume Button=====================//
document.getElementById('btnResume').addEventListener('click', function(){
  const resume = document.createElement('a');
  resume.href = 'Visuals/MACairnsCV.pdf'; //the path to the file 
  resume.download = 'MACairnsCV.pdf'; //name of file
  resume.click(); //trigger download
});