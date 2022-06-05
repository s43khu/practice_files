 float r1=50000;
  float r2=25000;
float v;
  int x=0;
void setup()
{
 
  Serial.begin(9600);

}

void loop()
{
x=analogRead(A0);
v=x*(5/1024)*((r1+r2)/r1);
  Serial.println(v);
  delay(100);
}
