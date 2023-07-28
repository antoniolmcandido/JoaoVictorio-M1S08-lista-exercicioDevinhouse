function verificarAutenticacao() {
  const dadosUsuario = localStorage.getItem('dados_usuario');

  if (!dadosUsuario) {
    window.location.href = 'index.html';
  }
}

verificarAutenticacao();
