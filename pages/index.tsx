
import Head from 'next/head'

export default function Page() {
  return (
    <div>
      <Head>
        <title>Vercel Image API</title>
        <link rel="stylesheet" href="assets/style.css" />
        <meta name="og:title" content="Vercel Edge Network" />
        <meta name="og:description" content="Vercel Edge Network" />
      </Head>
      <div className="hello-container">
          <h1 className="hello-title">欢迎使用</h1>
          <p className="hello-desc">此Image API基于Vercel Edge Runtime和NextJS进行开发</p>
          <a href="#" title="查看文档" className="hello-button button-doc">查看文档</a>
      </div>
    </div>
  )
}
