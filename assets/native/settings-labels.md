# Starways Android app: settings labels

Exact labels as they appear in the app (commit 61d2eb9 in sidequest-tomas/starways), in English and Swedish, with a
one-line description of what each setting does. Screenshots: `settings-en.png` (Settings with Advanced mode and Boat
mode on) and `boat-mode-en.png` (the boat-mode measurement screen with its progress ring), both from the Android
emulator in demo mode.

| English | Svenska | What it does |
|---|---|---|
| **Settings** | **Inställningar** | The settings dialog, opened from the gear (⚙) on the start screen and the map. |
| **Language**: Svenska / English | **Språk**: Svenska / English | Switches the app between Swedish and English immediately. The default follows the phone's language. |
| **Night mode**<br>*Black and deep red, low brightness – keeps your night vision* | **Nattläge**<br>*Svart och djuprött, låg ljusstyrka – stör inte mörkerseendet* | Turns all screens, the map and the sky view black and deep red, and lowers the screen brightness. |
| **Step length: 0.72 m** (slider 0.45–1.10 m) | **Steglängd: 0,72 m** | Length of one step for walking dead reckoning (Track). |
| *Calibrated automatically when you compare with GPS while tracking.* (only in Advanced mode) | *Kalibreras automatiskt när du jämför med GPS under spårning.* | Comparing with GPS during Track re-estimates the step length from a mostly straight leg. |
| **Remind me to sync with the stars every (minutes)**: 15 / 30 / 60 / 120 | **Påminn om stjärnsynk var (minuter)**: 15 / 30 / 60 / 120 | While tracking, how often the app reminds you to stop and take a new star fix (it also reminds you when the heading becomes too uncertain). Default 30. |
| **Advanced mode**<br>*Compare with GPS (and the network), boat mode* | **Avancerat läge**<br>*Jämför med GPS (och nätet), båtläge* | Off by default. Shows the **Compare GPS** button on the map and the boat-mode settings. (The network/CAMARA comparison exists only in the developer build, not in the Play Store app, which has no internet permission.) |
| **Boat mode**<br>*A 2-minute measurement with the main camera that copes with a rolling boat. Track uses course and speed instead of steps.* | **Båtläge**<br>*2 minuters mätning med huvudkameran som klarar sjögång. Spåra använder kurs och fart i stället för steg.* | Shown only in Advanced mode. "Find position" becomes **Measure at sea (2 min)** / **Mät till sjöss (2 min)**. Experimental: tested in simulation and in the emulator's demo mode, not yet on a real boat. |
| **Speed: 5.0 knots** (slider 0–20 knots) | **Fart: 5,0 knop** | Shown when Boat mode is on (also on the map). Boat speed used for dead reckoning at sea. |
| **Forget the camera calibration** | **Glöm kamerakalibreringen** | Only when settings are opened from the map. Deletes the saved camera/accelerometer correction from the 4-turn calibration. |
| **Done** | **Klar** | Closes the dialog. |

## Boat-mode measurement screen (`boat-mode-en.png`)

| English | Svenska |
|---|---|
| Boat mode | Båtläge |
| *m:ss* countdown and *N* star frames | *m:ss* och *N* stjärnbilder |
| Locked on the stars – hold your course | Låst på stjärnorna – håll kursen |
| Looking for stars… | Letar stjärnor… |
| Yaw *x.x*° | Gir *x,x*° |
| The boat is turning – hold your course while measuring | Båten girar – håll kursen under mätningen |
| Lost the stars – check the camera can see the sky | Tappade stjärnorna – kontrollera att kameran ser himlen |
| Cancel | Avbryt |
