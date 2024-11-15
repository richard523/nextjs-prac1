// export default function handler(req, res) {
//     console.log("HELLO BUTTON CLICKED");
    
//     if (req.method === 'POST') {
//       // Process a POST request
      
      
//     } else {
//       // Handle any other HTTP method
//     }
//   }
  

import React, {useState, useEffect} from 'react';
import axios from 'axios';


function TextToAPI() {
  
   const handleSubmit = async (event) => {
    // Stop the form from submitting and refreshing the page.
    event.preventDefault()

    // Get data from the form.
    const data = event.target.message.value;
      // last: event.target.last.value,
    

    // Send the data to the server in JSON format.
    const JSONdata = JSON.stringify(data)

    // API endpoint where we send form data.
    const endpoint = 'https://httpbin.org/post'

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
    alert(`Type of data: ${result.data}`)
  }
}
