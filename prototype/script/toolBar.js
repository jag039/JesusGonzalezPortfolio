document.addEventListener("DOMContentLoaded", () => {
  const divList = document.querySelectorAll('#toolBar > div');
  const btnList = document.querySelectorAll('#toolBar > div > button');
  let chosen = divList[0]
  let selected = btnList[0]
  
  btnList.forEach(btn => {
    console.log(btn)
    btn.addEventListener('click', ()=>{
      selected.id = null;
      selected = btn;
      selected.id = "selected";
      chosen.id = null;
      chosen = btn.parentElement;
      chosen.id = "chosen"
      console.log(toolBarList);
    })
  });


});