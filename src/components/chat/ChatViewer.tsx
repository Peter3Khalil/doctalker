import { cn } from '@/lib/utils';
import { useGlobalState } from '@/providers/state-provider';
import { useInView } from 'framer-motion';
import React, { FC, useEffect, useRef } from 'react';
import Message from './Message';
import Textarea from './Textarea';
import Wrapper from './Wrapper';
interface ChatViewerProps extends React.HTMLAttributes<HTMLDivElement> {}

const ChatViewer: FC<ChatViewerProps> = ({ className, ...props }) => {
  const { isPdfShown, setTap } = useGlobalState();

  const ref = useRef<HTMLDivElement>(null);

  const isInView = useInView(ref, {
    amount: 1,
  });
  useEffect(() => {
    if (isInView) {
      setTap('chat');
    }
  }, [isInView, setTap]);

  return (
    <Wrapper
      className={cn(
        'hide-scrollbar grid h-full grid-cols-1 grid-rows-[1fr,150px] place-items-center gap-3 overflow-x-hidden',
        className,
      )}
      ref={ref}
      id="chat"
      {...props}
    >
      <div className={cn('show-scrollbar h-full w-full overflow-auto')}>
        <ul
          className={cn('flex w-full flex-col gap-3 px-6 text-accent', {
            'mx-auto max-w-[800px]': !isPdfShown,
          })}
        >
          <Message>Peter</Message>
          <Message variant={'bot'}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
            dolorem consequuntur accusantium voluptatibus debitis quis vitae
            officia, voluptatem inventore fugiat reprehenderit unde alias
            nesciunt. Quod vero tenetur laudantium possimus voluptate. Itaque
            officiis illo fugit officia quis delectus hic neque rem, natus ex,
            nostrum dolorem quos ut corporis! Voluptate excepturi id est ab et
            laudantium ipsum quidem cum maiores illo, delectus dolorem obcaecati
            error neque perspiciatis nisi tempora consequuntur quo possimus odio
            quas tenetur! Vitae tenetur ducimus commodi atque, maxime quae
            dolores, dicta et perspiciatis porro consequuntur rerum! Ad,
            consequatur? Suscipit iure mollitia nulla unde consectetur facere,
            culpa quasi distinctio odio officiis sapiente optio tenetur
            assumenda fugiat earum reiciendis, sed maiores alias magnam omnis
            aspernatur, velit nobis incidunt? Qui facere voluptatem, sint neque
            beatae laboriosam nisi repudiandae dolorum eligendi, quia saepe
            inventore! Ipsam vero sint dolorum repellendus error officia
            excepturi magnam illo pariatur nobis laboriosam iusto tempore,
            inventore dignissimos unde suscipit aliquam? Earum recusandae ad sit
            aperiam et architecto? Cum quibusdam excepturi delectus similique
            exercitationem aliquid incidunt amet impedit, sapiente, in quo
            debitis doloremque, quasi dolores assumenda. Velit atque dolor
            quaerat hic saepe consequuntur cupiditate, reprehenderit dignissimos
            ducimus sapiente eligendi sit sunt tempora quasi optio odit minima
            exercitationem nostrum eveniet illum beatae cum voluptatem
            similique. Est, quod reprehenderit ab quis harum eaque, assumenda
            neque, ex veniam incidunt non commodi nulla voluptatum repellat?
            Minima consequuntur velit molestias cumque ullam provident odio
            repellendus corrupti praesentium nesciunt dolor illum possimus ex
            quod tenetur nostrum, atque adipisci molestiae exercitationem rerum,
            sunt, a odit? Dolor, quo ad modi voluptatum fugit facere, ea ullam
            nemo consectetur inventore aliquid doloribus iure natus consequatur
            excepturi voluptatem sequi, porro dolorum? Rerum nisi unde deleniti
            neque, animi at ipsam illum iure distinctio. In a quaerat tempore ab
            asperiores. Nulla corporis perferendis ratione suscipit illum
            debitis, sunt maxime? Mollitia corrupti rerum illo dolores,
            reiciendis est in quisquam, qui error harum officiis nesciunt eos
            voluptatibus deleniti itaque beatae odit optio nisi. Doloribus,
            reiciendis officia aliquid sed officiis saepe corporis tempora sint
            quod ab, aperiam cumque, culpa alias. Illo tempore maiores
            cupiditate vel quisquam rem obcaecati mollitia sint voluptatibus,
            qui temporibus quae harum autem dolores? Eum voluptas ipsam est
            minus adipisci officia. Minus quaerat quisquam iusto saepe tempore
            dolorem sapiente commodi ducimus debitis, laudantium sed dolore iste
            aliquid libero cum quo reprehenderit nihil beatae. Commodi, error
            quis? Dolorum odio nemo, molestiae magnam obcaecati unde? Ipsam,
            perspiciatis consequatur error repudiandae sequi totam a id est
            voluptas unde debitis doloremque aliquam magni blanditiis, eius amet
            quaerat soluta neque sed dolorum? Modi deserunt tenetur error ad
            eius, assumenda quam, repellat repudiandae totam fugiat quibusdam
            minus in animi sit delectus provident unde eaque ipsam atque autem
            officiis. Nobis, in? Aliquid ad animi ipsam provident, repellat
            officiis nesciunt natus velit labore inventore. Placeat, reiciendis,
            eos perferendis quis dignissimos cumque quam necessitatibus sunt
            eaque ea ut molestiae autem earum consequuntur ipsa beatae, vitae
            reprehenderit corrupti. Minima dicta quo harum a natus quae quia
            accusantium obcaecati consequatur at atque placeat qui, eligendi
            officiis. Porro, quas dolore culpa suscipit similique repellendus
            provident.
          </Message>
        </ul>
      </div>
      <Textarea />
    </Wrapper>
  );
};

export default ChatViewer;
