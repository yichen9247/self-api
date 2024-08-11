
import { ImageResponse } from '@vercel/og'

export const config = {runtime: 'edge'};

const simkaiFont = fetch(new URL('https://fonts.xiaokolomi.cn/fonts/simkai.ttf', import.meta.url)).then((res) => res.arrayBuffer());

export default async function handler(req: { url: string | URL; }) {
  const url = new URL(req.url);
  const queryParams = Object.fromEntries(url.searchParams);

  return new ImageResponse((
      <div style={{ fontSize: 128,background: queryParams.back ? queryParams.back : 'transparent',color: queryParams.color ? queryParams.color : 'red',width: '100%',height: '100%',display: 'flex',textAlign: 'center',alignItems: 'center',justifyContent: 'center' }}>
        {queryParams.name ? queryParams.name : 'Default Text'}
      </div>
  ),{ width: queryParams.width ? Number(queryParams.width) : 1200,height: queryParams.height ? Number(queryParams.height) : 600,fonts: [{ name: 'simkaiFont',data: await simkaiFont,style: 'normal'}], });
}
