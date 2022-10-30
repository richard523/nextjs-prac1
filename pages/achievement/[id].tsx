import type { Achievement } from '../../interfaces'
import { useRouter } from 'next/router'
import useSwr from 'swr'

const fetcher = (url: string) => fetch(url).then((res) => res.json())

export default function AchievementPage() {
  const router = useRouter()
  const { data, error } = useSwr<Achievement>(
    router.query.id ? `/api/achievement/${router.query.id}` : null,
    fetcher
  )

  console.log("THIS DATA IS VISIBLE TO CLIENT AND SERVER: " + JSON.stringify(data))

  if (error) return <div>Failed to load achievement</div>
  if (!data) return <div>Loading...</div>
  
  let description = "blank"



  return (
  
  <div>
    <h1>I will keep the font going eventually...</h1>
    <p></p>
    <p>{`Database retreived achievement #${data['achievement']}`}</p>
    <p>{`DESCRIPTION: ${description}`}</p>
  </div>)
}
