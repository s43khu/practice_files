int b=13;
const int tp=2;
const int ep=3;

float d;
unsigned int t;

void setup() {
  // put your setup code here, to run once:

pinMode(tp,OUTPUT);
pinMode(ep,INPUT);
pinMode(b,OUTPUT);
}

void loop() {
  // put your main code here, to run repeatedly:
  digitalWrite(tp,LOW);
  delayMicroseconds(2);
  digitalWrite(tp,HIGH);
  delayMicroseconds(10);
  digitalWrite(tp,LOW);
 // int x=digitalRead(ep);
 t=pulseIn(ep,HIGH);
 d=0.034*d/2;
  if(d<=50.6)
  {
    tone(b,0);
    delay(1000);
  }
  else
  v {v;bl\
  noTone(b);
  }


}
