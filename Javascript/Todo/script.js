function addtodo(){

    const todo=document.getElementById('add').value.trim();
    
    if(todo===''){
        alert("Enter A valid data");
        return;
    }

    console.log(todo);

    const htmldata=` <div class="bg-white rounded-xl p-5 shadow-md
                        border-l-4 border-blue-500
                        hover:shadow-xl hover:-translate-y-1
                        transition duration-300">

                <div class="flex justify-between items-start ">

                    <div>
                        <h3 class="text-lg font-bold text-[#3b1028]">
                            ${todo}
                        </h3>

                        <p class="text-gray-500 text-sm mt-2">
                            Practice arrays, objects and functions.
                        </p>
                    </div>

                    <span class="bg-blue-100 text-blue-700
                                 text-xs font-semibold
                                 px-3 py-1 rounded-full">
                        Active
                    </span>

                </div>

                <div class="flex justify-between items-center mt-5">

                    <span class="text-sm text-gray-400">
                        Today
                    </span>

                    <div class="flex gap-2">

                        <button class="text-green-600
                                       hover:bg-green-100
                                       px-3 py-2 rounded-lg">
                            ✓
                        </button>

                        <button class="text-orange-600
                                       hover:bg-orange-100
                                       px-3 py-2 rounded-lg">
                            ✎
                        </button>

                        <button class="text-red-600
                                       hover:bg-red-100
                                       px-3 py-2 rounded-lg">
                            🗑
                        </button>

                    </div>

                </div>

            </div>`

    Taskbar.innerHTML+=htmldata;

    document.getElementById('add').value='';

}