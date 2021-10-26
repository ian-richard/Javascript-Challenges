public static String compressedString(String message) {
    StringBuilder compressedString = new StringBuilder();
int total = 1;
for (int i = 0; i < message.length() - 1; i++){
if (message.charAt(i) == message.charAt(i+1)){
    total++;
}
else if(total==1){
    compressedString.append(message.charAt(i));
}
else 
{
    compressedString.append(message.charAt(i)).append(total);
    total = 1;
}
}
if(message.charAt(message.length()-2) != message.charAt(message.length()-1))
compressedString.append(message.charAt(message.length()-1));
else
compressedString.append(message.charAt(message.length()-1)).append(total);

return compressedString.toString();
}
}