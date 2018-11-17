import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.DatagramPacket;
import java.net.DatagramSocket;
import java.net.InetAddress;


class ChatServer {
 boolean status = true;
     int port = 5252;
     int sampleRate = 44100;
   static DatagramSocket serverSocket;
  public static void listen(){        
 System.out.println("RUN");
       final Thread listendat = new Thread(new Runnable() {
           @Override
           public void run() {
              try{
                  listenData();
              }catch (Exception e){
                  System.out.println(e.getCause().toString());
              }
           }
       });
     listendat.start();
    }

    private static void listenData() throws Exception {
        System.out.println("Running");
        byte[] receiveData = new byte[1280];
        serverSocket = new DatagramSocket(169);
        final InetAddress destination = InetAddress.getByName("10.0.2.2");

        while(true){
            DatagramPacket receivePacket = new DatagramPacket(receiveData, receiveData.length);
            serverSocket.receive(receivePacket);
            System.out.println(new String(receivePacket.getData())+""+receivePacket.getAddress() + ""+receivePacket.getPort());
        }
    }  

public static void main(String[] args) throws Exception {
ChatServer.listen();       
    }
  }

