import { DIALOG_VARIANTS } from '@/constants/dialogVariants';
import useUploadDocuments from '@/hooks/useUploadDocument';
import { isDocx, isPdf } from '@/lib/utils';
import React, { FC, useEffect, useMemo, useState } from 'react';
import { AddFileIcon } from './shared/Icons';
import { Button } from './ui/button';
import { Card, CardContent, CardFooter, CardHeader } from './ui/card';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from './ui/dialog';

const FileUploader: FC<React.HTMLAttributes<HTMLFormElement>> = ({
  className,
  ...props
}) => {
  const [file, setFile] = useState<File | null>(null);
  const [open, setOpen] = useState(false);
  const size = file ? Number(file.size / 1024 / 1024).toFixed(2) : 0;
  const {
    upload,
    documentStatus,
    isProcessingFailed,
    isProcessingSuccessfully,
    isUploadedSuccessfully,
    isUploadingFailed,
    isUploading,
  } = useUploadDocuments();

  const canCloseDialog = useMemo(() => {
    return (
      isUploadingFailed ||
      isUploadedSuccessfully ||
      isProcessingFailed ||
      isProcessingSuccessfully
    );
  }, [
    isProcessingFailed,
    isProcessingSuccessfully,
    isUploadedSuccessfully,
    isUploadingFailed,
  ]);

  const dialogVariants = useMemo(() => {
    return DIALOG_VARIANTS.file;
  }, []);
  const dialogVariant = useMemo(
    () => dialogVariants[documentStatus],
    [dialogVariants, documentStatus],
  );

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;

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
    if (!file) return;
    upload({
      files: [file],
    });
  };

  useEffect(() => {
    if (isUploading) {
      setOpen(true);
    }
  }, [isUploading]);

  return (
    <div>
      <form onSubmit={handleSubmit} className={className} {...props}>
        <Card className="flex flex-col items-center">
          <CardHeader className="items-center">
            <div className="flex items-center gap-2">
              <AddFileIcon className="size-8" />
              <h3 className="text-lg font-semibold">Upload File</h3>
            </div>
          </CardHeader>
          <CardContent className="flex flex-col gap-2">
            <Button
              type="button"
              variant={file ? 'secondary' : 'default'}
              className="p-0"
            >
              <label
                htmlFor="file"
                className="flex h-full w-full cursor-pointer items-center justify-center"
              >
                {file ? 'Change file' : 'Select File'}
              </label>
              <input id="file" type="file" hidden onChange={handleOnChange} />
            </Button>
            <p className="text-xs text-muted-foreground">
              <span className="font-bold">NOTE:</span> Support only PDF and DOCX
              files
            </p>
          </CardContent>
          {file && (
            <CardFooter className="flex flex-col gap-2">
              <article className="prose prose-sm flex w-full flex-col items-center gap-2 text-center dark:prose-invert">
                <div className="w-full *:m-0">
                  <p className="w-full overflow-hidden text-ellipsis text-nowrap">
                    <strong>File Name:</strong> {file.name}
                  </p>
                  <p>
                    <strong>Size:</strong> {size} MB
                  </p>
                </div>
              </article>
              <div className="flex w-full gap-2">
                <Button type="submit" className="w-full">
                  Upload
                </Button>
                <Button
                  variant="secondary"
                  type="button"
                  className="w-full"
                  onClick={() => setFile(null)}
                >
                  Cancel
                </Button>
              </div>
            </CardFooter>
          )}
        </Card>
      </form>
      <Dialog open={open} onOpenChange={canCloseDialog ? setOpen : () => {}}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              {dialogVariant.icon}
              {dialogVariant.title}
            </DialogTitle>
            <DialogDescription>{dialogVariant.description}</DialogDescription>
          </DialogHeader>
          {isUploadingFailed && (
            <DialogFooter>
              <Button
                onClick={(e) =>
                  handleSubmit(e as unknown as React.FormEvent<HTMLFormElement>)
                }
                variant={'secondary'}
              >
                Try Again
              </Button>
            </DialogFooter>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default FileUploader;
