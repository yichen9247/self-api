
import storeDetail from "../../../../scripts/storeDetail"

export const config = {runtime: 'edge'};

export default async function handler(req: any, res: any) {
    const url = new URL(req.url);
    const queryParams = Object.fromEntries(url.searchParams);

    const allowedDomain = 'ai.music.xiaokolomi.cn';
    const origin = req.headers.get('origin');
    if (origin !== allowedDomain) {
        return new Response(JSON.stringify({ code: 403, message: 'Forbidden' }), {
            status: 403,
            headers: { 'Content-Type': 'application/json' }
        });
    }

    if (queryParams.type == 'store') {
        const returnResult = storeDetail.find(item => item.id == queryParams.id) ? { code: 200, data: storeDetail.find(item => item.id == queryParams.id) } : { code: 200, data: '404' };
        return new Response(JSON.stringify(returnResult), {
            status: 200,
            headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }
        });
    } else {
        return new Response(JSON.stringify({ code: 400, message: 'Bad Request' }), {
            status: 400,
            headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }
        });
    }
}
