'use client';
import { DIALOG_VARIANTS } from '@/constants/dialogVariants';
import withPlan from '@/HOCs/withPlan';
import useUploadDocuments from '@/hooks/useUploadDocument';
import { cn, getOnlyPdfOrWords, getTotalSize } from '@/lib/utils';
import { FC, useCallback, useEffect, useMemo, useState } from 'react';
import { ChatWithFolderIcon } from '../shared/Icons';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '../ui/card';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '../ui/dialog';

interface FolderUploaderProps extends React.HTMLAttributes<HTMLFormElement> {
  locked?: boolean;
}

const FolderUploader: FC<FolderUploaderProps> = ({
  locked = false,
  className,
  ...props
}) => {
  const [files, setFiles] = useState<File[] | null>(null);
  const [size, setSize] = useState(0);
  const [open, setOpen] = useState(false);
  const {
    documentStatus,
    isProcessingFailed,
    isProcessingSuccessfully,
    isUploadedSuccessfully,
    isUploadingFailed,
    isUploading,
    upload,
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
    return DIALOG_VARIANTS.folder;
  }, []);
  const dialogVariant = useMemo(
    () => dialogVariants[documentStatus],
    [dialogVariants, documentStatus],
  );

  const handleOnChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const selectedFiles = e.target.files;
      if (!selectedFiles) return;
      if (selectedFiles.length === 0) return;
      setFiles(getOnlyPdfOrWords(selectedFiles));
      e.target.value = '';
    },
    [],
  );

  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (locked) return;
      if (!files || files.length === 0) return;
      upload({ files });
    },
    [files, locked, upload],
  );

  useEffect(() => {
    if (isUploading) {
      setOpen(true);
    }
  }, [isUploading]);

  useEffect(() => {
    if (!files) return;
    setSize(+getTotalSize(files).toFixed(2));
  }, [files]);

  return (
    <div className="w-full md:w-auto">
      <form
        onSubmit={handleSubmit}
        className={cn('w-full md:w-[300px]', className)}
        {...props}
      >
        <Card className="flex w-full flex-col items-center">
          <CardHeader className="items-center">
            <div className="flex items-center gap-2">
              <ChatWithFolderIcon className="size-8" />
              <h3 className="text-lg font-semibold">Upload Folder</h3>
            </div>
            <Badge className="bg-secondary-foreground text-secondary hover:text-primary-foreground">
              Premium
            </Badge>
          </CardHeader>
          <CardContent className="flex flex-col gap-2">
            <Button
              type="button"
              variant={files && files?.length > 0 ? 'secondary' : 'default'}
              className="p-0"
            >
              <label
                htmlFor="folder"
                className="flex h-full w-full cursor-pointer items-center justify-center"
              >
                {files && files.length > 0 ? 'Change Folder' : 'Select Folder'}
              </label>
              <input
                id="folder"
                type="file"
                hidden
                // @ts-expect-error: Adding webkitdirectory attribute
                webkitdirectory="true"
                // eslint-disable-next-line react/no-unknown-property
                directory="true"
                onChange={handleOnChange}
              />
            </Button>
            <p className="text-xs text-muted-foreground">
              <span className="font-bold">NOTE:</span> Support only PDF and DOCX
              files
            </p>
          </CardContent>
          {files && files.length > 0 && (
            <CardFooter className="flex w-full flex-col gap-2">
              <article className="prose prose-sm flex w-full flex-col items-center gap-2 text-center dark:prose-invert">
                <div className="w-full *:m-0">
                  <p className="w-full overflow-hidden text-ellipsis text-nowrap">
                    <strong>Selected Files:</strong> {files.length}
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
                  onClick={() => setFiles(null)}
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

export default withPlan(FolderUploader, 'free', <FolderUploader />);
