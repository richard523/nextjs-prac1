import type { User } from '../interfaces'
import useSwr from 'swr'
import Link from 'next/link'
import * as React from 'react';
import localFont from '@next/font/local'



const myFont = localFont({ src: '../components/fonts/DrawnFont-Regular.ttf' })
const fetcher = (url: string) => fetch(url).then((res) => res.json())

export default function Index({
  children,
}: {
  children: React.ReactNode,
}) {
  const { data, error } = useSwr<Achievement[]>('/api/achievements', fetcher)

  if (error) return <div>Failed to load users</div>
  if (!data) return <div>Loading...</div>





  return (
    
    <div className={`${myFont.className} main`}>
    <ul>
    <h1 >welcome to richard's professional RESUME website!</h1>
      <p></p>
      <p> yes... I made a custom font. </p>
      <p> This site will contain a rest api with my...</p>
      <br></br>
      <br></br>
      <br></br>
      
      <p>PROFESSIONAL ACHIEVEMENTS:</p>
    
      
      <style jsx>{`
        .container {
          margin: 50px;
        }
        p {
          color: black;
        }
        
      `}</style>
      <style jsx global>{`

        h1 {
          font-size: 70px;
        }
        p {
          font-size: 50px;

        }
        .main {
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .main div {
          width: 2000px;
          height: 500px;
        }
      `}</style>

      {data.map((achievement) => (
        <li key={achievement.id}>
          <Link href="/achievement/[id]" as={`/achievement/${achievement.id}`}>
            {`Achievement ${achievement.id} ${achievement.description}`}
          </Link>
        </li>
      ))}
    </ul>
          
    
    </div>
    
    
   
    
  )
}


// pages/_app.js


