// default count
let clickCount = 0;

// check if any card's button clicked twice
const clickedTwice = [];

// get cards parent id to get each one buttons .
const cardsParent = document.getElementById('cards-container');

// get budget button 
const budgetBtn = document.getElementById('budget-btn');


// apply event listener to the cards container (using event delegation) to access each button when any button inside the cards is clicked.
cardsParent.addEventListener('click', function(event){
    //-----> get cards all button
    const allBtn = event.target.closest('.card-btn');

    // check wether user clicked anywhere except button.
    if(!allBtn) return;

    // check if user clicked a button twice.
    if(clickedTwice.includes(allBtn)){
        return alert("Sorry! you can't book a ticket twice");
    }
    clickedTwice.push(allBtn);

    // increase counting each button when any button inside the cards is clicked.
    clickCount++;

    // get navbar cart counting button
    const countCart = document.getElementById('count-icon');

    // set each counting number on navbar counting cart.
    countCart.textContent = clickCount;

    
    //-----> get ticket cost button by event delegation.
    const Alltickets = allBtn.parentElement.querySelector('.ticket-cost');
    const ticketsText = Alltickets.textContent;

    // convert into integer
    const totalTicketCost = parseInt(ticketsText);
    const budgetsText = budgetBtn.textContent;
    const totalBudget = parseInt(budgetsText);

    // check if total budget is not less than ticket cost 
    if(totalBudget < totalTicketCost){
        alert("Sorry! Not enough budget");
        return; 
    }

    // sum total ticket cost with total budget to get final budget.
    const BudgetSum = totalBudget - totalTicketCost
    budgetBtn.textContent =  BudgetSum;
})