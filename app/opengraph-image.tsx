import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'Web3 Learning Academy';
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(to bottom right, #9333ea, #2563eb, #06b6d4)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ fontSize: 120, marginBottom: 20 }}>🎓</div>
        <div
          style={{
            fontSize: 60,
            fontWeight: 'bold',
            color: 'white',
            marginBottom: 20,
          }}
        >
          Web3 Learning Academy
        </div>
        <div
          style={{
            fontSize: 30,
            color: 'rgba(255, 255, 255, 0.9)',
            textAlign: 'center',
          }}
        >
          Learn Blockchain & Web3 • Earn NFT Badges
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
