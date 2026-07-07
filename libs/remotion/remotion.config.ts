import {Config} from '@remotion/cli/config';

// Vorinstalliertes Chromium der Umgebung nutzen (kein eigener Browser-Download)
// chromium_headless_shell = Standalone-Implementierung des klassischen Headless-Modus,
// den Remotion 4.0.x erwartet (der reguläre Chromium-141-Binary hat ihn entfernt)
Config.setBrowserExecutable(
  '/opt/pw-browsers/chromium_headless_shell-1194/chrome-linux/headless_shell'
);
Config.setVideoImageFormat('jpeg');
Config.setOverwriteOutput(true);
