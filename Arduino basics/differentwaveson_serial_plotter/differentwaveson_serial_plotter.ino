void setup() {
   Serial.begin(9600);  // initialize serial bus (Serial Plotter)
}
void loop() {
   // Uncomment one of the wave types below to display in Serial Plotter.
   // Serial Plotter window may need to be closed and reopened between runs
   // to remove old plot data.
   // plotCombinedWaves();
   // plotSawtoothWave();
   plotSineWave();
   // plotSquareWave();
   // plotTriangleWave();
}
void plotCombinedWaves() {
   for (float i = 0.0; i <= 2 * PI; i += 0.1) {
      Serial.print(cos(i));  Serial.print(" ");  // cosine wave
      Serial.print(sin(i));  Serial.print(" ");  // sine wave
      Serial.println(i <= PI ? -1.5 : 1.5);      // square wave
   }
}
void plotSawtoothWave() {
   for (int i = 0; i <= 100; i++) {
      Serial.println(i);
   }
}
void plotSineWave() {
   for (float i = 0.0; i <= 2 * PI; i += 0.1) {
      Serial.println(sin(i));
   }
}
void plotSquareWave() {
   for (int i = 0; i <= 100; i++) {
      Serial.println(0);
   }
   for (int i = 0; i <= 100; i++) {
      Serial.println(100);
   }
}
void plotTriangleWave() {
   for (int i = 0; i <= 100; i++) {
      Serial.println(i);
   }
   for (int i = 100; i >= 0; i--) {
      Serial.println(i);
   }
}
