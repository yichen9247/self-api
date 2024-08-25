
export const config = {runtime: 'edge'};

import storeList from "../../scripts/store"
import noticeList from "../../scripts/notice"

export default async function handler(req: { url: string | URL; }) {
    const url = new URL(req.url);
    const queryParams = Object.fromEntries(url.searchParams);

    let returnResult = {};

    if (queryParams.type === 'store') {
        returnResult = { code: 200, data: storeList };
    } else 
    if (queryParams.type === 'notice') {
        returnResult = { code: 200, data: noticeList };
    } else {
        returnResult = { code: 404, data: null };
    }

    return new Response(JSON.stringify(returnResult), {
        headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }
    });
}
