"use client";

import { Spinner } from '@/components/spinner';
import { Button } from '@/components/ui/button';
import { SignInButton } from '@clerk/clerk-react';
import { useConvexAuth } from 'convex/react';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import { Typewriter } from 'react-simple-typewriter';

export const Heading = () => {
  const {isAuthenticated , isLoading } = useConvexAuth();

  return (
    <div className="max-w-3xl space-y-3">
      <h1 className="text-3xl sm:text-5xl md:text-6xl">
        Keep Your Ideas, Plans & Documents Unified With
      </h1>
      <div className="text-3xl sm:text-5xl md:text-6xl">
        <div className="font-bold block min-h-[3.8rem] ">
          {/* New Line Ke Liye ek Break */}
          <Typewriter
            words={['Kotion']}
            loop={0} 
            cursor
            cursorStyle=''
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </div>
      </div>
      <h3 className="text-base sm:text-xl md:text-2xl">
        The Connected Workspace Where <br />Better, Faster Work Happens
      </h3>
      {isLoading && (
        <div className='w-full flex flex-items justify-center '>
            <Spinner size="lg"/>
        </div>
      )}
      {isAuthenticated && !isLoading && (    
        <Button asChild>
            <Link href="/documents">
            Enter Kotion
            <ArrowRight className='h-4 w-4 ml-2'/>
            </Link>
        </Button>
      )}
      {!isAuthenticated && !isLoading && (
        <SignInButton>
          <Button>
            Get Kotion
            <ArrowRight className='h-4 w-4 ml-2'/>
          </Button>
        </SignInButton>
      )}
    </div>
  );
};
