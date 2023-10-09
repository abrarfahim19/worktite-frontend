import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';

interface IProps {
  children: React.ReactNode;
  showHeader?: boolean;
  showFooter?: boolean;
}

const WorktiteLayout = ({
  children,
  showHeader = true,
  showFooter = true,
}: IProps) => {
  const router = useRouter();
  // const user = useAuthUser();
  const user = {
    isClientUser: true,
  };
  // useEffect(() => {
  //   if (user && !user?.isClientUser) {
  //     router
  //       .push(PUBLIC_FRONTEND_ADMIN_PORTAL_DOMAIN)
  //       .then();
  //   }
  // }, [user]);

  if (user && !user?.isClientUser) {
    return <p>...loading</p>;
  }

  return (
    <div>{children}</div>
    // <StyledBox className={clsx(classes.appMain, 'appMainHor')}>
    //   {showHeader ? <AppHeader /> : <AppHeaderLogoOnly />}
    //   <Box className={classes.mainContent}>
    //     <Box className={classes.mainContainer}>
    //       <ContentView>{children}</ContentView>
    //     </Box>
    //   </Box>
    //   {user && showFooter && <FooterWithLoggedIn />}
    //   {showFooter && !user && <FooterWithoutLoggedIn />}
    // </StyledBox>
  );
};

export default WorktiteLayout;
