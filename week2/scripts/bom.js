const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');
const li = document.createElement('li');
const deleteButton = document.createElement('button');

//populating content



button.addEventListener('click', function () {
    //code to be exectued
    if (input.value.trim() !== '') {
        li.textContent = input.value;
        deleteButton.textContent = '❌';
        li.append(deleteButton);
        list.append(li);


        deleteButton.addEventListener('click', function () {
            list.removeChild(li);
            input.focus();

        });

        input.value = '';
        input.focus();
    }
});   