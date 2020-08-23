import cors from 'cors'

const cors = Cors({
  origin: process.env.NEXTAUTH_URL,
  methods: ['GET', 'HEAD'],
})

export default cors;