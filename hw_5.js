
// Как найти?…  1. Таблицу с `id="age-table"`

const ageTable = document.getElementById('age-table');
console.log(ageTable);

// Как найти?…Все элементы label внутри этой таблицы (их три).

ageTable.getElementsByTagName('label');

// Первый td в этой таблице (со словом «Age»)

ageTable.getElementsByTagName('td')[0];

// Форму form с именем name="search".

const form = document.getElementsByName('search')[0];

// Первый input в этой форме.

form.querySelector('input');

// Последний input в этой форме.

const allInputs = form.querySelectorAll('input')
allInputs[allInputs.length-1]

// Что выведет этот код? код выведет body
// <script>
//   let body = document.body;

//   body.innerHTML = "<!--" + body.tagName + "-->";

//   alert( body.firstChild.data ); // body
// </script>