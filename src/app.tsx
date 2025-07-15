import { lazy, Suspense } from 'react'
import { useInView } from 'react-intersection-observer'

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
import { menuLinkConfig } from './config/nav'
import { aboutConfig } from './config/sections/about'
import { creditsConfig } from './config/sections/credits'
import { experiencesConfig } from './config/sections/experiences'
import { projectsConfig } from './config/sections/projects'
import { siteConfig } from './config/site'
import { techsConfig } from './config/techs'
import { ContactForm } from './features/contact/components/form'
import { VerticalTimeline } from './features/vertical-timeline/view'
import { useIsMobile } from './hooks/is-mobile'

const CanvasEarth = lazy(() => import('./components/shared/canvases/earth'))
const CanvasStars = lazy(() => import('./components/shared/canvases/stars'))

export const App = () => {
  const [contactRef, contactView] = useInView({ triggerOnce: true, rootMargin: '400px' })
  const isMobile = useIsMobile()
  return (
    <>
      {/** Home */}
      <PageSection
        id={menuLinkConfig.main.link}
        className="z-10 min-h-[clamp(6.25rem,100vh,75rem)] border-b border-border bg-grid-black/[0.7] dark:border-0 dark:bg-grid-white/[0.5]"
        nestedClassName="lg:flex-center pt-60 sm:pt-72 text-center h-screen lg:!pt-0"
      >
        <Spotlight className="-left-20 -top-20 lg:-top-32 lg:left-52 xl:left-72" fill="white" />

        <div className="absolute left-0 top-0 size-full bg-gradient-to-br from-background/90 to-background" />

        <div className="relative flex flex-col items-center">
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
                <span className="text-sm font-semibold text-neutral-500">{tech.title}</span>
              </div>
            ))}
          </div>
        </div>
      </PageSection>

      {/** About */}
      <PageSection id={menuLinkConfig.about.link}>
        <PageHeader>
          <PageHeaderNav>Introduction</PageHeaderNav>
          <PageHeaderHeading>About me</PageHeaderHeading>
          <PageHeaderDescription>{aboutConfig.description}</PageHeaderDescription>
        </PageHeader>

        <ul className="grid w-fit grid-cols-2 gap-8 content-space [grid-auto-rows:1fr] lg:grid-cols-4">
          {aboutConfig.roles.map((role) => (
            <li key={role.text}>
              <CardBasic3D {...role} />
            </li>
          ))}
        </ul>
        <Small className="mx-auto max-w-4xl text-pretty text-center font-bold content-space-lg">
          <span className="text-2xl max-lg:hidden">&quot; </span>
          {aboutConfig.quote}
          <span className="text-2xl leading-none max-lg:hidden"> &quot;</span>
        </Small>
      </PageSection>

      {/** Experience */}
      <PageSection id={menuLinkConfig.experience.link}>
        <PageHeader>
          <PageHeaderNav>The progress I&apos;ve made up to this point</PageHeaderNav>
          <PageHeaderHeading>Work Experience</PageHeaderHeading>
        </PageHeader>
        <div className="content-space" />
        <VerticalTimeline>
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

        <ul className="grid grid-cols-1 gap-5 content-space lg:grid-cols-2 xl:grid-cols-3">
          {projectsConfig.projects.map((project) => (
            <li key={project.title}>
              <Card3D {...project} />
            </li>
          ))}
        </ul>
      </PageSection>

      {/** Contact */}
      <PageSection
        id={menuLinkConfig.contact.link}
        nestedClassName="flex min-h-[45rem] flex-col-reverse items-center justify-between lg:gap-10 lg:flex-row"
        ref={contactRef}
      >
        <div className="relative w-full flex-1 rounded-lg bg-card p-6 text-card-foreground shadowCard lg:max-w-[45vw] 2xl:max-w-[40vw]">
          <PageHeader>
            <PageHeaderNav>Get In Touch</PageHeaderNav>
            <PageHeaderHeading>Contact</PageHeaderHeading>
          </PageHeader>
          <ContactForm className="mt-10 focus:border-none focus:outline-0 focus:ring-0" />
        </div>
        {!isMobile && contactView && (
          <>
            <Suspense>
              <div className="pointer-events-none absolute left-0 top-0 size-full">
                <CanvasStars className="!pointer-events-none" />
              </div>
            </Suspense>
            <Suspense>
              <div className="h-[260px] w-fit min-w-[350px] sm:h-[350px] xl:h-[400px] xl:min-w-[400px] 2xl:h-[500px] 2xl:min-w-[500px]">
                <CanvasEarth />
              </div>
            </Suspense>
          </>
        )}
      </PageSection>

      {/** Credits */}
      {!isMobile && (
        <PageSection>
          <PageHeader>
            <PageHeaderNav>Explore models</PageHeaderNav>
            <PageHeaderHeading>Credits</PageHeaderHeading>
          </PageHeader>
          <div>
            <Ul>
              {creditsConfig.map((credit) => (
                <li key={credit.title}>
                  <p className="max-w-5xl break-words">
                    <strong className="mr-1">{credit.title}:</strong>
                    {credit.description}
                  </p>
                </li>
              ))}
            </Ul>
          </div>
        </PageSection>
      )}
    </>
  )
}
