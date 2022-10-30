import type { NextApiRequest, NextApiResponse } from 'next'
import type { Achievement } from '../../interfaces'

// Fake users data
const achievements: Achievement[] = 
[
  { id: 1, 
      desc: {yes: "yes"}, 
    description: "hello", 
    name: "tom"}, 
  { id: 2,  
    description: "hellasdasdasdo", 
    name: "asdasdasdtom"}, 
  { id: 3 ,  
    description: "hasdello", 
        name: "toasdaagawem"
  } 
];

export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  // Get data from your database
  res.status(200).json(achievements)
  // console.log(descriptions)
}
