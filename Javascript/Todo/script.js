

let count=0;

function addtodo(){

   let date=new Date()

    const todo=document.getElementById('add').value.trim();
    
    if(todo===''){
        alert("Enter A valid data");
        return;
    }
   else{
    console.log(todo)
    const task1=document.getElementById('task1');
    const task2=document.getElementById('task2');

            const htmldata=` <div  class= " newtask bg-white rounded-xl p-5 shadow-md
                        border-l-4 border-blue-500
                        hover:shadow-xl hover:-translate-y-1
                        transition duration-300 space-y-4 flex flex-col ">

                <div class="flex justify-between items-center ">

                    <div>
                        <h3  class="text-lg font-bold text-[#3b1028]">
                           ${todo}
                        </h3>

                        
                    </div>

                    <span  class= " status  bg-blue-100 text-blue-700
                                 text-xs font-semibold
                                 px-3 py-1 rounded-full">
                        Active
                    </span>

                </div>

                <div class="flex justify-between items-center">

                    <span class="text-sm text-gray-400">
                        ${date.toLocaleString()}
                    </span>

                    <div class="flex gap-2">

                        <button onclick="completed(this)" class="text-green-600
                                       hover:bg-green-100
                                       px-3 py-2 rounded-lg">
                            ✓
                        </button>

                        <button onclick="makedit(this)" class="text-orange-600
                                       hover:bg-orange-100
                                       px-3 py-2 rounded-lg">
                            ✎
                        </button>

                        <button onclick="remove(this)" class="text-red-600
                                       hover:bg-red-100
                                       px-3 py-2 rounded-lg">
                            🗑
                        </button>

                    </div>

                </div>

            </div>`
            if(task1&&task2){
            task1.remove();
            task2.remove();
            } 

            count++;
            Taskbar.innerHTML+=htmldata;
            num.innerText=count;
        
    
   }

    document.getElementById('add').value='';

}

function makedit(btn){
    const todotask=btn.parentElement.parentElement.parentElement.querySelector("h3").innerText;
    console.log(todotask)

    if(confirm(`Do you Want to change the Task`)){
        const change=prompt(`Change The Task`,todotask);
        btn.parentElement.parentElement.parentElement.querySelector("h3").innerText=change;
    }
    else{
        alert(`No Changes Made`)
    }
}


function remove(btn) {
    count--
    num.innerText=count;
    zerodis();
    btn.parentElement.parentElement.parentElement.remove();
                
                
}

function completed(btn){
        
        let date=new Date()

    const mytask=btn.parentElement.parentElement.parentElement.querySelector("h3").innerText;
    console.log(mytask)
  
    btn.parentElement.parentElement.parentElement.innerHTML=`<div class=" flex justify-between items-center w-full my-4 ">

                    <div>
                        <h3 class="text-lg font-bold text-gray-500 line-through">
                           ${mytask}
                        </h3>
                    </div>

                     <span class="text-sm text-gray-400">
                        ${date.toLocaleString()}
                    </span>

                    <span  class= " status  bg-green-100 text-green-700
                                 text-xs font-semibold
                                 px-3 py-1 rounded-full">
                        Completed
                    </span>
                    <div >
                         <button onclick="remove(this)" class="text-red-600
                                       hover:bg-red-100
                                       p-3 rounded-lg">
                            🗑
                        </button>
                    </div>

                </div>`

               
}


function filtertask(type){
    zerodis();
    const all=document.getElementById('all');
    const active=document.getElementById('active');
    const  completed=document.getElementById('completed');

    // reset

    all.classList.remove("bg-amber-950");
    active.classList.remove("bg-blue-800");
    completed.classList.remove("bg-green-800");

    if(type==='all'){
        all.classList.add('bg-amber-950')
       
    }
    else if(type==='active'){
         active.classList.add('bg-blue-800')
      
    }
    else if(type==='completed'){
          completed.classList.add('bg-green-800')
    }

    // filtering using class

        const tasks =document.querySelectorAll('.newtask')
        tasks.forEach(task => {
            const status=task.querySelector('.status').innerText.trim();
            
           
            if(type === 'all'){
                task.classList.remove("hidden");
            }
            
            else if(type === 'active'){

                if(status === 'Active'){
                    task.classList.remove("hidden");
                }
                else{
                    task.classList.add("hidden");
                }

            }

            else if(type === 'completed'){

                if(status === 'Completed'){
                    task.classList.remove("hidden");
                }
                else{
                    task.classList.add("hidden");
                }

            }
            
        });
       
}

function zerodis(){
       if(count===0){
                    Taskbar.innerHTML=`<div id="task1" class="bg-white rounded-xl p-5 shadow-md
                        border-l-4 border-blue-500
                        hover:shadow-xl hover:-translate-y-1
                        transition duration-300 space-y-4 flex flex-col text-center ">

               <div class="space-y-4">
                    <h1 class="text-2xl text-gray-400">
                       Task 1
                    </h1>
                   <span class="text-sm text-gray-400">
                       Task Will Be Displayed Here....
                    </span>
               </div>
            </div>


            <!-- Task 2 -->
            <div id="task2" class="bg-white rounded-xl p-5 shadow-md
                        border-l-4 border-blue-500
                        hover:shadow-xl hover:-translate-y-1
                        transition duration-300 space-y-4 flex flex-col text-center ">

               <div class="space-y-4">
                    <h1 class="text-2xl text-gray-400">
                       Task 2
                    </h1>
                   <span class="text-sm text-gray-400">
                       Task Will Be Displayed Here....
                    </span>
               </div>
            </div>`
                }

}

