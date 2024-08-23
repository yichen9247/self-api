
export const config = {runtime: 'edge'};

const noticeList = [
    {
        title: '逐梦网站试运营公告',
        cover: 'https://pic.imgdb.cn/item/66c86c7fd9c307b7e9751cca.jpg',
        author: '逐梦运营',
        avatar: 'https://v-api.xiaokolomi.cn/api/avatar?qq=865252486',
        create: '2024-08-23 00:00',
        content: `
            <p>欢迎使用逐梦音乐工作站，本网站适用于音乐爱好者学习交流使用，本网站上的媒体资源禁止用于商业用途，一经发现将追究其法律责任，若有侵权的地方，请将缘由和证明文件发送至邮箱：865252486@qq.com，核实后将对侵权的地方进行下架处理。</p>
        `
    }
];

export default async function handler(req: { url: string | URL; }) {
    const url = new URL(req.url);
    const queryParams = Object.fromEntries(url.searchParams);

    let returnResult = {};

    if (queryParams.type === 'notice') {
        returnResult = {
            code: 200,
            data: noticeList
        };
    } else {
        returnResult = {
            code: 404,
            data: null,
        };
    }

    return new Response(JSON.stringify(returnResult), {
        headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }
    });
}
