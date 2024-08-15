

import axios from 'axios'
import { ImageResponse } from '@vercel/og'

export const config = {runtime: 'edge'};
const HarmonyOSFont = fetch(new URL('https://fonts.xiaokolomi.cn/fonts/HarmonyOS/HarmonyOS.woff')).then((res) => res.arrayBuffer());

export default async function handler(req: { url: string | URL; }) {
  const url = new URL(req.url);
  const queryParams = Object.fromEntries(url.searchParams);

  return axios.get('https://api.pro.androidide.cn/config').then((data) => {
    if (data.data.code === 200) {
        return new ImageResponse((
            <div style={{ fontSize: 128,background: 'white',color: 'green',width: '100%',height: '100%',display: 'flex',textAlign: 'center',alignItems: 'center',justifyContent: 'center' }}>后端连接成功</div>
        ),{ width: queryParams.width ? Number(queryParams.width) : 1200,height: queryParams.height ? Number(queryParams.height) : 600, });
    } else {
        return new ImageResponse((
            <div style={{ fontSize: 128,background: 'white',color: '#dd524d',width: '100%',height: '100%',display: 'flex',textAlign: 'center',alignItems: 'center',justifyContent: 'center' }}>后端连接失败</div>
        ),{ width: queryParams.width ? Number(queryParams.width) : 1200,height: queryParams.height ? Number(queryParams.height) : 600, });
    }
  }).catch(() => {
    return new ImageResponse((
        <div style={{ fontSize: 128,background: 'white',color: '#dd524d',width: '100%',height: '100%',display: 'flex',textAlign: 'center',alignItems: 'center',justifyContent: 'center' }}>后端连接失败</div>
    ),{ width: queryParams.width ? Number(queryParams.width) : 1200,height: queryParams.height ? Number(queryParams.height) : 600,fonts: [{ name: 'simkaiFont',data: await HarmonyOSFont,style: 'normal'}] });
  });

  
}

