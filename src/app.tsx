import { motion } from 'framer-motion'
import { lazy, Suspense } from 'react'
import { useInView } from 'react-intersection-observer'
import { VerticalTimeline } from 'react-vertical-timeline-component'

import { CreateMotion } from './components/global/motion'
import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
  PageHeaderNav
} from './components/global/page-header'
import { PageSection } from './components/global/page-section'
import { CardBasic3D } from './components/shared/cards/basic-3d'
import { Card3D } from './components/shared/cards/card-3d'
import { ExperienceCard } from './components/shared/cards/experience'
import { Button } from './components/ui/button'
import { Spotlight } from './components/ui/spotlight'
import { H1, Small, Ul } from './components/ui/typography'
import { menuLinkConfig } from './constants/nav'
import { aboutConfig } from './constants/sections/about'
import { creditsConfig } from './constants/sections/credits'
import { experiencesConfig } from './constants/sections/experiences'
import { projectsConfig } from './constants/sections/projects'
import { siteConfig } from './constants/site'
import { techsConfig } from './constants/techs'
import { ContactForm } from './features/contact/components/form'
import { useIsMobile } from './hooks/is-mobile'
import { motions } from './lib/motions'

const CanvasEarth = lazy(() => import('./components/shared/canvases/earth'))
const CanvasStars = lazy(() => import('./components/shared/canvases/stars'))

