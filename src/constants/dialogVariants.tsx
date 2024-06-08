/* eslint-disable no-unused-vars */
import type { DialogVariantType, DocumentStatusType } from '@/types';
import {
  AlertIcon,
  FileScanIcon,
  LoaderIcon,
  SuccessIcon,
} from '@/components/shared/Icons';
const ICON_SIZE = 24;
type DialogVariants = {
  file: { [key in DocumentStatusType]: DialogVariantType };
  folder: { [key in DocumentStatusType]: DialogVariantType };
};
export const DIALOG_VARIANTS: DialogVariants = {
  file: {
    idle: {
      title: '',
      description: '',
      icon: <></>,
    },
    uploading: {
      title: 'Uploading File...',
      description: 'Please wait while we upload your File',
      icon: <LoaderIcon size={ICON_SIZE} className="animate-spin" />,
    },
    uploadingSuccess: {
      title: 'File Uploaded',
      description: 'Your folder has been file successfully',
      icon: <SuccessIcon size={ICON_SIZE} className="text-primary" />,
    },
    uploadingFail: {
      title: 'Error Uploading file',
      description: 'There was an error uploading your file',
      icon: <AlertIcon size={ICON_SIZE} className="text-destructive" />,
    },
    processing: {
      title: 'Processing File...',
      description: 'Please wait while we process your file',
      icon: <FileScanIcon size={ICON_SIZE} className="animate-bounce" />,
    },
    processingSuccess: {
      title: 'File Processed',
      description: 'Your file has been processed successfully',
      icon: <SuccessIcon size={ICON_SIZE} className="text-primary" />,
    },
    processingFail: {
      title: 'Error Processing File',
      description: 'There was an error processing your file',
      icon: <AlertIcon size={ICON_SIZE} className="text-destructive" />,
    },
  },
  folder: {
    idle: {
      title: '',
      description: '',
      icon: <></>,
    },
    uploading: {
      title: 'Uploading Folder...',
      description: 'Please wait while we upload your folder',
      icon: <LoaderIcon size={ICON_SIZE} className="animate-spin" />,
    },
    uploadingSuccess: {
      title: 'Folder Uploaded',
      description: 'Your folder has been uploaded successfully',
      icon: <SuccessIcon size={ICON_SIZE} className="text-primary" />,
    },
    uploadingFail: {
      title: 'Error Uploading Folder',
      description: 'There was an error uploading your folder',
      icon: <AlertIcon size={ICON_SIZE} className="text-destructive" />,
    },
    processing: {
      title: 'Processing Folder...',
      description: 'Please wait while we process your folder',
      icon: <FileScanIcon size={ICON_SIZE} className="animate-bounce" />,
    },
    processingSuccess: {
      title: 'Folder Processed',
      description: 'Your folder has been processed successfully',
      icon: <SuccessIcon size={ICON_SIZE} className="text-primary" />,
    },
    processingFail: {
      title: 'Error Processing Folder',
      description: 'There was an error processing your folder',
      icon: <AlertIcon size={ICON_SIZE} className="text-destructive" />,
    },
  },
};
