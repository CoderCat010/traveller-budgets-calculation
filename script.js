// // set counter
// let clickCount = 0;

// // twice clicked button count
// let duplicateClick = [];

// // get cards contents 
// const cardsContainer = document.getElementById('cards-container');

// // get budget button 
// const totalBudgetBtn = document.getElementById('budget-btn');

// // get ticket cost button
// const ticketCostBtn = document.querySelectorAll('.ticket-cost');

// console.log(totalBudgetBtn, ticketCostBtn);



// //------> functionality
// cardsContainer.addEventListener('click', function(event){
//     // get al buttons
//     const allBtns = event.target.closest('.card-btn');
    
//     // check if user clicked same button twice.
//     if(duplicateClick.includes(allBtns)){
//         return alert("⚠️Sorry! you can't book same ticket twice");
//     }
//         duplicateClick.push(allBtns);
//         clickCount++;
//         const counter = document.getElementById('count-icon').textContent = clickCount;

        
//         // sum budget with ticket cost and get total budget
//         for(const values of ticketCostBtn){
//             // convert
//         const totalBudget = parseInt(totalBudgetBtn.textContent);
//         const ticketCost = parseInt(values.textContent);
//         const budgetSum = totalBudget - ticketCost;
        
//         totalBudgetBtn.textContent = budgetSum;
//         }
        
        
// })