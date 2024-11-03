// Simulação de dados de usuário registrados
const registeredUsers = [
    {
        email: 'usuario@example.com',
        password: 'senha123',
        firstName: 'João',
        lastName: 'Silva'
    }
];

// Função para salvar dados no localStorage (simulação)
function saveUserData(user) {
    localStorage.setItem('currentUser', JSON.stringify(user));
}

// Função para obter dados do usuário logado
function getCurrentUser() {
    return JSON.parse(localStorage.getItem('currentUser'));
}

// Função para remover dados do usuário (logout)
function logoutUser() {
    localStorage.removeItem('currentUser');
    window.location.href = 'index.html';
}

// Manipulação do formulário de login
const loginForm = document.getElementById('loginForm');
if (loginForm) {
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const email = document.getElementById('loginEmail').value;
        const password = document.getElementById('loginPassword').value;

        // Verifica se o usuário está registrado (simulação)
        const user = registeredUsers.find(user => user.email === email && user.password === password);

        if (user) {
            saveUserData(user);
            window.location.href = 'dashboard.html';
        } else {
            alert('E-mail ou senha incorretos.');
        }
    });
}

// Exibe o nome do usuário no dashboard
const userNameElement = document.getElementById('userName');
if (userNameElement) {
    const currentUser = getCurrentUser();
    if (currentUser) {
        userNameElement.textContent = currentUser.firstName + ' ' + currentUser.lastName;
    } else {
        // Se não estiver logado, redireciona para a página de login
        window.location.href = 'index.html';
    }
}

// Manipulação do botão de logout
const logoutButton = document.getElementById('logoutButton');
if (logoutButton) {
    logoutButton.addEventListener('click', function() {
        logoutUser();
    });
}
