import React from 'react';
import {
  AbsoluteFill,
  Sequence,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from 'remotion';
import {brand} from './brand';

// Skript-Format: entspricht der Szenentabelle aus ugc-scripts/ bzw. ad-creatives/.
// Eine Szene = ein Text-Panel mit optionalem Overlay.
export type Szene = {
  dauerSekunden: number;
  text: string; // Haupttext der Szene (gesprochener Text / Kernaussage)
  overlay?: string; // Text-Overlay (kurz, plakativ)
};

export type KnuviSkript = {
  titel: string;
  szenen: Szene[];
  cta: string; // Abbinder – bei Ads mit Kauf-CTA, organisch nur weicher CTA
  zeigeSlogan?: boolean;
};

const SzenePanel: React.FC<{szene: Szene; index: number}> = ({szene, index}) => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const eintritt = spring({frame, fps, config: {damping: 200}});
  const bg = index % 2 === 0 ? brand.colors.background : brand.colors.backgroundAlt;

  return (
    <AbsoluteFill
      style={{
        backgroundColor: bg,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 80,
        fontFamily: brand.font.family,
      }}
    >
      {szene.overlay ? (
        <div
          style={{
            position: 'absolute',
            top: 220,
            backgroundColor: brand.colors.accent,
            color: '#fff',
            padding: '18px 42px',
            borderRadius: 999,
            fontSize: 44,
            fontWeight: brand.font.weightHeadline,
            transform: `translateY(${interpolate(eintritt, [0, 1], [-40, 0])}px)`,
            opacity: eintritt,
          }}
        >
          {szene.overlay}
        </div>
      ) : null}
      <div
        style={{
          color: brand.colors.text,
          fontSize: 72,
          fontWeight: brand.font.weightHeadline,
          textAlign: 'center',
          lineHeight: 1.25,
          opacity: eintritt,
          transform: `scale(${interpolate(eintritt, [0, 1], [0.94, 1])})`,
        }}
      >
        {szene.text}
      </div>
    </AbsoluteFill>
  );
};

const Abbinder: React.FC<{cta: string; zeigeSlogan: boolean}> = ({cta, zeigeSlogan}) => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const eintritt = spring({frame, fps, config: {damping: 200}});
  return (
    <AbsoluteFill
      style={{
        backgroundColor: brand.colors.soft,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 80,
        fontFamily: brand.font.family,
        gap: 40,
      }}
    >
      <div
        style={{
          color: brand.colors.text,
          fontSize: 76,
          fontWeight: brand.font.weightHeadline,
          textAlign: 'center',
          lineHeight: 1.2,
          opacity: eintritt,
        }}
      >
        {cta}
      </div>
      {zeigeSlogan ? (
        <div
          style={{
            color: brand.colors.text,
            fontSize: 42,
            fontWeight: brand.font.weightBody,
            opacity: eintritt * 0.85,
          }}
        >
          {brand.claims.slogan} · {brand.claims.shop}
        </div>
      ) : null}
    </AbsoluteFill>
  );
};

export const KnuviAd: React.FC<KnuviSkript> = ({szenen, cta, zeigeSlogan = true}) => {
  const {fps} = useVideoConfig();
  const abbinderFrames = 3 * fps;
  let start = 0;
  const sequenzen = szenen.map((szene, i) => {
    const dauer = Math.round(szene.dauerSekunden * fps);
    const seq = (
      <Sequence key={i} from={start} durationInFrames={dauer}>
        <SzenePanel szene={szene} index={i} />
      </Sequence>
    );
    start += dauer;
    return seq;
  });

  return (
    <AbsoluteFill>
      {sequenzen}
      <Sequence from={start} durationInFrames={abbinderFrames}>
        <Abbinder cta={cta} zeigeSlogan={zeigeSlogan} />
      </Sequence>
    </AbsoluteFill>
  );
};

export const skriptDauerInFrames = (skript: KnuviSkript, fps: number): number =>
  skript.szenen.reduce((sum, s) => sum + Math.round(s.dauerSekunden * fps), 0) + 3 * fps;
