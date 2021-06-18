import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>  
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />

            <link rel="icon" type="image/png" sizes="32x32" href="favicon-32x32.png"></link>
            <link 
                href="https://fonts.googleapis.com/css2?family=Spartan:wght@700&display=swap" 
                rel="stylesheet" 
            />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument