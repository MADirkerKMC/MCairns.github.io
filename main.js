//Select the element 
const elInfo = document.getElementById("secInfo");
const elEdu = document.getElementById("secEdu");
const elSkills = document.getElementById("secSkills");
const elExp = document.getElementById("secExp");

function txtHide(){
  document.getElementById("txtInfo").style.display = "none";
  document.getElementById("txtEdu").style.display = "none";
  document.getElementById("txtSkills").style.display = "none";
  document.getElementById("txtExp").style.display = "none";
}

elInfo.addEventListener('click',function(){
  txtHide();
  document.getElementById(infoText).style.display = "block";
});

elEdu.addEventListener('click',function(){
  document.getElementById(eduText).style.display = "block";
});

elSkills.addEventListener('click',function(){
  document.getElementById(skillsText).style.display = "block";
});

elExp.addEventListener('click',function(){
  document.getElementById(expText).style.display = "block";
});
