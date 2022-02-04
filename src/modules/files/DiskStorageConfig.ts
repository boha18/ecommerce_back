import { diskStorage } from 'multer';

export const diskStorageConfig = {
  storage: diskStorage({
    destination: './files',

    // configure your Disc Storage ( or use memory Storage )
    /* destination: function (req, file, cb) {
    cb(null, '/tmp/my-uploads')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, file.fieldname + '-' + uniqueSuffix)
  }*/
  }),
};
