import multer from 'multer'
import { join } from 'path'

export default {
  storage: multer.diskStorage({
    destination: join(__dirname, '..', '..', 'uploads'),
    filename: (req, file, cb) => {
      const fileName = `${Date.now()}-${file.filename || file.originalname}`
      cb(null, fileName)
    }
  })
}
