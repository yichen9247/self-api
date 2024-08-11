
import { ImageResponse } from '@vercel/og'

export const config = { runtime: 'edge' };

export default async function handler(req: { url: string | URL; }) {
    const url = new URL(req.url);
    const queryParams = Object.fromEntries(url.searchParams);

    return new ImageResponse((
        <img alt="avatar" src={`https://github-readme-stats.vercel.app/api?username=${queryParams.username ? queryParams.username : 'github'}&show_icons=true&theme=transparent&title_color=65b587&icon_color=7dc09a&border_color=7dc09a`} style={{ width: 256, height: 256 }}/>
    ),{ width: 467,height: 195 });
};
