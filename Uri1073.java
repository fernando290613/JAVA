import java.util.Scanner;
public class Uri1073{
    public static void main(String[] args){
        Scanner leitor = new Scanner(System.in);
        int N = leitor.nextInt();
        for (int i=1; i<= N; i++){
            if (i % 2 == 0) System.out.println(i + "^2 = " + (i * i));
        }
    }
}