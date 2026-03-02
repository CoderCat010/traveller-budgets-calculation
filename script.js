// set counter
let clickCount = 0;

// twice clicked button count
let duplicateClick = [];

// get cards contents 
const cardContainer = document.getElementById('cards-container');

cardContainer.addEventListener('click', function(event){
    // get al buttons
    const allBtns = event.target.closest('.card-btn');
    console.log(allBtns);
    
    // check if user clicked same button twice.
    if(duplicateClick.includes(allBtns)){
        return alert("⚠️Sorry! you can't book same ticket twice");
        
    }else{
        duplicateClick.push(allBtns);
        clickCount++;
        const counter = document.getElementById('count-icon').textContent = clickCount;
        return counter;
    }
    
})