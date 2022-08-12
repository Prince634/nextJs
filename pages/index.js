import Head from 'next/head'
import { css } from '@emotion/css';
import PerformanceStats from '../components/PerformanceStats';

const cont = css`
  background: yellow;
`

export default function Home() {
  return (
    <PerformanceStats/>
  )
}
