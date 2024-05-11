'use client';
import Logo from '@/components/shared/Logo';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Image from 'next/image';
import { FC } from 'react';
// const words = [
//   {
//     name: 'Summarize',
//     description: 'Summarize your documents with ease.',
//   },
//   {
//     name: 'Analyze',
//     description: 'Analyze your documents with ease.',
//   },
//   {
//     name: 'Chat',
//     description: 'Chat with your documents with ease.',
//   },
//   {
//     name: 'Document',
//     description: 'Document your documents with ease.',
//   },
// ];
interface PageProps {}
const Login: FC<PageProps> = () => {
  return (
    <div className="flex h-full">
      <section className="absolute left-0 top-0 -z-10 h-full w-full flex-1 lg:relative lg:block">
        <Image
          src="/imgs/login.jpg"
          width={900}
          height={500}
          className="absolute left-0 top-0 z-10 h-full w-full object-cover object-center"
          alt="Login"
        />
        <div className="absolute left-0 top-0 z-30 flex h-full w-full items-center justify-center px-6">
          <Logo className="absolute left-6 top-3 h-12 w-12" />
          <div className="hidden w-full text-accent lg:block">
            {/* <h2 className="mb-2 text-4xl font-bold">{words[index].name}</h2>
            <Typewriter
              words={[words[index].description,"ALi"]}
              loop={1}
              typeSpeed={20}
              deleteSpeed={20}
              delaySpeed={500}
              onLoopDone={handleOnDone}
            /> */}
          </div>
        </div>
        {/* Overlay */}
        <div className="absolute left-0 top-0 z-20 h-full w-full bg-accent-foreground/90 lg:bg-accent-foreground/70"></div>
      </section>
      <section className="flex w-full shrink-0 flex-col items-center justify-center px-12 lg:w-[600px] lg:bg-accent-foreground">
        <h1 className="text-4xl font-bold text-accent">Login</h1>
        <form className="w-full md:w-[400px] lg:w-[90%]">
          <fieldset className="mt-6 flex w-full flex-col gap-2 text-accent">
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              id="email"
              placeholder="Email"
              className="border-muted/50 bg-transparent placeholder:text-accent/80"
            />
          </fieldset>
          <fieldset className="mt-6 flex w-full flex-col gap-2 text-accent">
            <Label htmlFor="password">Password</Label>
            <Input
              type="password"
              id="password"
              placeholder="Password"
              className="border-muted/50 bg-transparent placeholder:text-accent/80"
            />
          </fieldset>
          <Button className="mt-6 w-full text-lg">Login</Button>
        </form>
      </section>
    </div>
  );
};

export default Login;
