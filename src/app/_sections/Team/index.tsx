import Reveal from '@/components/Animation/Reveal';
import Section from '@/components/Layouts/Section';
import SectionHeading from '@/components/shared/SectionHeading';
import { TEAM } from '@/constants/team';
import useMediaQuery from '@/hooks/useMediaQuery';
import MemberCard from './MemberCard';
import RevealDesktop from './RevealDesktop';
const Team = () => {
  const { isMatched: isMobile } = useMediaQuery({ maxWidth: 768 });
  return (
    <Section id="team" className="bg-foreground">
      <SectionHeading>Meet the team</SectionHeading>
      <ul className="grid w-full grid-cols-1 gap-12 md:grid-cols-2 lg:min-h-full lg:grid-cols-4">
        <li className="col-span-full grid w-full grid-cols-1 gap-12 md:grid-cols-2 lg:min-h-full lg:grid-cols-4">
          <Reveal className="col-span-full lg:col-start-2 lg:col-end-4">
            <MemberCard
              member={{
                name: 'Dr: Wael Zakaria',
                role: 'Supervisor',
              }}
            />
          </Reveal>
        </li>
        {TEAM.map((member, index) => (
          <li key={index}>
            {isMobile ? (
              <Reveal>
                <MemberCard member={member} />
              </Reveal>
            ) : (
              <RevealDesktop>
                <MemberCard member={member} />
              </RevealDesktop>
            )}
          </li>
        ))}
      </ul>
    </Section>
  );
};

export default Team;
