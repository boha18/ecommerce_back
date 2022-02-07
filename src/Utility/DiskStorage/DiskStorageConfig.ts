import { BadRequestException } from '@nestjs/common';
import { MulterOptions } from '@nestjs/platform-express/multer/interfaces/multer-options.interface';
import { diskStorage } from 'multer';

export const diskStorageConfig: MulterOptions = {
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
  fileFilter: function (req, file, callback) {
    let ext = file.originalname.split('.').pop();
    console.log(ext);

    if (ext !== 'png' && ext !== 'jpg' && ext !== 'gif' && ext !== 'jpeg') {
      return callback(new Error('Only images are allowed'), false);
    }
    callback(null, true);
  },
  limits: {
    fileSize: 1024 * 1024,
  },
};
