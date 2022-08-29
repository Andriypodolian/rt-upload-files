export interface FileUploadError {
  title?: string;
  message: string;
}


export enum FormatsFile {
  pdf = 'application/pdf',
  docx = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  xlsx = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  mp3 = 'audio/mpeg',
  wav = 'audio/wav',
  png = 'image/png',
  jpeg = 'image/jpeg',
}
