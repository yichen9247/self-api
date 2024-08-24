
import axios from "axios";
import apiConfig from "../../../../scripts/apiConfig"

export const config = {runtime: 'edge'};

export default async function handler(req: { url: string | URL; }) {
    const url = new URL(req.url);
    const reqResult =  await axios.get(`${apiConfig.app_api}topic/query`)

    return new Response(JSON.stringify(reqResult.data), {
        headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }
    });
}
