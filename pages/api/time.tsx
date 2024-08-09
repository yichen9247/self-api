
import { ImageResponse } from '@vercel/og'

export const config = {runtime: 'edge'};

export default async function handler(req: { url: string | URL; }) {
    const now = new Date();
    const url = new URL(req.url);
    const queryParams = Object.fromEntries(url.searchParams);

    const chinaDate = new Date(now.getTime() + now.getTimezoneOffset() * 60000 + 8 * 60 * 60 * 1000);
    const hours = chinaDate.getUTCHours().toString().padStart(2, '0');
    const minutes = chinaDate.getUTCMinutes().toString().padStart(2, '0');
    const seconds = chinaDate.getUTCSeconds().toString().padStart(2, '0');

  return new ImageResponse((
      <div style={{ fontSize: 128,background: queryParams.back ? queryParams.back : 'white',color: queryParams.color ? queryParams.color : 'black',width: '100%',height: '100%',display: 'flex',textAlign: 'center',alignItems: 'center',justifyContent: 'center' }}>
        {hours}:{minutes}:{seconds}
      </div>
  ),{ width: queryParams.width ? Number(queryParams.width) : 1200,height: queryParams.height ? Number(queryParams.height) : 600 });
}
