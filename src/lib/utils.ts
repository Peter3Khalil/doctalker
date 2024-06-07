import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getOnlyPdfOrWords = (files: FileList) => {
  const filteredFiles: File[] = [];

  if (files) {
    for (let i = 0; i < files.length; i++) {
      const file = files[i];

      if (isPdf(file) || isDocx(file)) {
        filteredFiles.push(file);
      }
    }
  }

  return filteredFiles;
};

export const getTotalSize = (files: FileList | File[]) => {
  let totalSize = 0;

  if (files) {
    for (let i = 0; i < files.length; i++) {
      totalSize += files[i].size;
    }
  }

  return totalSize / 1024 / 1024;
};

export const isPdf = (file: File) => {
  return file.name.match(/\.(pdf)$/);
};

export const isDocx = (file: File) => {
  return file.name.match(/\.(docx)$/);
};
