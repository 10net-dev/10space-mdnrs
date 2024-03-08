// pages/api/upload.ts

import multer from 'multer';
import type { NextApiRequest, NextApiResponse } from 'next';
import path from 'path';
import fs from 'fs';

// Set up multer for handling file uploads
const upload = multer({
  dest: './public/uploads/', // Destination directory for storing uploaded files
});

// Define the handler for POST requests to /api/upload
export default upload.single('image')(async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Check if a file was uploaded
  if (!req.file) {
    return res.status(400).json({ error: 'No file uploaded' });
  }

  try {
    // Move the uploaded file from temp location to desired location
    const tempPath = req.file.path;
    const targetPath = path.join('./public/uploads/', req.file.originalname);
    fs.renameSync(tempPath, targetPath);

    return res.status(200).json({ message: 'File uploaded successfully' });
  } catch (error) {
    return res.status(500).json({ error: 'Failed to upload file', details: error.message });
  }
});
