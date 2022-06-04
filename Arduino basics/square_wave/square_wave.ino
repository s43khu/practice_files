
void setup()
{
  Serial.begin(9600);
  
}

void loop()
{
    for (int x = 0; x <= 100; x++) {
      Serial.println(0);
      delay(50);
   }
   for (int x = 99; x >= 0; x--) {
      Serial.println(100);
      delay(50);
}

}
