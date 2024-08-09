
import { ImageResponse } from '@vercel/og'

export const config = {runtime: 'edge'};

export default async function handler(req: { url: string | URL; }) {
    const now = new Date();
    const day = now.getDate();
    const url = new URL(req.url);
    const year = now.getFullYear();
    const month = now.getMonth() + 1;
    const formattedDay = day.toString().padStart(2, '0');
    const queryParams = Object.fromEntries(url.searchParams);
    const formattedMonth = month.toString().padStart(2, '0');

    return new ImageResponse((
        <div style={{ fontSize: 128,background: queryParams.back ? queryParams.back : 'white',color: queryParams.color ? queryParams.color : 'black',width: '100%',height: '100%',display: 'flex',textAlign: 'center',alignItems: 'center',justifyContent: 'center' }}>
          {year}-{formattedMonth}-{formattedDay}
        </div>
    ),{ width: queryParams.width ? Number(queryParams.width) : 1200,height: queryParams.height ? Number(queryParams.height) : 600 });
}
