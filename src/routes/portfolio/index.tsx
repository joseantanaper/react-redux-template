import { PageLayout, LoaderData } from '@/components/layout/PageLayout'
import { useLoaderData } from 'react-router-dom'
import { useTranslation, Trans } from 'react-i18next'
import Title from '@/components/widgets/Title'
import { IconMap } from '@/components/widgets/Icon'
import { Avataro } from '@/components/widgets/Avataro'
import { Summary } from './Summary'
import { ExperienceList } from './ExperienceList'
import { AcademicList } from './AcademicList'
import { Linko } from '@/components/widgets/Linko'

export const Portfolio = () => {
  const { t, i18n } = useTranslation()
  const loader = (useLoaderData() as LoaderData) || {}
  const { iconmap } = loader ?? IconMap.Code

  const toolbar = (
    <>
      <li className="nav-item">
        <Linko
          iconmap={iconmap || IconMap.Code}
          label={`${t('app:portfolio:summaryTitle')}`}
          href="#summary"
        />
      </li>
      <li className="nav-item float-end">
        <Linko
          iconmap={iconmap || IconMap.Code}
          label={`${t('app:portfolio:experienceTitle')}`}
          href="#experience"
        />
      </li>

      <li className="nav-item">
        <Linko
          iconmap={iconmap || IconMap.Code}
          label={`${t('Footer')}`}
          href="#footer"
        />{' '}
      </li>
    </>
  )

  return (
    <PageLayout subnavbar={true} toolbar={toolbar}>
      {/* Summary */}
      <Summary id="summary" iconmap={iconmap} />

      {/* Experience */}
      <ExperienceList id="experience" iconmap={iconmap} />

      {/* Academic Background */}
      <AcademicList
        id="academic"
        title="app:portfolio:academicTitle"
        entry="app:portfolio:academic"
        rightLinkLabel="app:site"
        iconmap={iconmap}
      />

      {/* Certification */}
      <AcademicList
        id="certifications"
        title="app:portfolio:certificationTitle"
        entry="app:portfolio:certification"
        leftLinkIcon={IconMap.Code}
        rightLinkIcon={IconMap.Academic}
        rightLinkLabel="app:portfolio:viewMyCert"
        iconmap={iconmap}
      />

      {/* Skills */}
      <AcademicList
        id="skills"
        title="app:portfolio:skillsTitle"
        entry="app:portfolio:skills"
        leftLinkIcon={IconMap.Code}
        rightLinkIcon={IconMap.Academic}
        rightLinkLabel="app:portfolio:viewMyCert"
        iconmap={iconmap}
      />
    </PageLayout>
  )
}

export default Portfolio
