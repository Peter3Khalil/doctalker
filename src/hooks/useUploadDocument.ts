import { processDocument, uploadDocuments } from '@/features/document';
import { DocumentStatusType } from '@/types';
import { useState } from 'react';
import { useMutation } from 'react-query';

const useUploadDocuments = () => {
  const [documentStatus, setDocumentStatus] =
    useState<DocumentStatusType>('idle');
  const {
    mutate: processFolder,
    isError: isProcessingFailed,
    isSuccess: isProcessingSuccessfully,
  } = useMutation('processDocuments', processDocument, {
    onError() {
      setDocumentStatus('processingFail');
    },
    onSuccess() {
      setDocumentStatus('processingSuccess');
    },
    onMutate() {
      setDocumentStatus('processing');
    },
  });

  const {
    mutate: upload,
    isError: isUploadingFailed,
    isSuccess: isUploadedSuccessfully,
    isLoading: isUploading,
  } = useMutation('uploadDocuments', uploadDocuments, {
    onMutate: () => {
      setDocumentStatus('uploading');
    },
    onError: () => {
      setDocumentStatus('uploadingFail');
    },
    onSuccess: (data) => {
      setDocumentStatus('uploadingSuccess');
      processFolder({ chatId: data.chatId });
    },
  });

  return {
    upload,
    documentStatus,
    isUploading,
    isUploadingFailed,
    isUploadedSuccessfully,
    isProcessingFailed,
    isProcessingSuccessfully,
  };
};

export default useUploadDocuments;
