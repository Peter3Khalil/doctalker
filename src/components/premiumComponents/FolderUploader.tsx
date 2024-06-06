import withPlan from '@/HOCs/withPlan';
import { cn } from '@/lib/utils';
import { FC } from 'react';
import UploaderForm from '../layouts/UploaderForm';
import { ChatWithFolderIcon, PasswordIcon } from '../shared/Icons';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
interface FolderUploaderProps extends React.HTMLAttributes<HTMLFormElement> {
  locked?: boolean;
}
const FolderUploader: FC<FolderUploaderProps> = ({
  locked = false,
  className,
  ...props
}) => {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (locked) return;
  };
  return (
    <UploaderForm
      className={cn('relative border-secondary-foreground', className)}
      onSubmit={handleSubmit}
      {...props}
    >
      <div className="relative flex items-center gap-2">
        <ChatWithFolderIcon className="size-12" />
        {locked && (
          <Badge className="absolute left-7 top-0 gap-1">
            <PasswordIcon className="size-3" />
            Pro
          </Badge>
        )}
      </div>
      <h3>Chat with a Folder</h3>
      <Button className="w-fit p-0" disabled={locked} variant={'secondary'}>
        <label
          htmlFor="folder-upload"
          className="flex h-full w-full cursor-pointer items-center justify-center px-4 py-2"
        >
          Upload Folder
        </label>
        <input
          id="folder-upload"
          type="file"
          hidden
          // @ts-expect-error: Adding webkitdirectory attribute
          webkitdirectory="true"
          directory="true"
        />
      </Button>
      {locked && <Button>Upgrade</Button>}
    </UploaderForm>
  );
};

export default withPlan(FolderUploader, 'premium', <FolderUploader locked />);
