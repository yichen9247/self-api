
import axios from 'axios'
import { ImageResponse } from '@vercel/og'

export const config = {runtime: 'edge'};
const HarmonyOSFont = fetch(new URL('https://fonts.xiaokolomi.cn/fonts/HarmonyOS/HarmonyOS.woff')).then((res) => res.arrayBuffer());

export default async function handler(req: { url: string | URL; }) {
    return axios.get('https://api.github.com/orgs/AndroidIDE-CN/members').then(async (data) => {
        console.log(data.data)
        return new ImageResponse((
            <div style={{ fontSize: 48,background: 'white',color: 'green',width: '100%',height: '100%',display: 'flex',textAlign: 'center',alignItems: 'center',justifyContent: 'center' }}>
                {data.data[0]}
            </div>
        ),{ width: 1200,height: 600, });
    });
}

// fonts: [{ name: 'simkaiFont',data: await HarmonyOSFont,style: 'normal'}]