import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import { Button } from '@mui/material';
import { useRouter } from 'next/router';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Gatitos perigrosos</title>
        <link
          rel="icon"
          href="/favicon.ico"
        />
      </Head>

      <main>
        <div
          style={{
            backgroundColor: 'black',
            display: 'flex',
            alignItems: 'center',
            backgroundImage: 'url(https://images6.alphacoders.com/126/thumb-1920-1265805.png)',
            height: '100vh',
            width: '100vw',
            justifyContent: 'center',
          }}
        >
          <Link href={'/catlist'}>
            <Button variant="contained">Trust me</Button>
          </Link>
        </div>
      </main>
    </div>
  );
}
