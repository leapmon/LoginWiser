import Head from 'next/head'
import styles from './styles/Home.module.css'

import Container from './StyledComponents/Page0Container';
import Section from './StyledComponents/Page1Section';
import ColumnLeft from './StyledComponents/Page2ColumnLeft';
import ColumnRight from './StyledComponents/Page3ColumnRight';
import Welcome from './StyledComponents/Page5Welcome';

export default function Home() {
  return (
    
    <Section>
      <Head>
        <title>Login Wiser - Next TS App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ColumnLeft />
      <ColumnRight />      
    </Section>
    
  )
}

