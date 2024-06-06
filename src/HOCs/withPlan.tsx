/* eslint-disable @typescript-eslint/no-explicit-any */
import { useUser } from '@/providers/user-provider';
import { User } from '@/types/apis';
import type { Plan } from '@/types/plans';
import React, { ComponentProps, ComponentType } from 'react';
import { UseQueryResult } from 'react-query';
const withPlan = <T extends ComponentType<any>>(
  Component: T,
  plan: Plan,
  fallback: React.ReactNode = 'Upgrade to a premium plan to access this feature',
) => {
  const WithPlan = (props: ComponentProps<T>) => {
    const { data: user } = useUser() as UseQueryResult<User, unknown>;
    if (
      user?.subscription === plan ||
      user?.subscription === 'premium' ||
      user?.subscription === 'admin'
    ) {
      return <Component {...props} />;
    }
    return <>{fallback}</>;
  };
  return WithPlan;
};

export default withPlan;
