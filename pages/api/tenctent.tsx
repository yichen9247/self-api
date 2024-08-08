
import { ImageResponse } from '@vercel/og'

export const config = { runtime: 'edge' };

export default async function handler(req: { url: string | URL; }) {
  const url = new URL(req.url);
  const queryParams = Object.fromEntries(url.searchParams);

  return new ImageResponse((
      <div style={{ background: '#f6f6f6',width: '100%',height: '100%',flexDirection: 'column',justifyContent: 'center',alignItems: 'center',display: 'flex',backgroundSize: '100px 100px',backgroundImage: 'radial-gradient(circle at 25px 25px, lightgray 2%, transparent 0%), radial-gradient(circle at 75px 75px, lightgray 2%, transparent 0%)' }}>
        <img alt="avatar" width="256" src={`https://q2.qlogo.cn/g?b=qq&s=640&nk=${queryParams.qq ? queryParams.qq : '10001'}`} style={{ borderRadius: 128 }}/>
      </div>
  ),{ width: 1200,height: 630 });
};
