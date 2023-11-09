import { PageLayout } from '@/components/layout/PageLayout'
import { Avatar, LoremIpsum } from 'react-lorem-ipsum'
import { Icon, IconMap } from '@/components/widgets/Icon'
import { Linko } from '@/components/widgets/Linko'
import { useTranslation, Trans } from 'react-i18next'
import { Avataro } from '@/components/widgets/Avataro'

const Index = () => {
  const { t } = useTranslation()
  const toolbar = (
    <>
      <li className="nav-item">
        <Linko
          iconmap={IconMap.Code}
          label={`${t('Section')} #1`}
          href="#section1"
        />
      </li>
      <li className="nav-item float-end">
        <Linko
          iconmap={IconMap.Code}
          label={`${t('Section')} #2`}
          href="#section2"
        />
      </li>
      <li className="nav-item">
        <Linko
          iconmap={IconMap.Code}
          label={`${t('Section')} #3`}
          href="#section3"
        />{' '}
      </li>
      <li className="nav-item">
        <Linko
          iconmap={IconMap.Code}
          label={`${t('Section')} #4`}
          href="#section4"
        />{' '}
      </li>
      <li className="nav-item">
        <Linko
          iconmap={IconMap.Code}
          label={`${t('Section')} #5`}
          href="#section5"
        />{' '}
      </li>
      <li className="nav-item">
        <Linko iconmap={IconMap.Code} label={`${t('Footer')}`} href="#footer" />{' '}
      </li>
    </>
  )

  return (
    <PageLayout subnavbar={true} toolbar={toolbar}>
      <div className="container-fluid mb-5">
        {/* Section 1 */}
        <div className="row">
          <div className="col">
            <h2 id="section1">
              {t('Section')} #1: {t('app:home:navbarTitle')}
            </h2>
          </div>
        </div>
        <div className="row fw-light">
          <div className="col">
            <Trans>app:home:navbar</Trans>
          </div>
          <div className="col text-center">
            <Avataro size="40%" label="Custom Avatar" className="shadow" />
          </div>
        </div>
      </div>

      {/* Section 2 */}
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col">
            <h2 id="section2">
              {t('Section')} #2: {t('app:home:routeTitle')}
            </h2>
          </div>
        </div>
        <div className="row">
          <div className="col text-center">
            <Icon
              iconmap={IconMap.Hypnotize}
              size={240}
              extra="app-self-rotate"
            />
            <br />
            <span className="app-legend">SVG with CSS animation</span>
          </div>
          <div className="col fw-light">
            <Trans>{'app:home:route'}</Trans>
          </div>
        </div>
        <div className="row mt-5"></div>
      </div>

      {/* Section 3 */}
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col text-justify">
            <h2 id="section3">
              {t('Section')} #3: {t('app:home:layoutTitle')}
            </h2>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <Trans>app:home:layout</Trans>
          </div>
          <div className="col">
            <div className="row d-flex align-items-center text-center px-5">
              {[0, 1, 2, 3].map((user, index) => {
                return (
                  <div key={`div-avatar-${index}`} className="col">
                    <Avatar
                      gender="all"
                      className="avatar app-rotate rounded-circle app-profile mb-2 shadow"
                      width="200"
                      height="200"
                      alt="Avatar"
                    />
                  </div>
                )
              })}
              <span className="app-legend">
                Random Avatars. Rotate on hover!
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col">
            <h2 id="section4">{t('Section')} #4</h2>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="bg-black text-center p-2 overflow-hidden rounded-5 shadow">
              <iframe
                width="480"
                height="400"
                src="https://www.youtube.com/embed/bbwQL_YJCnY?si=qO5WLUJ_W5pxE_IC"
                title="Arkanoid"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              ></iframe>
            </div>
            <br />
            <div className="text-center">
              <span className="app-legend">
                Arkanoid · アルカノイド. MSX. Taito 1986. Full Insane No-Death
                Playthrough
              </span>
            </div>
          </div>
          <div className="col">
            <div className="row">
              <div className="col">
                <LoremIpsum p={2} />
              </div>
              <div className="col">
                <LoremIpsum p={2} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col text-justify">
            <h2 id="section5">{t('Section')} #5</h2>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <LoremIpsum p={6} />
          </div>
          <div className="col">
            <LoremIpsum p={6} />
          </div>
          <div className="col">
            <LoremIpsum p={6} />
          </div>
        </div>
      </div>
    </PageLayout>
  )
}

export default Index
