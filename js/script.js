
// ====================================variable=======================================

let bill=document.querySelector(".bill_amount");
let tipPercentage = document.querySelectorAll('.grid-responsive button');
let custom = document.querySelector('.custom');
let people = document.querySelector('.people');
let rest = document.querySelector('.rest');
let totalCost = document.querySelector('.costforone');
let tipCost = document.querySelector('.totalcost');
// apply the code when the page updated
document.addEventListener('DOMContentLoaded', function () {

    // Event listeners
    //  get the value of percentage
    tipPercentage.forEach(button => {
        button.addEventListener('click', () => {
            button.style.backgroundColor=" hsl(185, 41%, 84%)";
            // Get the tip percentage from the button's text content
            const tipPercentage = parseFloat(button.textContent);
            calculateTip(tipPercentage);
        });
    });

    custom.addEventListener('input', () => {
        // Get the custom tip percentage
        const customPercentage = parseFloat(custom.value);
        calculateTip(customPercentage);
    });

    people.addEventListener('input', () => {
        calculateTip(); // Recalculate when the number of people changes
    });


    function calculateTip(tipPercentage) {
        // Get values from inputs
        const billAmount = parseFloat(bill.value);
        const numberOfPeople = parseInt(people.value);

        // Validate inputs
        if (isNaN(billAmount) || billAmount <= 0 || isNaN(numberOfPeople) || numberOfPeople <= 0) {
         
            console.log("'Please enter valid values'")
            return;
        }

        // Calculate tip and total amounts
        const tipAmount = isNaN(tipPercentage) ? 0 : (tipPercentage / 100) * billAmount;
        console.log(tipAmount);
        const totalAmount = billAmount + tipAmount;
        const amountPerPerson = totalAmount / numberOfPeople;

        // Display results
        tipCost.textContent = `$${amountPerPerson.toFixed(2)} `;
        totalCost.textContent = `$${tipAmount.toFixed(2)}`;
    }
});


rest.addEventListener("click", ()=>{
    bill.value = ''
	people.value = ''
	custom.value = ''
	totalCost.textContent = '$0.00'
	tipCost.textContent = '$0.00'
})

