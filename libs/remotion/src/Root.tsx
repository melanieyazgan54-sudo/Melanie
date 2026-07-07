import React from 'react';
import {Composition} from 'remotion';
import {KnuviAd, KnuviSkript, skriptDauerInFrames} from './KnuviAd';
import {brand} from './brand';

const beispielSkript: KnuviSkript = {
  titel: 'Beispiel',
  szenen: [
    {dauerSekunden: 3, text: 'Kennst du das Gedankenkarussell am Abend?', overlay: 'POV: 23:47 Uhr'},
    {dauerSekunden: 4, text: 'Dein Kopf will nicht aufhören. Dein Körper will nur Ruhe.'},
    {dauerSekunden: 4, text: 'Etwas Gewicht auf der Brust – und alles wird langsamer.', overlay: 'Deep Pressure'},
  ],
  cta: 'Gönn dir eine Umarmung, die bleibt.',
  zeigeSlogan: true,
};

export const RemotionRoot: React.FC = () => {
  return (
    <Composition
      id="KnuviAd"
      component={KnuviAd}
      width={brand.format.width}
      height={brand.format.height}
      fps={brand.format.fps}
      durationInFrames={skriptDauerInFrames(beispielSkript, brand.format.fps)}
      defaultProps={beispielSkript}
      calculateMetadata={({props}) => ({
        durationInFrames: skriptDauerInFrames(props as KnuviSkript, brand.format.fps),
      })}
    />
  );
};
