int x,y,m,c;

void setup()
{
  Serial.begin(9600);
  // we are plotting y=mx+c
  Serial.print("enter the value of slope = ");
  delay(500);
  m=Serial.parseInt();
  Serial.print(m);
  Serial.println("enter the value of constant = ");
  delay(500);
 c=Serial.parseInt();
 Serial.println(c);
}
void loop()
{
  for(x=0;x<100;x++)
  {
    
  }
  exit;
  delay(1000);
}
