import { BASE_URL } from './constant';

export const ENDPOINTS = {
  //User
  LOGIN: '/api/v1/login',
  REGISTER: '/api/v1/register',
  FORGOT_PASSWORD: '/api/v1/forgot-password',
  RESET_PASSWORD: '/api/v1/reset-password',
  UPDATE_PASSWORD: '/api/v1/update-password',
  UPDATE_PROFILE: '/api/v1/update-profile',
  VERIFY_EMAIL: '/api/v1/verify-email',
  VERIFY_PHONE: '/api/v1/verify-phone',
  VERIFY_PHONE_OTP: '/api/v1/verify-phone-otp',
  VERIFY_EMAIL_OTP: '/api/v1/verify-email-otp',
  GET_PROFILE: '/api/v1/get-profile',
  GET_USER: '/api/v1/get-user',
  GET_USERS: '/api/v1/get-users',
  GET_ALL_USERS: '/api/v1/get-all-users',
  GET_USER_BY_ID: '/api/v1/get-user-by-id',
  GET_USER_BY_EMAIL: '/api/v1/get-user-by-email',
  GET_USER_BY_PHONE: '/api/v1/get-user-by-phone',
  GET_USER_BY_USERNAME: '/api/v1/get-user-by-username',
  GET_USER_BY_USERNAME_OR_EMAIL: '/api/v1/get-user-by-username-or-email',
  GET_USER_BY_USERNAME_OR_EMAIL_OR_PHONE: '/api/v1/get-user-by-username-or-email-or-phone',
  GET_USER_BY_USERNAME_OR_EMAIL_OR_PHONE_OR_ID: '/api/v1/get-user-by-username-or-email-or-phone-or-id',
  GET_USER_BY_USERNAME_OR_EMAIL_OR_PHONE_OR_ID_OR_NAME: '/api/v1/get-user-by-username-or-email-or-phone-or-id-or-name',
  GET_USER_BY_USERNAME_OR_EMAIL_OR_PHONE_OR_ID_OR_NAME_OR_ROLE:
    '/api/v1/get-user-by-username-or-email-or-phone-or-id-or-name-or-role',
  GET_USER_BY_USERNAME_OR_EMAIL_OR_PHONE_OR_ID_OR_NAME_OR_ROLE_OR_STATUS:
    '/api/v1/get-user-by-username-or-email-or-phone-or-id-or-name-or-role-or-status',
  GET_USER_BY_USERNAME_OR_EMAIL_OR_PHONE_OR_ID_OR_NAME_OR_ROLE_OR_STATUS_OR_CREATED_AT:
    '/api/v1/get-user-by-username-or-email-or-phone-or-id-or-name-or-role-or-status-or-created-at',
  GET_USER_BY_USERNAME_OR_EMAIL_OR_PHONE_OR_ID_OR_NAME_OR_ROLE_OR_STATUS_OR_CREATED_AT_OR_UPDATED_AT:
    '/api/v1/get-user-by-username-or-email-or-phone-or-id-or-name-or-role-or-status-or-created-at-or-updated-at',

  //Role
  CREATE_ROLE: '/api/v1/create-role',
  GET_ROLE: '/api/v1/get-role',
  GET_ROLES: '/api/v1/get-roles',
  GET_ALL_ROLES: '/api/v1/get-all-roles',
  GET_ROLE_BY_ID: '/api/v1/get-role-by-id',
  GET_ROLE_BY_NAME: '/api/v1/get-role-by-name',
  GET_ROLE_BY_NAME_OR_ID: '/api/v1/get-role-by-name-or-id',
  GET_ROLE_BY_NAME_OR_ID_OR_STATUS: '/api/v1/get-role-by-name-or-id-or-status',

  //Permission
  CREATE_PERMISSION: '/api/v1/create-permission',
  GET_PERMISSION: '/api/v1/get-permission',
  GET_PERMISSIONS: '/api/v1/get-permissions',
  GET_ALL_PERMISSIONS: '/api/v1/get-all-permissions',
  GET_PERMISSION_BY_ID: '/api/v1/get-permission-by-id',
  GET_PERMISSION_BY_NAME: '/api/v1/get-permission-by-name',
  GET_PERMISSION_BY_NAME_OR_ID: '/api/v1/get-permission-by-name-or-id',
  GET_PERMISSION_BY_NAME_OR_ID_OR_STATUS: '/api/v1/get-permission-by-name-or-id-or-status',

  //Role Permission
  CREATE_ROLE_PERMISSION: '/api/v1/create-role-permission',
  GET_ROLE_PERMISSION: '/api/v1/get-role-permission',
  GET_ROLE_PERMISSIONS: '/api/v1/get-role-permissions',
  GET_ALL_ROLE_PERMISSIONS: '/api/v1/get-all-role-permissions',
  GET_ROLE_PERMISSION_BY_ID: '/api/v1/get-role-permission-by-id',
  GET_ROLE_PERMISSION_BY_NAME: '/api/v1/get-role-permission-by-name',
  GET_ROLE_PERMISSION_BY_NAME_OR_ID: '/api/v1/get-role-permission-by-name-or-id',
  GET_ROLE_PERMISSION_BY_NAME_OR_ID_OR_STATUS: '/api/v1/get-role-permission-by-name-or-id-or-status',

  //upload file
  UPLOAD_FILE: '/api/v1/upload-file',
  UPLOAD_FILES: '/api/v1/upload-files',
  UPLOAD_IMAGE: '/api/v1/upload-image',
  UPLOAD_IMAGES: '/api/v1/upload-images',
  UPLOAD_VIDEO: '/api/v1/upload-video',
  UPLOAD_VIDEOS: '/api/v1/upload-videos',
  UPLOAD_AUDIO: '/api/v1/upload-audio',
  UPLOAD_AUDIOS: '/api/v1/upload-audios',
  UPLOAD_DOCUMENT: '/api/v1/upload-document',
  UPLOAD_DOCUMENTS: '/api/v1/upload-documents',
};

export function getFullApiUrl(endpoint) {
  return `${BASE_URL}${endpoint}`;
}
