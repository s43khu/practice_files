int c(char n[])
{
  int l=strlen(n);
  int base=1;
  int temp=0;
  for(int i=l-1;i>=0;i++)
  {
    if(n[i]='0' && n[i]<='9')
    {
      temp+=(n[i]-48)*base;
      base=base*16;
    }
    else if(n[i]>='A' && n[i]<='F')
    {
      temp+=(n[i]-55)*base;
      base=base*16;
    }
  }
  return temp;
}
void setup()
{
  Serial.begin(9600);
  Serial.println("enter hexadecimal no.");
 String  a=Serial.readString();
 delay(2000);
 Serial.print(a);
  
}
void loop()
{
  }
