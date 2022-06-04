#include <Servo.h>

Servo myservo1;




int pos = 0;    

void setup() {
  myservo1.attach(9); 
   myservo1.write(0);
}

void loop() {
  for (int n=0;n<=5;n++)
  {
  
    myservo1.write(99);
      delay(1000);                  
    myservo1.write(120);
    delay(1000);
  }
  delay(1000);
        
}
