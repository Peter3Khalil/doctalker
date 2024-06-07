import { processFile, uploadFile } from '@/features/document';
import { cn, isDocx, isPdf } from '@/lib/utils';
import React, { FC, useEffect, useState } from 'react';
import { useMutation } from 'react-query';
import UploaderForm from './layouts/UploaderForm';
import { AddFileIcon, AlertIcon, SuccessIcon } from './shared/Icons';
import { Button } from './ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from './ui/dialog';
import { Progress } from './ui/progress';
const ICON_SIZE = 40;
type ComponentStatus =
  | 'idle'
  | 'uploading'
  | 'uploadingSuccess'
  | 'uploadingFail'
  | 'processing'
  | 'processingFail'
  | 'processingSuccess';

const FileUploader: FC<React.HTMLAttributes<HTMLFormElement>> = ({
  className,
  ...props
}) => {
  const [file, setFile] = useState<File | null>(null);

  const [open, setOpen] = useState(false);

  const [progress, setProgress] = useState(0);

  const [componentStatus, setComponentStatus] =
    useState<ComponentStatus>('idle');

  const size = file ? Number(file.size / 1024 / 1024).toFixed(2) : 0;

  const dialogVariants = {
    uploadingSuccess: {
      title: <p>File Uploaded Successfully</p>,
      description: (
        <p className="animate-pulse text-base">Redirecting to chat...</p>
      ),
      icon: (
        <SuccessIcon
          size={ICON_SIZE}
          className="shrink-0 text-primary dark:text-primary-foreground"
        />
      ),
    },
    uploadingFail: {
      title: 'An error occurred',
      description: 'Please try again',
      icon: (
        <AlertIcon size={ICON_SIZE} className="shrink-0 text-destructive" />
      ),
    },
    uploading: {
      title: 'Uploading',
      description: <Progress value={progress} />,
      icon: null,
    },
    processing: {
      title: 'Processing',
      description: 'Please wait...',
      icon: null,
    },
    processingSuccess: {
      title: 'File Processed',
      description: 'Redirecting to chat...',
      icon: (
        <SuccessIcon
          size={ICON_SIZE}
          className="shrink-0 text-primary dark:text-primary-foreground"
        />
      ),
    },
    processingFail: {
      title: 'An error occurred',
      description: 'Please try again',
      icon: (
        <AlertIcon size={ICON_SIZE} className="shrink-0 text-destructive" />
      ),
    },
    idle: {
      title: '',
      description: '',
      icon: null,
    },
  };

  const dialog = dialogVariants[componentStatus];

  const {
    mutate: upload,
    isSuccess,
    data,
  } = useMutation('uploadFile', uploadFile, {
    onSuccess() {
      setComponentStatus('uploadingSuccess');
    },
    onError() {
      setComponentStatus('uploadingFail');
    },
    onMutate() {
      setOpen(true);
      setComponentStatus('uploading');
    },
  });

  const { mutate: process } = useMutation(processFile, {
    onSuccess() {
      setComponentStatus('processingSuccess');
    },
    onError() {
      setComponentStatus('processingFail');
    },
    onMutate() {
      setComponentStatus('processing');
    },
  });

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    setProgress(0);

    if (files && files.length > 0) {
      if (!isPdf(files[0]) && !isDocx(files[0])) {
        alert('Only PDF and DOCX files are allowed');

        return;
      }

      setFile(files[0]);
    }

    e.target.value = '';
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setProgress(0);
    const formData = new FormData();
    if (!file) return;
    formData.append('file', file);
    upload({
      formData,
      config: {
        onUploadProgress(e) {
          if (!e.total) return;
          setProgress(Math.round((e.loaded * 100) / e.total));
        },
      },
    });
  };

  useEffect(() => {
    setComponentStatus('idle');
  }, [file]);

  useEffect(() => {
    if (isSuccess) {
      process({ chatId: data.chatId });
    }
  }, [isSuccess]);

  return (
    <UploaderForm
      onSubmit={handleSubmit}
      className={cn('border-primary', className)}
      {...props}
    >
      <AddFileIcon className="size-12" />
      <h3>Chat with a File</h3>
      <Button
        className="w-fit p-0"
        type="button"
        variant={file ? 'outline' : 'default'}
      >
        <label
          htmlFor="file-upload"
          className="flex h-full w-full cursor-pointer items-center justify-center px-4 py-2"
        >
          {file ? 'Change' : 'Upload File'}
        </label>
        <input
          onChange={handleOnChange}
          accept=".pdf,.docx"
          id="file-upload"
          type="file"
          name="file"
          hidden
        />
      </Button>
      {file && (
        <article className="prose prose-sm flex w-full flex-col items-center gap-2 text-center dark:prose-invert">
          <div className="w-full *:m-0">
            <p
              className="w-full overflow-hidden text-ellipsis text-nowrap"
              title={file.name}
            >
              <strong>File Name:</strong> {file.name}
            </p>
            <p>
              <strong>File Size:</strong> {size} MB
            </p>
          </div>
          <div className="flex w-full items-center justify-center gap-2">
            <Button
              className="w-fit"
              variant={'secondary'}
              onClick={() => setFile(null)}
              type="button"
            >
              Remove
            </Button>
            <Button>Send</Button>
          </div>
        </article>
      )}
      {/* {file && <Progress value={progress} className="w-full" />} */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="w-[90%] sm:max-w-[425px]">
          <DialogHeader className="items-center gap-4 text-center">
            <DialogTitle className="flex flex-col items-center gap-2 text-center text-base">
              {dialog.icon}
              {dialog.title}
            </DialogTitle>
            <DialogDescription className="flex w-full justify-center">
              {dialog.description}
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </UploaderForm>
  );
};

export default FileUploader;
