import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="bg-warmGray-900 text-warmGray-200">
      <Head>
        <title>James Thomas - Developer and Dude</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="max-w-screen-md mx-auto px-3 min-h-screen flex flex-col justify-between">
        <header className="py-10">
          <h1 className="text-5xl font-black text-white">James Thomas</h1>
          <p>Front end developer - Digital Marketing</p>
        </header>
        <main className="p-10 bg-gray-800 rounded shadow border border-warmGray-700">
          <h2 className="text-3xl tracking-tight font-bold text-white border-b border-warmGray-700 pb-5">
            Web Development
          </h2>
          <article className="py-5">
            <h3 className="font-bold text-2xl text-lime-300">
              <span role="img" aria-label="gift box">
                🎁
              </span>{' '}
              ZenPop Packs
            </h3>
            <p className="text-lg">
              <a href="https://promo.zenpop.jp">promo.zenpop.jp</a>
            </p>
            <div className="my-3 leading-none">
              <Image
                src="http://www.fillmurray.com/600/420"
                alt="Screenshot"
                width="600"
                height="420"
                className="rounded shadow-lg"
              />
            </div>
            <section className="text-warmGray-200">
              <p className="pb-2">
                This website was built so that customers of{' '}
                <a href="https://zenpop.jp/">
                  ZenPop&apos;s subscription service
                </a>{' '}
                could view information about the goods they receive online. It
                replaced the paper information sheets that used to be included
                in the boxes.
              </p>
              <p>
                With this new website customers around the world have more
                language options when receiving ZenPop goods.
              </p>
            </section>
            <h4 className="mt-5 font-bold text-lg text-lime-300">Features</h4>
            <ul className="list-disc list-inside pl-2 text-lime-100">
              <li>Multi-lingual</li>
              <li>Dark Mode</li>
              <li>95+ Lighthouse Score</li>
              <li>Responsive</li>
              <li>Accessible</li>
            </ul>
            <h4 className="mt-5 font-bold text-lg text-lime-300">Built With</h4>
            <ul className="list-disc list-inside pl-2 text-lime-100">
              <li>Gatsby</li>
              <li>Chakra UI</li>
              <li>Airtable</li>
            </ul>
          </article>
        </main>
        <footer className="py-10">
          <p>This is the footer</p>
        </footer>
      </div>
    </div>
  )
}
