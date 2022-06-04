int x,y;
void setup()
{
  Serial.begin(9600);
  
}

void loop()
{
  for(y=-1;y<=1;y++);
  {
    if(y==-1)
    {
      for(x=0;x<=2;x++);
      Serial.println(x);
      Serial.println(y);
    
    }
  }
}
