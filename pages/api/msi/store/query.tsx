import storeDetail from "../../../../scripts/storeDetail"

export const config = {runtime: 'edge'};

export default async function handler(req, res) {
    const url = new URL(req.url);
    const queryParams = Object.fromEntries(url.searchParams);

    if (queryParams.type == 'store') {
        const store = storeDetail.find(item => item.id === queryParams.id);
        const returnResult = store ? { code: 200, data: store } : { code: 404, message: 'Not Found' };
        return new Response(JSON.stringify(returnResult), {
            status: returnResult.code,
            headers: {
                'Content-Type': 'application/json',
                // 只允许特定的域名访问
                'Access-Control-Allow-Origin': 'http://ai.music.xiaokolomi.cn'
            }
        });
    } else {
        return new Response(JSON.stringify({ code: 400, message: 'Bad Request' }), {
            status: 400,
            headers: {
                'Content-Type': 'application/json',
                // 这里可以保持通配符，因为400错误响应不需要限制访问
                'Access-Control-Allow-Origin': '*'
            }
        });
    }
}