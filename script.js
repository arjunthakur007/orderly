// >>add new button open close
CTA.addEventListener('click', () => {
    newTask.classList.remove('hidden'); // Remove the "hidden" class
    newTask.classList.add('flex'); // Add the "flex" class
    // newTask.setAttribute('aria-hidden', 'false'); //set aria-hidden to false for accessibility
  });

  closeCTA.addEventListener('click' , () => {
    newTask.classList.remove('flex');  
    newTask.classList.add('hidden'); 
    // newTask.setAttribute('aria-hidden', 'true');
  }) 

// >>add new card
const addNewCard = () => {
    //get task data
    const taskData = {
        id: `${Date.now()}`,
        title: document.getElementById("title").value,   //selecting the whole item 
        imageURL: document.getElementById("imageURL").value,
        type: document.getElementById("type").value,
        description: document.getElementById("description").value,
    };
    console.log(taskData);
    
}
addNewCard()

// CTA.addEventListner('click',() => {
//     newTask.classList.replace('hidden','flex')
// }) 

