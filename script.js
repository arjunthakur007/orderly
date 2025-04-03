const taskContainer = document.querySelector('.task_Container')


// >>add new button open close
CTA.addEventListener('click', () => {
    newTask.classList.remove('hidden'); // Remove the "hidden" class
    newTask.classList.add('flex'); // Add the "flex" class
    // newTask.setAttribute('aria-hidden', 'false'); //set aria-hidden to false for accessibility
});

closeCTA.addEventListener('click', () => {
    newTask.classList.remove('flex');
    newTask.classList.add('hidden');
    // newTask.setAttribute('aria-hidden', 'true');
})

// >>add new card
const addNewCard = () => {
    //get task data
    const taskData = {
        id: `${Date.now()}`,
        title: document.getElementById("title").value,   //selecting the value in the item 
        imageURL: document.getElementById("imageURL").value,
        type: document.getElementById("type").value,
        description: document.getElementById("description").value,
    };
    console.log(taskData);

    //generate HTML Code
    const newCard =
        `<div id=${taskData.id}>
      <div class="card">
          <div
              class="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm ">
              <a href="#">
                  <img class="rounded-t-lg"
                      src=${taskData.imageURL} alt="" />
              </a>
              <div class="p-5">
                  <a href="#">
                      <h5
                          class="mb-2 text-2xl font-bold tracking-tight text-blue-900 ">
                          ${taskData.title}
                      </h5>
                  </a>
                  <a href="#">
                      <h4
                          class="mb-2 text-lg font-md tracking-tight text-blue-700 ">
                          ${taskData.type}
                      </h4>
                  </a>
                  <p class="mb-3 font-normal text-gray-700 ">
                      ${taskData.description}
                      
                  </p>
                  <div class="flex items-center justify-between">
                      <a href="#"
                          class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-md hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                          Open task
                          <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                              <path stroke="currentColor" stroke-linecap="round"
                                  stroke-linejoin="round" stroke-width="2"
                                  d="M1 5h12m0 0L9 1m4 4L9 9" />
                          </svg>
                      </a>
                      <div class="flex gap-1">
                          <div style="padding: 8px;"
                              class="border-2 border-gray-900 rounded-md hover:bg-gray-300">
                              <div class="w-4">
                                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                                      width="100%" height="100%" style="box-sizing:border-box;">
                                      <path
                                          d="M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1 0 32c0 8.8 7.2 16 16 16l32 0zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-14-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z" />
                                  </svg>
                              </div>
                          </div>
                          <div style="padding: 8px;"
                              class="border-2 border-gray-400 rounded-md hover:bg-gray-900">
                              <div class="w-4">
                                  <svg class="fill-gray-400" xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 448 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.-->
                                      <path
                                          d="M135.2 17.7L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-7.2-14.3C307.4 6.8 296.3 0 284.2 0L163.8 0c-12.1 0-23.2 6.8-28.6 17.7zM416 128L32 128 53.2 467c1.6 25.3 22.6 45 47.9 45l245.8 0c25.3 0 46.3-19.7 47.9-45L416 128z" />
                                  </svg>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>`

    //Inject it to DOM
    taskContainer.insertAdjacentHTML("beforeend", newCard);

    //Clear the form
    document.getElementById("title").value = "";
    document.getElementById("imageURL").value = "";
    document.getElementById("type").value = "";
    document.getElementById("description").value = "";

    return;

};

