
import axios from 'axios'
import { ImageResponse } from '@vercel/og'

export const config = { runtime: 'edge' };

export default async function handler(req: { url: string | URL; }) {
    const url = new URL(req.url);
    const queryParams = Object.fromEntries(url.searchParams);

    return axios.get(`https://api.github.com/users/${queryParams.username ? queryParams.username : 'github'}`).then((data) => {
        return new ImageResponse((
            <img alt="avatar" src={data.data['avatar_url']} style={{ width: 256, height: 256 }}/>
        ),{ width: 256,height: 256 });
    });  
};