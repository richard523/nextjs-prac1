import type { Achievement } from '../interfaces'
import useSwr from 'swr'
import Link from 'next/link'
import * as React from 'react';
import {useEffect, useState, useRef, useCallback} from 'react';
import localFont from '@next/font/local';
// import handleSubmit from '../pages/api/TextToAPI.js';



const myFont = localFont({ src: '../components/fonts/DrawnFont-Regular.ttf' })
const fetcher = (url: string) => fetch(url).then((res) => res.json())
// const [message, setMessage] = useState("asd");
  // setMessage(JSON.parse(message));
const amazon_link = "https://httpbin.org/post";
export default function Index({
  children,
}: {
  children: React.ReactNode,
}) {
  // const { data, error } = useSwr<Achievement[]>('/api/achievements', fetcher)

  // if (error) return <div>Failed to load users</div>
  // if (!data) return <div>Loading...</div>
  console.log("this shit be broken");
  // var obj = JSON.parse(string);
  const handleSubmit = async (event) => {
    // Stop the form from submitting and refreshing the page.
    event.preventDefault()

    // Get data from the form.
    const data = event.target.message.value;
      // last: event.target.last.value,
    

    // Send the data to the server in JSON format.
    const JSONdata = JSON.stringify(data)

    // API endpoint where we send form data.
    const endpoint = 'https://wv0usdnw7l.execute-api.us-east-2.amazonaws.com/transcript-to-summary/generate'

    // Form the request for sending data to the server.
    const options = {
      // The method is POST because we are sending data.
      method: 'POST',
      // Tell the server we're sending JSON.
      headers: {
        'Content-Type': 'application/json',
      },
      // Body of the request is the JSON data we created above.
      body: JSONdata,
    }

    // Send the form data to our forms API on Vercel and get a response.
    const response = await fetch(endpoint, options)

    // Get the response data from server as JSON.
    // If server returns the name submitted, that means the form works.
    const result = await response.json()
    alert(`result: ${result.data}`)
  }
  
  return (
    
    <div className={`${myFont.className} main`}>
    <ul>
      <h1> ENTER A YOUTUBE LINK AND APP WILL SUMMARIZE: </h1>
        
      
      
      {/* <TextToAPI/> */}
      <form onSubmit={handleSubmit}>
        <label htmlFor="message">Message</label>
        <input type="text" id="message" name="message" required />

        {/* <label htmlFor="last">Last Name</label>
        <input type="text" id="last" name="last" required /> */}

        <button type="submit">Submit</button>
       </form>
    

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
          font-size: 20px;

        }
        .summarize {
          width: 520px;
          height: 50px;
          font-size: 20px;
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
        .contact-form {
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .contact-form div {
        }
      `}</style>
    </ul>
    </div>
  )
}


// pages/_app.js


