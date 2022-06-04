#include<Servo.h>
const int tp=8;
const int ep=9;
unsigned long t;
unsigned distance;
int cd(){
  digitalWrite(tp,LOW);
  delayMicroseconds(2);
  digitalWrite(tp,HIGH);
  delayMicroseconds(10);
  digitalWrite(tp,LOW);
  t=pulseIn(ep,HIGH);
  distance=0.017*t;
  return distance;
}
// BELOW CODE IS ABOUT SERVO
Servo my;
void setup()
{
  Serial.begin(9600);
  pinMode(tp,OUTPUT);
  pinMode(ep,INPUT);
  my.attach(10);
}
void loop()
{
  for(int i=0;i<=170;i++)
  {
    my.write(i);
    distance=cd();
    Serial.print("angle=");
    Serial.print(i);
    Serial.print("  distance=");
    Serial.println(distance);
    delay(100);
  }
  for(int i=170;i>=0;i--)
  {
    my.write(i);
       distance=cd();
    Serial.print("angle=");
    Serial.print(i);
    Serial.print("  distance=");
    Serial.println(distance);
    delay(100);
  }
}
