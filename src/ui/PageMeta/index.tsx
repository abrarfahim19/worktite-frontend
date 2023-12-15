// import Head from 'next/head';
// import {MessageFormatElement} from '@formatjs/icu-messageformat-parser';
// import {PUBLIC_FRONTEND_PORTAL_DOMAIN} from '../../common/envConstants';

// interface PageMetaProps {
//   title?: string | MessageFormatElement[];
//   desc?: string;
//   canonical?: any;
//   css?: any;
//   image?: any;
// }

// const PageMeta: React.FC<PageMetaProps> = ({
//   title,
//   desc = "Futurenation, emerged through a unique alliance formed by UNDP Bangladesh, Bangladesh Investment Development Authority (BIDA) & Grameenphone, is working towards accelerating the Nation's future economic growth. The core vision of Futurenation is to achieve economic opportunities for all by upskilling, creating decent employment and entrepreneurship ecosystem for the youth in the post-COVID world. Ours is a journey to bring economic wellbeing for all and build a better tomorrow.",
//   css,
//   image,
//   canonical,
// }) => (
//   <Head>
//     <title>{title ? 'Futurenation | ' + title : 'Futurenation'}</title>
//     <meta name='description' content={desc} />
//     <meta property='og:type' content='website' />
//     <meta name='og:title' property='og:title' content={title as string} />
//     <meta name='og:description' property='og:description' content={desc} />
//     <meta property='og:site_name' content='Futurenation' />
//     <meta name='twitter:card' content='summary' />
//     <meta name='twitter:title' content={title as string} />
//     <meta name='twitter:description' content={desc} />
//     <meta name='twitter:site' content='@propernounco' />
//     <meta name='twitter:creator' content='@propernounco' />
//     <link
//       rel='icon'
//       type='image/png'
//       href={`${PUBLIC_FRONTEND_PORTAL_DOMAIN}/images/future-nation-logo.png`}
//     />
//     <link
//       rel='apple-touch-icon'
//       href={`${PUBLIC_FRONTEND_PORTAL_DOMAIN}/images/future-nation-logo.png`}
//     />

//     {canonical && <meta property='og:url' content={`${canonical}`} />}
//     {css && <link rel='stylesheet' href={`${css}`} />}
//     {image ? (
//       <meta property='og:image' content={`${image}`} />
//     ) : (
//       <meta
//         property='og:image'
//         content={`${PUBLIC_FRONTEND_PORTAL_DOMAIN}/images/future-nation-logo.png`}
//       />
//     )}
//     {image && <meta name='twitter:image' content={`${image}`} />}
//   </Head>
// );
// export default PageMeta;

const index = () => {
  return <div>index</div>;
};

export default index;
