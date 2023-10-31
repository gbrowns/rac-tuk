import { getFullApiUrl, ENDPOINTS } from './apiEndpoints';
export async function uploadImage(file, uploadUrl) {
  const formData = new FormData();
  formData.append('file', file);

  const response = await fetch(uploadUrl, {
    method: 'POST',
    body: formData,
  });

  if (!response.ok) {
    throw new Error('Something went wrong while uploading the image');
  }

  const responseData = await response.json();
  return responseData;
}

//check if file is image
export function isImage(file) {
  const allowedTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/svg+xml'];
  allowedTypes.includes(file.type);
  return file && file['type'].split('/')[0] === 'image';
}
