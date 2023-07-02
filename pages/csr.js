import dynamic from 'next/dynamic'

const MainView = dynamic(() => import('./../components/CuratedDemo/Allssr'), {
    ssr: false,
  })
export default function Home() {
  return (
    <MainView showLoadingWidget/>
  )
}
