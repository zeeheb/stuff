loadEventListener();

function loadEventListener() {
  document.addEventListener('DOMContentLoaded', loadContacts);
}

function loadContacts() {
  const data = localStorage.getItem('Contatos');
  let pessoasVec = JSON.parse(data);

  const table = document.querySelector('.table');
  //   const row = document.createElement('tr');

  pessoasVec.forEach(pessoasVec => {
    console.log(pessoasVec);
    const row = document.createElement('tr');
    const cell = document.createElement('td');
    const cellfname = document.createTextNode(pessoasVec.fname + ' ');
    const celllname = document.createTextNode(pessoasVec.lname + ' ');
    const cellemail = document.createTextNode(pessoasVec.em + ' ');
    //const cellpw = document.createTextNode(pessoasVec.passw + ' ');
    const cellphone = document.createTextNode(pessoasVec.phn + ' ');

    const mybr = document.createElement('br');

    cell.appendChild(cellfname);
    cell.appendChild(celllname);
    cell.appendChild(cellemail);
    //cell.appendChild(cellpw);
    cell.appendChild(cellphone);
    row.appendChild(cell);

    table.appendChild(row);
    table.appendChild(cell);
  });
}
