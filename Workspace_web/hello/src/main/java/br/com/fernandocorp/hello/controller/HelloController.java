package br.com.fernandocorp.hello.controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

/* quando eu crio um projeto SpringBoot, na verdade eu vou subir um site na minha máquina
 * como eu acesso?
 *  no browser, digito http://localhost
 *  
 *  o springboot por padrão precisa de um numero de porta, neste caso a 8080
 *  
 *  http://localhost:8080
 */

@RestController  // transforma a classe em uma classe que atende solicitações WEB (via urls)
public class HelloController {
	
	/* neste caso aqui, eu defini o recurso para o qual este método está mapeado, o que significa?
	 * signifca que quando o usuário lá no browser digitar
	 * 
	 * http://localhost:8080/hello
	 * 
	 * vai aparecer pra ele o resultado da execuçao deste método (que no caso é a mensagem Hello World!)
	 */
	@GetMapping("/hello")
	public String sayHello() {
		return "Hello World!";
	}
	
	@GetMapping("/hellohtml")
	public String sayHelloHTML() {
		return    "<html>"
				+ "   <body>"
				+ "       <h1> Bem vindo ao curso de Spring Boot </h1>"
				+ "       <hr>"
				+ "       <p> O Isidro fala pa bune memo ruim!!! Seloco tio </p>"
				+ "   </body>"
				+ "</html>";
	}

	@GetMapping("/produto")
	public Produto exibirProduto() {
		Produto p = new Produto();
		p.setId(987654);
		p.setDescricao("Mesa nova do Isidro que vai acender luzinha");
		p.setPreco(350.00);
		p.setQtde(10);
		return p;
	}

}
