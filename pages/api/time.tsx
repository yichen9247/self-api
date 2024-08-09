
import { ImageResponse } from '@vercel/og'

export const config = {runtime: 'edge'};

export default async function handler(req: { url: string | URL; }) {
    const now = new Date();
    const url = new URL(req.url);
    const hours = now.getHours().toString().padStart(2, '0');
    const queryParams = Object.fromEntries(url.searchParams);
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');

  return new ImageResponse((
      <div style={{ fontSize: 128,background: queryParams.back ? queryParams.back : 'white',color: queryParams.color ? queryParams.color : 'black',width: '100%',height: '100%',display: 'flex',textAlign: 'center',alignItems: 'center',justifyContent: 'center' }}>
        {hours}:{minutes}:{seconds}
      </div>
  ),{ width: queryParams.width ? Number(queryParams.width) : 1200,height: queryParams.height ? Number(queryParams.height) : 600 });
}
