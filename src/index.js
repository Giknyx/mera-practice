const form = document.createElement('form');
const labelExpensesText = document.createElement('label');
const inputExpensesText = document.createElement('input');
const labelExpensesValue = document.createElement('label');
const inputExpensesValue = document.createElement('input');
const submit = document.createElement('input');
const divList = document.createElement('div');
const list = document.createElement('ul');

labelExpensesText.htmlFor = 'expensesText';
labelExpensesText.innerText = 'Spent money on:';
inputExpensesText.type = 'text';
inputExpensesText.name = 'expensesText';
labelExpensesValue.htmlFor = 'expensesValue';
labelExpensesValue.innerText = 'Amount of money:';
inputExpensesValue.type = 'number';
inputExpensesValue.name = 'expensesValue';
submit.type = 'submit';
submit.value = 'Submit';

form.append(labelExpensesText);
form.append(document.createElement('br'));
form.append(inputExpensesText);
form.append(document.createElement('br'));
form.append(labelExpensesValue);
form.append(document.createElement('br'));
form.append(inputExpensesValue);
form.append(document.createElement('br'));
form.append(document.createElement('br'));
form.append(submit);
divList.append(list);
console.log(form);
document.body.append(form);
document.body.append(divList);

form.addEventListener('submit', (event) => {
	if (form.elements.expensesText.value && form.elements.expensesValue.value) {
		const li = document.createElement('li');
		li.innerHTML = `${form.elements.expensesText.value} ${form.elements.expensesValue.value}`;
		list.append(li);
		form.reset();
	} else {
		alert('Invalid input!');
	}
	event.preventDefault();
});
