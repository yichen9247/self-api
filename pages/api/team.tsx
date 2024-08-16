
import axios from 'axios'
import { ImageResponse } from '@vercel/og'

export const config = {runtime: 'edge'};
const HarmonyOSFont = fetch(new URL('https://fonts.xiaokolomi.cn/fonts/HarmonyOS/HarmonyOS.woff')).then((res) => res.arrayBuffer());

export default async function handler() {
    return axios.get('https://api.github.com/orgs/AndroidIDE-CN/members').then(async (data) => {
        let elements = [];
        const getElement = () => {
            for (let i = 0; i < data.data.length; i++) {
                elements.push(
                    <img key={i} src={data.data[i].avatar_url} style={{ width: 72, height: 72, borderRadius: '50%', margin: '0 10px', marginBottom: '15px' }} />
                )
            }
            return elements;
        }

        return new ImageResponse((
            <div style={{ fontSize: 48,background: 'white',color: '#dd524d',width: '100%',height: '100%',display: 'flex',textAlign: 'center',alignItems: 'center',flexDirection: 'column' }}>
                <h3>AIDE PRO团队成员</h3>
                <div style={{ width: '95%', display: 'flex', alignItems: 'center', justifyContent: 'center',margin: '0 auto', flexWrap: 'wrap' }}>
                    {getElement()}
                </div>
            </div>
        ),{ width: 1200,height: 600,fonts: [{ name: 'simkaiFont',data: await HarmonyOSFont,style: 'normal'}] });
    });
}