export const App = () => {
  const [contactRef, contactView] = useInView({ triggerOnce: true, delay: 100 })
  const isMobile = useIsMobile()

  return (
    <>
      {/** Home */}
      <PageSection
        id={menuLinkConfig.main.link}
        className="z-10 min-h-[clamp(6.25rem,100vh,75rem)] border-b border-border bg-grid-black/[0.7] dark:border-0 dark:bg-grid-white/[0.5]"
        nestedClassName="flex-center text-center h-screen !pt-0"
      >
        <Spotlight className="-left-20 -top-20 lg:-top-32 lg:left-52 xl:left-72" fill="white" />
        <div className="absolute left-0 top-0 size-full bg-gradient-to-br from-background/90 to-background" />

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="relative flex flex-col items-center"
        >
          <H1 className="max-w-xs text-balance bg-gradient-to-b from-neutral-600 to-neutral-900 bg-clip-text capitalize text-transparent dark:from-neutral-50 dark:to-neutral-400 dark:drop-shadow-whiteGlow sm:max-w-xl xl:max-w-2xl">
            {siteConfig.role}
          </H1>
          <div className="mt-6 lg:mt-8 [&_button]:rounded-lg">
            <a href={'#' + menuLinkConfig.projects.link}>
              <Button size={isMobile ? 'default' : 'lg'}>Projects</Button>
            </a>
            <a className="ml-4 lg:ml-6" href={'#' + menuLinkConfig.contact.link}>
              <Button variant="outline" size={isMobile ? 'default' : 'lg'}>
                Contact me
              </Button>
            </a>
          </div>

          <div className="mx-auto flex w-fit max-w-xs flex-wrap justify-center gap-6 content-space sm:max-w-xl xl:gap-8 [&_svg]:size-7 [&_svg]:text-neutral-500 sm:[&_svg]:size-10">
            {techsConfig.map((tech, index) => (
              <div key={index} className="flex items-center space-x-1 sm:space-x-2">
                {tech.icon && <tech.icon />}
                <span className="text-xs font-semibold text-neutral-500 sm:text-sm">
                  {tech.title}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/** Scroll down */}
        <div className="absolute bottom-8 left-0 mt-auto w-full flex-center">
          <a href="#about" rel="button" aria-label="About">
            <div className="flex h-[40px] w-[25px] justify-center rounded-full border-4 border-primary pt-[3px]">
              <motion.div
                animate={{
                  y: [0, 13, 0]
                }}
                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                  repeatType: 'loop'
                }}
                className="mb-1 size-3 rounded-full bg-primary"
              />
            </div>
            <span className="sr-only">About</span>
          </a>
        </div>
      </PageSection>

      {/** About */}
      <PageSection id={menuLinkConfig.about.link}>
        <PageHeader>
          <PageHeaderNav>Introduction</PageHeaderNav>
          <PageHeaderHeading>About me</PageHeaderHeading>
          <PageHeaderDescription>{aboutConfig.description}</PageHeaderDescription>
        </PageHeader>

        <motion.ul
          className="grid w-fit grid-cols-2 gap-8 content-space lg:grid-cols-4"
          {...motions.showOnlyViewOnce}
        >
          {aboutConfig.roles.map((role, index) => (
            <motion.li
              key={role.text}
              custom={index ?? 0 * 1.5}
              variants={motions.variants.fadeIn({
                direction: 'left',
                duration: 0.75,
                delay: 0.4
              })}
            >
              <CardBasic3D {...role} />
            </motion.li>
          ))}
        </motion.ul>
        <CreateMotion
          component={Small}
          variants={motions.variants.fadeIn({
            direction: 'down'
          })}
          {...motions.showOnlyViewOnce}
          className="mx-auto max-w-4xl text-pretty text-center font-bold content-space-lg"
        >
          <span className="text-2xl max-lg:hidden">&quot; </span>
          {aboutConfig.quote}
          <span className="text-2xl leading-none max-lg:hidden"> &quot;</span>
        </CreateMotion>
      </PageSection>

      {/** Experience */}
      <PageSection id={menuLinkConfig.experience.link}>
        <PageHeader>
          <PageHeaderNav>The progress I&apos;ve made up to this point</PageHeaderNav>
          <PageHeaderHeading>Work Experience</PageHeaderHeading>
        </PageHeader>
        <div className="content-space" />
        <VerticalTimeline className="before:!bg-foreground sm:!w-[95%]">
          {experiencesConfig.map((v) => (
            <ExperienceCard key={v.company} {...v} />
          ))}
        </VerticalTimeline>
      </PageSection>

      {/** Projects */}
      <PageSection id={menuLinkConfig.projects.link}>
        <PageHeader>
          <PageHeaderNav>Collections of my artistic endeavors</PageHeaderNav>
          <PageHeaderHeading>Projects</PageHeaderHeading>
          <PageHeaderDescription>{projectsConfig.description}</PageHeaderDescription>
        </PageHeader>

        <ul className="grid grid-cols-1 gap-5 content-space sm:grid-cols-2 lg:grid-cols-3">
          {projectsConfig.projects.map((project) => (
            <motion.li
              key={project.title}
              variants={motions.variants.fadeIn({
                direction: 'down',
                duration: 1,
                delay: 0.5
              })}
              {...motions.showOnlyViewOnce}
            >
              <Card3D {...project} />
            </motion.li>
          ))}
        </ul>
      </PageSection>

      {/** Contact */}
      <PageSection
        id={menuLinkConfig.contact.link}
        nestedClassName="flex min-h-[45rem] flex-col-reverse items-center justify-between lg:gap-10 lg:flex-row"
        ref={contactRef}
      >
        <motion.div
          className="relative w-full flex-1 rounded-lg bg-card p-6 text-card-foreground shadowCard lg:max-w-[45vw] 2xl:max-w-[40vw]"
          variants={motions.variants.fadeIn({
            direction: 'left',
            type: 'spring',
            duration: 3,
            delay: 0.6,
            directionAmount: 250
          })}
          initial="initial"
          animate="animate"
        >
          <PageHeader>
            <PageHeaderNav>Get In Touch</PageHeaderNav>
            <PageHeaderHeading>Contact</PageHeaderHeading>
          </PageHeader>
          <ContactForm className="mt-10 focus:border-none focus:outline-0 focus:ring-0" />
        </motion.div>
        {!isMobile && contactView && (
          <>
            <Suspense>
              <motion.div
                className="pointer-events-none absolute left-0 top-0 size-full"
                variants={motions.variants.fadeIn({
                  duration: 3,
                  delay: 2,
                  directionAmount: 0
                })}
                initial="initial"
                animate="animate"
              >
                <CanvasStars className="!pointer-events-none" />
              </motion.div>
            </Suspense>
            <Suspense>
              <motion.div
                className="h-[260px] w-fit min-w-[350px] sm:h-[350px] xl:h-[400px] xl:min-w-[400px] 2xl:h-[500px] 2xl:min-w-[500px]"
                variants={motions.variants.fadeIn({
                  direction: 'right',
                  duration: 3,
                  delay: 1.5,
                  directionAmount: 250
                })}
                initial="initial"
                animate="animate"
              >
                <CanvasEarth />
              </motion.div>
            </Suspense>
          </>
        )}
      </PageSection>

      {/** Credits */}
      <PageSection className="pb-10">
        <PageHeader>
          <PageHeaderNav>Explore models</PageHeaderNav>
          <PageHeaderHeading>Credits</PageHeaderHeading>
        </PageHeader>
        <motion.div {...motions.showOnlyViewOnce}>
          <Ul>
            {creditsConfig.map((credit) => (
              <motion.li
                key={credit.title}
                variants={motions.variants.fadeIn({
                  direction: 'left'
                })}
              >
                <p className="max-w-5xl break-words max-lg:text-sm max-sm:text-xs">
                  <strong className="mr-1">{credit.title}:</strong>
                  {credit.description}
                </p>
              </motion.li>
            ))}
          </Ul>
        </motion.div>
      </PageSection>
    </>
  )
}
