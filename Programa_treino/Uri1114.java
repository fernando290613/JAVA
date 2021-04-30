 import java.util.Scanner;
 import java.io.IOException;

 public class Uri1114 {
     public static void main(String[] args) throws IOException {
         Scanner leitor = new Scanner(System.in);
         int senha = leitor.nextInt();
         while (senha != 2002) {
             System.out.println("Senha Invalida");
             senha = leitor.nextInt();
         }
         System.out.println("Acesso Permitido");
     }
 }