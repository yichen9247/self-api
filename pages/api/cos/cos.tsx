
import axios from 'axios';
import apiConfig from '../../../scripts/apiConfig';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest,res: NextApiResponse) {
  const { type } = req.query;
  let resUrl = null, response = null;

  if (!type) return res.status(400).send('404 NotFound');

  if (type === 'image') {
    const { image } = req.query;
    res.setHeader('Content-Type', 'image/webp');
    resUrl = new URL(image as string, apiConfig.app_cos).href;
  } else
  if (type === 'audio') {
    const { audio } = req.query;
    resUrl = apiConfig.app_cos + audio;
    res.setHeader('Content-Type', 'audio/mpeg');
  }

  response = await axios({ method: 'GET', url: resUrl, responseType: 'arraybuffer' });
  res.send(response.data);
};