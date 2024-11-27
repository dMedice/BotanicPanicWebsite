document.addEventListener("DOMContentLoaded", function() {
	const form = document.getElementById("CadastroUsuarioForm");


	form.addEventListener("submit", async (event) => {
		// Previne o comportamento padrão do formulário, que recarregaria a página
		event.preventDefault();


		// Captura os valores inseridos nos campos do formulário
		const nome = document.getElementById("nome_cad").value;
		const email = document.getElementById("email_cad").value;
		const telefone = document.getElementById("fone_cad").value;

		// Validação simples para garantir que os dados essenciais foram preenchidos
		if (!nome || !email || !telefone) {
			alert("Por favor, preencha todos os campos!");
			return;
		}


		// Tenta enviar uma requisição para o backend para cadastrar o usuário
		try {
			const response = await fetch("http://localhost:8080/usuarios", {
				method: "POST",  // Define o método HTTP como POST para enviar dados
				headers: {
					"Content-Type": "application/json",  // Define o tipo de conteúdo como JSON
				},
				// Converte os dados do formulário em uma string JSON e envia no corpo da requisição
				body: JSON.stringify({
					nome,
					email,
					telefone
				}),
			});


			// Verifica se a resposta foi bem-sucedida (status HTTP 200-299)
			if (response.ok) {
				// Exibe uma mensagem de sucesso para o usuário
				alert("Usuário cadastrado com sucesso!");


				// Limpa os campos do formulário
				form.reset();
			} else {
				// Caso haja um erro, exibe uma mensagem de erro para o usuário
				const errorText = await response.text();  // Recupera o corpo da resposta com o erro
				alert(`Erro ao cadastrar o usuário: ${errorText}`);
			}
		} catch (error) {
			// Caso ocorra um erro na requisição, exibe-o no console
			console.error("Erro ao cadastrar o usuário:", error);
			alert("Erro ao cadastrar o usuário. Confira os logs para mais detalhes.");
		}
	});
});
