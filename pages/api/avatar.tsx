
import { ImageResponse } from '@vercel/og'

export const config = { runtime: 'edge' };

export default async function handler(req: { url: string | URL; }) {
    const url = new URL(req.url);
    const queryParams = Object.fromEntries(url.searchParams);

    return new ImageResponse((
        <img alt="avatar" src={`https://q2.qlogo.cn/g?b=qq&s=640&nk=${queryParams.qq ? queryParams.qq : '10001'}`} style={{ width: 256, height: 256 }}/>
    ),{ width: 256,height: 256 });
};
