
export const config = {runtime: 'edge'};

const noticeList = [
    {
        title: '如何提升音频的音质',
        cover: 'https://pic.imgdb.cn/item/66ca8f87d9c307b7e954e99e.jpg',
        author: '逐梦网站运营',
        avatar: 'https://q2.qlogo.cn/g?b=qq&s=640&nk=2169347942',
        create: '2024-08-25 08:00',
        content: '<p>本网站上下载的所有音频均需通过音乐制作软件提升音质才能使用，否则无法通过音频音质检测，以下是提升音质的方法之一，前往<a target="_blank" href="https://xstudio.music.163.com/">X-Studio</a>上下载音乐制作软件，下载完成后打开软件，将音频拖进轨道，然后点击页面右上角的导出按钮，比特率选择32Bit，格式选择Wav，采样率选择48.000 Khz，声道选择立体声，导出轨道选择合并，然后再点击确认按钮，至此音频音质提升成功。</p>'
    }, {
        title: '逐梦网站试运营公告',
        cover: 'https://files.superbed.cn/proxy/7468686c6f2633337a7570796f326f696c796e7e7978327f72336f68736e793375717d7b796f332b28337878332a2a7f24242c797d78257f2f2c2b7e2b7925252b2b28787832766c7b',
        author: '逐梦网站运营',
        avatar: 'https://q2.qlogo.cn/g?b=qq&s=640&nk=2169347942',
        create: '2024-08-23 00:00',
        content: '<p>欢迎使用逐梦音乐工作站，本网站适用于音乐爱好者学习交流使用，本网站上的媒体资源禁止用于商业用途，一经发现将追究其法律责任，若有侵权的地方，请将相关证明文件发送至邮箱865252486@qq.com，核实后将对侵权的地方进行下架处理。</p>'
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
