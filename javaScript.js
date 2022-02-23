function calculaData(){

	var d = new Date();

	var nomeDia = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];
	
	document.getElementById("diaSemana").innerHTML = nomeDia[d.getDay()];
	
	var nomeMes = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
	var numeroDia = d.getDate();
	var mes = nomeMes[d.getMonth()];
	var ano = d.getFullYear();
	
	document.getElementById("data").innerHTML = numeroDia + " de " + mes + " de " + ano;
	
	var mensagem = ["Insista, persista e nunca desista.", 
					"Deixe pra trás o que não te leva pra frente.", 
					"Você não pode mudar o vento, mas pode ajustar as velas para chegar onde quer", 
					"Que seus sonhos sejam maiores que seus medos.", 
					"Em cada queda há uma oportunidade para levantar mais forte.", 
					"Acreditar é a força que nos permite subir os maiores degraus na escada da vida", 
					"Se jogue no que te faz sorrir.", 
					"Otimismo é esperar pelo melhor. Confiança é saber lidar com o pior.", 
					"Todo dia é dia de alimentar o coração com boas energias.", 
					"Todo pensamento positivo te impulsiona na direção certa.", 
					"Quando tudo for pedra, atire a primeira flor.", 
					"Deixe a alegria de vicer brotar no seu coração.", 
					"Não tem hora melhor do que o agora!", 
					"Um dia feliz começa com um sorriso no rosto.", 
					"O futuro pertence àqueles que acreditam na beleza de seus sonhos.", 
					"Comece acreditando que é possível.", 
					"Que o dia seja leve, que a tristeza seja breve.", 
					"Que tudo que for bom, transborde!", 
					"Se é pra ter uma crise, que seja de riso!", 
					"A persistência é o caminho do êxito", 
					"Não deixe que as pessoas te façam desistir daquilo que você mais quer na vida. Acredite. Lute. Conquiste. E acima de tudo, seja feliz.", 
					"Não importa o que você decidiu. O que importa é que isso te faz feliz.", 
					"Se a vida não ficar mais fácil, trate de ficar mais feliz.", 
					"Toda conquista começa com a decisão de tentar.", 
					"Vai. E se der medo, vai com medo mesmo.", 
					"Você é mais forte do que imagina. Acredite.", 
					"Se não puder fazer tudo, faça tudo que puder.", 
					"O importante não é vencer todos os dias, mas lutar sempre.", 
					"Esqueça os piores momentos da sua vida e faça os melhores se tornarem inesquecíveis.", 
					"Seja seu foco. Faça as coisas por você, não pelos outros.", 
					"Se você não está disposto a arriscar, esteja disposto a uma vida comum."];
	
	document.getElementById("mensagem").innerHTML = mensagem[(d.getDate()) - 1];
	
}

function calculaHora(){

	var d= new Date();
	
	if(d.getHours() < 10){
		var hora = "0" + d.getHours();
	}else{
		var hora = d.getHours();
	}

	if(d.getMinutes() < 10){
		var minuto = "0" + d.getMinutes();
	}else{
		var minuto = d.getMinutes();
	}

	if(d.getSeconds() < 10){
		var segundo = "0" + d.getSeconds();
	}else{
		var segundo = d.getSeconds();
	}

	document.getElementById("hora").innerHTML = hora + ":" + minuto + ":" + segundo;

	setTimeout(calculaHora,"1000");
	
}	
