import Cors from 'cors'

const cors = Cors({
  origin: process.env.NEXTAUTH_URL,
  methods: ['GET', 'POST', 'PATCH', 'DELETE'],
})

export default cors;