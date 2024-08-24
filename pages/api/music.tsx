// pages/api/proxy-image.js
import axios from 'axios';

export default async (req, res) => {
  try {
    // 外站图片资源的 URL
    const imageUrl = 'https://static-recommend-img.tiangong.cn/music/cos-prod/skm/image/20240702/7wXHfL14haQepNQVpj5yxT.png?image_process=quality,85/resize,w_400/format,webp';

    // 使用 axios 请求外站图片资源
    const response = await axios({
      method: 'GET',
      url: imageUrl,
      responseType: 'arraybuffer', // 以 ArrayBuffer 格式接收数据
    });

    // 这里可以添加缓存逻辑，例如将 response.data 存储到 Redis 或内存中

    // 设置响应头，告诉浏览器这是一个图片文件
    res.setHeader('Content-Type', 'image/webp');

    // 发送图片内容
    res.send(response.data);
  } catch (error) {
    // 如果请求失败，返回错误信息
    console.error('Error fetching the image:', error);
    res.status(500).send('Error fetching the image');
  }
};