import { cn } from '@/lib/utils';
import { MemberType } from '@/types';
import Image from 'next/image';
import React, { FC } from 'react';
import { LinkedinIcon } from '@/components/shared/Icons';
interface MemberCardProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  member: MemberType;
}

const MemberCard: FC<MemberCardProps> = ({ className, member }) => {
  return (
    <div
      className={cn(
        'flex flex-col items-center justify-center gap-2 rounded-lg bg-accent-foreground p-4 shadow-md',
        className,
      )}
    >
      <figure className="relative size-20 rounded-full border-2 border-primary">
        <Image
          width={200}
          height={200}
          alt={member.name}
          src="https://picsum.photos/200/200"
          className="absolute left-0 top-0 size-full rounded-[inherit] object-cover"
        />
      </figure>
      <figcaption className="flex flex-col items-center gap-1">
        <h3 className="text-lg font-semibold">{member.name}</h3>
        <p className="text-sm text-accent/60">{member.role}</p>
        <ol className="flex gap-4">
          {Array.from({ length: 3 }).map((_, index) => (
            <li key={index} className="text-accent/50">
              <button>
                <LinkedinIcon size={14} />
              </button>
            </li>
          ))}
        </ol>
      </figcaption>
    </div>
  );
};

export default MemberCard;
