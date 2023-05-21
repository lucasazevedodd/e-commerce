function login(event) {
  event.preventDefault();
  const users = [
    { username: "lucas", password: "123" },
    { username: "lucas", password: "123" },
  ];

  const { username, password } = document.forms.loginForm;

  if (username.value === "lucas" && password.value === "123") {
    window.location.href = "index.html";
    return;
  }

  alert("Usuário ou senha inválidos!");
}
