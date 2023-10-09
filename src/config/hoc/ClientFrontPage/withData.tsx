import React, { useEffect } from 'react';
// import {useAppAuth} from '../../../oidc/oidc';
// import Loader from '../../../core/Loader';
import { UnauthorizedAccessMessageComponent } from '../../shared/ErrorComponents';

const withData = (ComposedComponent: any) => (props: any) => {
  // const { authUser, isAuthUserLoading, signinRedirect } = useAppAuth();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const authUser = {
    isClientUser: false,
  };
  const isAuthUserLoading = true;

  useEffect(() => {
    if (!isAuthUserLoading && !authUser) {
      // void signinRedirect();
      // TODO: sign in redirect;
    }
  }, [authUser, isAuthUserLoading]);

  if (!isAuthUserLoading && !authUser) {
    return <p>...loading</p>;
  } else if (!authUser?.isClientUser) {
    return <UnauthorizedAccessMessageComponent />;
  } else {
    return <ComposedComponent {...props} />;
  }
};

withData.displayName = 'withData';
export default withData;
