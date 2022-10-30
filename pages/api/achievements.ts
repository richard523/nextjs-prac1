import type { NextApiRequest, NextApiResponse } from 'next'
import type { Achievement } from '../../interfaces'

// Fake users data
const achievements: Achievement[] = 
[
  { id: 1, description: "Youtube Transcript Project"}, 
  { id: 2, description: "Data Security Ecommerce Website"},  
  { id: 3, description: "Computervision Hackathon"} 
];

export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  // Get data from your database
  res.status(200).json(achievements)
  // console.log(descriptions)
}
