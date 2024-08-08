
import Head from 'next/head'

export default function Page() {
  return (
    <div>
      <Head>
        <meta name="og:title" content="Vercel Edge Network" />
        <meta name="og:description" content="Vercel Edge Network" />
        <link rel="stylesheet" href="assets/style.css" />
      </Head>
      <div className="hello-container">
          <h1 className="hello-title">欢迎使用</h1>
          <p className="hello-desc">使用Next.JS和TypeScript构建的高性能Image API</p>
          <a href="#" title="查看文档" className="hello-button button-doc">查看文档</a>
      </div>
    </div>
  )
}
