import StyleHeading from '@/components/Header/StyleHeading';
import { marketing, sections } from '@/components/common/constants';
import Tabs from '@/components/ProjectTab/Tabs';
import All from '@/components/SimpleProject/DIYProjects/All';
import Simple from '@/components/SimpleProject/DIYProjects/Simple';
import ServiceStat from '@/components/SimpleProject/ServiceStat';
import TechnicalExpertHero from '@/components/Hero/TechnicalExpertHero';
import HCarousel from '@/components/HCarousel/HCarousel';
import Image from 'next/image';
import MarkCard from '@/components/Card/MarkCard';
import { Text } from '@/ui/Text';
import { Button } from '@/ui/Button';
import React from 'react';
import { ClassPropertiess } from '@/ui/common/interface';
import {TreeCard} from "@/components/Card";
import WorkingWithOtherCom from "@/components/ComplexProject/WorkingWithOtherCom";

const projectCss: ClassPropertiess = {
  whyChooseUsClass: 'grid grid-cols-1 gap-7 md:grid-cols-3',
  whyChooseUsContainerClass: 'flex flex-col gap-y-10',
  marketingClass: 'grid grid-cols-1 gap-6 md:col-span-2 lg:grid-cols-4',
  carouselClass: 'my-2 h-[151px] md:h-[550px]',
  serviceClass:
    'mt-24 grid grid-cols-1 gap-x-32 gap-y-12 px-12 md:grid-cols-2 md:px-0 lg:grid-cols-4',
};

export const OurDiyProject = () => {
  return (
    <div>
      <StyleHeading
        title={sections.OUR_DIY_PROJECT.title}
        description={sections.OUR_DIY_PROJECT.description}
      />
      <div className='my-2 '>
        <Tabs
          tabElements={{
            All: <All />,
            Simple: <Simple />,
            Complex: <All />,
          }}
        />
      </div>
    </div>
  );
};

export const ServiceStatics = () => {
  return (
    <div>
      <div className={projectCss.serviceClass}>
        <ServiceStat />
      </div>
    </div>
  );
};

export const TechnicalExpert = () => {
  return (
    <div>
      <StyleHeading
        title={sections.TECHNICAL_EXPERT.title}
        description={sections.TECHNICAL_EXPERT.description}
      />

      <div className='my-2 '>
        <TechnicalExpertHero />
      </div>
    </div>
  );
};

export const LatestDiyProject = () => {
  return (
    <div>
      <StyleHeading
        title={sections.LATEST_DIY_PROJECT.title}
        description={sections.LATEST_DIY_PROJECT.description}
      />
      <div className={projectCss.carouselClass}>
        <HCarousel />
      </div>
    </div>
  );
};

export const BenifitsDiyWorker = () => {
  const imageProps = {
    width: 374,
    height: 374,
    src: 'https://picsum.photos/374/374' || '',
    alt: '',
  };
  return (
    <div>
      <StyleHeading
        title={sections.BENIFITS_DIY_WORKER.title}
        description={sections.BENIFITS_DIY_WORKER.description}
      />
      <div className={projectCss.marketingClass}>
        {marketing.map((e: any, index) => {
          if (e?.image) {
            return (
              <div key={index}>
                <Image {...imageProps} className='h-full rounded-[8px]' />
              </div>
            );
          }
          return (
            <MarkCard
              key={index}
              serial={index + 1}
              title={e.title}
              description={e.description}
            />
          );
        })}
      </div>
    </div>
  );
};

export const WhyChooseUs = () => {
  return (
    <div>
      <StyleHeading
        title={sections.WHY_CHOOSE_US.title}
        description={sections.WHY_CHOOSE_US.description}
      />

      <div className={projectCss.whyChooseUsClass}>
        <div className={projectCss.whyChooseUsContainerClass}>
          <Text tag='h4' decoration='h4' className="font-raleway">
            {sections.WHY_CHOOSE_US.subText1}
          </Text>
          <Text className="font-raleway">{sections.WHY_CHOOSE_US.subText2}</Text>
          <Button className='w-1/2 py-4 font-bold'>Contact us</Button>
        </div>
        <div className={projectCss.marketingClass}>
          {marketing.map((e: any, index) => (
            <MarkCard
              key={index}
              serial={index + 1}
              title={e.title}
              description={e.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};


export const OurWorkingProcess = () => {
    return (
        <div>
            <StyleHeading
                title={sections.OUR_WORKING_PROCESS.title}
                description={sections.OUR_WORKING_PROCESS.description}/>
            <div className=''>
                <TreeCard />
            </div>
        </div>
    );
};

export const OurLatestProject = () => {
    return (
        <div>
            <StyleHeading
                title={sections.OUR_LATEST_COMPLEX_PROJECT.title}
                description={sections.OUR_LATEST_COMPLEX_PROJECT.description}/>
            <div className={projectCss.carouselClass}>
                <HCarousel />
            </div>
        </div>
    );
};

export const WorkingWithDifferentCompany = () => {
    return (
        <div>
            <StyleHeading
                title={sections.WORKING_WITH_DIFFERENT_COMPANY.title}
                description={sections.WORKING_WITH_DIFFERENT_COMPANY.description}/>

            <div className='my-2'>
                <WorkingWithOtherCom />
            </div>
        </div>
    );
};

export const OurDiyProjects = () => {
    return (
      <div>
        <StyleHeading
          title={sections.OUR_DIY_PROJECT.title}
          description={sections.OUR_DIY_PROJECT.description}/>
        <div className='my-2'>
          <Tabs
            tabElements={{
              All: <All />,
              Simple: <Simple />,
              Complex: <All />,
            }}
          />
        </div>
      </div>
    );
};

