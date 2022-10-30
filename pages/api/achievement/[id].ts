import type { NextApiRequest, NextApiResponse } from 'next'
import Link from "next/link";
import useSwr from 'swr'

export default function achievementHandler(req: NextApiRequest, res: NextApiResponse) {
  const {
    query: { id, achievement }, //{id, name},
    method
  } = req

  switch (method) {
    case 'GET':
      // Get data from your database
      res.status(200).json({ achievement: `${id}!`})
      // const {query: descriptions} = req
      // res.status(200).json({descriptions: `${JSON.stringify(descriptions)}`})
      break
    case 'PUT':
      // Update or create data in your database
      res.status(200).json({ id, name: name || `Achievement ${id}` })
      break
    default:
      res.setHeader('Allow', ['GET', 'PUT'])
      res.status(405).end(`Method ${method} Not Allowed`)
  }
  
}
