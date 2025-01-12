import fs from 'fs';
import path from 'path';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  // Extract the 'event' parameter from the URL
  const event = req.nextUrl.pathname.split('gallery/')[1]

  if (!event) {
    return NextResponse.json({ message: 'Event not specified' }, { status: 400 });
  }

  const dirPath = path.join(process.cwd(), 'public', 'images', 'gallery', event);

  try {
    // Read the directory contents
    const files = fs.readdirSync(dirPath);

    // Filter for image files (jpg, jpeg, png, gif)
    const imageFiles = files.filter((file) => /\.(jpg|jpeg|png|gif)$/i.test(file));

    // Return the list of image file names
    return NextResponse.json(imageFiles);
  } catch (error) {
    return NextResponse.json({ message: 'Error reading the gallery folder' }, { status: 500 });
  }
}
