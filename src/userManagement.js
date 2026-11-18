const currentUser = JSON.parse(localStorage.getItem('currentUser'));
const users = JSON.parse(localStorage.getItem('users')) || [];

// Nobody logged in -> back to login
if (!currentUser || currentUser.role !== 'admin') {
  window.location.href = 'login.html';
}

document.getElementById('welcome').textContent = 'Welcome ' + currentUser.username;

const tbody = document.getElementById('usersTable');
users.forEach(user => {
  const row = document.createElement('tr');
  [user.username, user.email, user.dob, user.role].forEach(value => {
    const cell = document.createElement('td');
    cell.className = 'p-3 border-t';
    cell.textContent = value ?? '';
    row.appendChild(cell);
  });
  tbody.appendChild(row);
});
