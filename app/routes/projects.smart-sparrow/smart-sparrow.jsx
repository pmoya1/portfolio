import backgroundSprLarge from '~/assets/spr-background-large.jpg';
import backgroundSprPlaceholder from '~/assets/spr-background-placeholder.jpg';
import imageSprBackgroundVolcanismLarge from '~/assets/spr-background-volcanism-large.jpg';
import imageSprBackgroundVolcanismPlaceholder from '~/assets/spr-background-volcanism-placeholder.jpg';
import imageSprBackgroundVolcanism from '~/assets/spr-background-volcanism.jpg';
import backgroundSpr from '~/assets/spr-background.jpg';
import imageSprComponentsDarkLarge from '~/assets/spr-components-dark-large.png';
import imageSprComponentsDarkPlaceholder from '~/assets/spr-components-dark-placeholder.png';
import imageSprComponentsDark from '~/assets/spr-components-dark.png';
import imageSprComponentsLightLarge from '~/assets/spr-components-light-large.png';
import imageSprComponentsLightPlaceholder from '~/assets/spr-components-light-placeholder.png';
import imageSprComponentsLight from '~/assets/spr-components-light.png';
import imageSprDesignSystemDarkLarge from '~/assets/spr-design-system-dark-large.png';
import imageSprDesignSystemDarkPlaceholder from '~/assets/spr-design-system-dark-placeholder.png';
import imageSprDesignSystemDark from '~/assets/spr-design-system-dark.png';
import imageSprDesignSystemLightLarge from '~/assets/spr-design-system-light-large.png';
import imageSprDesignSystemLightPlaceholder from '~/assets/spr-design-system-light-placeholder.png';
import imageSprDesignSystemLight from '~/assets/spr-design-system-light.png';
import imageSprLessonBuilderDarkLarge from '~/assets/spr-lesson-builder-dark-large.jpg';
import imageSprLessonBuilderDarkPlaceholder from '~/assets/spr-lesson-builder-dark-placeholder.jpg';
import imageSprLessonBuilderDark from '~/assets/spr-lesson-builder-dark.jpg';
import imageSprLessonBuilderLightLarge from '~/assets/spr-lesson-builder-light-large.jpg';
import imageSprLessonBuilderLightPlaceholder from '~/assets/spr-lesson-builder-light-placeholder.jpg';
import imageSprLessonBuilderLight from '~/assets/spr-lesson-builder-light.jpg';
import videoSprMotionLarge from '~/assets/spr-motion-large.mp4';
import videoSprMotionPlaceholder from '~/assets/spr-motion-placeholder.jpg';
import videoSprMotion from '~/assets/spr-motion.mp4';
import imageSprSchema1DarkLarge from '~/assets/spr-schema-1-dark-large.png';
import imageSprSchema1DarkPlaceholder from '~/assets/spr-schema-1-dark-placeholder.png';
import imageSprSchema1Dark from '~/assets/spr-schema-1-dark.png';
import imageSprSchema1LightLarge from '~/assets/spr-schema-1-light-large.png';
import imageSprSchema1LightPlaceholder from '~/assets/spr-schema-1-light-placeholder.png';
import imageSprSchema1Light from '~/assets/spr-schema-1-light.png';
import imageSprSchema2DarkLarge from '~/assets/spr-schema-2-dark-large.png';
import imageSprSchema2DarkPlaceholder from '~/assets/spr-schema-2-dark-placeholder.png';
import imageSprSchema2Dark from '~/assets/spr-schema-2-dark.png';
import imageSprSchema2LightLarge from '~/assets/spr-schema-2-light-large.png';
import imageSprSchema2LightPlaceholder from '~/assets/spr-schema-2-light-placeholder.png';
import imageSprSchema2Light from '~/assets/spr-schema-2-light.png';
import imageSprStoryboarderDarkLarge from '~/assets/spr-storyboarder-dark-large.png';
import imageSprStoryboarderDarkPlaceholder from '~/assets/spr-storyboarder-dark-placeholder.png';
import imageSprStoryboarderDark from '~/assets/spr-storyboarder-dark.png';
import imageSprStoryboarderLightLarge from '~/assets/spr-storyboarder-light-large.png';
import imageSprStoryboarderLightPlaceholder from '~/assets/spr-storyboarder-light-placeholder.png';
import imageSprStoryboarderLight from '~/assets/spr-storyboarder-light.png';
// FINI assets temporarily commented out - missing files
// import finiTextureLarge from '~/assets/fini-screenshot-large.png';
// import finiTexturePlaceholder from '~/assets/fini-screenshot-placeholder.png';
// import finiTexture from '~/assets/fini-screenshot.png';
// import world1ImageLarge from '~/assets/world1-image-large.jpg';
// import world1ImagePlaceholder from '~/assets/world1-image-placeholder.jpg';
// import world1Image from '~/assets/world1-image.jpg';
// import pathwaysImageLarge from '~/assets/pathways-image-large.png';
// import pathwaysImagePlaceholder from '~/assets/pathways-image-placeholder.png';
// import pathwaysImage from '~/assets/pathways-image.png';
// import userCentricityImageLarge from '~/assets/user-centricity-image-large.png';
// import userCentricityImagePlaceholder from '~/assets/user-centricity-image-placeholder.png';
// import userCentricityImage from '~/assets/user-centricity-image.png';
import { Footer } from '~/components/footer';
import { Image } from '~/components/image';
import { Link } from '~/components/link';
import { SegmentedControl, SegmentedControlOption } from '~/components/segmented-control';
import { ThemeProvider, useTheme } from '~/components/theme-provider';
import {
  ProjectBackground,
  ProjectContainer,
  ProjectHeader,
  ProjectImage,
  ProjectSection,
  ProjectSectionColumns,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
  ProjectTextRow,
} from '~/layouts/project';
import { baseMeta } from '~/utils/meta';
import { Suspense, lazy, useMemo } from 'react';
import { media } from '~/utils/style';
import styles from './smart-sparrow.module.css';

const Earth = lazy(() => import('./earth').then(module => ({ default: module.Earth })));
const EarthSection = lazy(() =>
  import('./earth').then(module => ({ default: module.EarthSection }))
);

const title = 'FINI: The Future of Financial Education';
const description =
  'Leading the company to empower people to build financial confidence and healthy money habits through playful exploration. FINI transforms complex financial concepts into interactive, engaging experiences, all in one app.';
const roles = [
  'Company Leadership',
  'Product Management',
  'Innovation',
  'Growth Strategy',
];

export const meta = () => {
  return baseMeta({ title, description, prefix: 'Work' });
};

export const SmartSparrow = () => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';
  const themes = ['dark', 'light'];

  const handleThemeChange = index => {
    toggleTheme(themes[index]);
  };

  return (
    <>
      <ProjectContainer>
        <ProjectBackground
          opacity={isDark ? 0.5 : 0.8}
          src={backgroundSpr}
          srcSet={`${backgroundSpr} 1080w, ${backgroundSprLarge} 2160w`}
          placeholder={backgroundSprPlaceholder}
        />
        <ProjectHeader
          title={title}
          description={description}
          url="https://www.fini-app.com/"
          roles={roles}
        />
        <ProjectSection padding="top">
          <ProjectSectionContent>
            {/* FINI image temporarily removed - missing assets */}
            {/* <ProjectImage
              raised
              key={theme}
              srcSet={`${finiTexture} 1280w, ${finiTextureLarge} 2560w`}
              width={1280}
              height={800}
              placeholder={finiTexturePlaceholder}
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 800px, 1000px`}
              alt="FINI financial education platform interface"
            /> */}
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectTextRow>
            <ProjectSectionHeading>The mission</ProjectSectionHeading>
            <ProjectSectionText>
              Financial illiteracy is one of today's most critical challenges. Traditional education on money 
              is often intimidating, boring and disconnected from real life. FINI transforms this by making financial 
              learning accessible, engaging, and empowering through playful, interactive experiences that build 
              confidence and healthy money habits.
            </ProjectSectionText>
          </ProjectTextRow>
        </ProjectSection>
        <ProjectSection light={isDark}>
          <ProjectSectionContent>
            {/* FINI world image temporarily removed - missing assets */}
            {/* <Image
              key={theme}
              srcSet={`${world1Image} 1024w, ${world1ImageLarge} 2048w`}
              width={1024}
              height={800}
              placeholder={world1ImagePlaceholder}
              alt="FINI World 1 showing Solar Systems and Worlds structure"
              sizes="100vw"
            /> */}
            <ProjectTextRow>
              <SegmentedControl
                currentIndex={themes.indexOf(theme)}
                onChange={handleThemeChange}
              >
                <SegmentedControlOption>Dark theme</SegmentedControlOption>
                <SegmentedControlOption>Light theme</SegmentedControlOption>
              </SegmentedControl>
            </ProjectTextRow>
             <ProjectTextRow>
               <ProjectSectionHeading>Gamified Learning Experience</ProjectSectionHeading>
               <ProjectSectionText>
                 Large finance themes become Solar Systems, each holding Worlds that dive into focused topics. Explore comprehensive financial concepts in organized, digestible modules with personalized pathways for each individual.
               </ProjectSectionText>
             </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionContent>
            {/* FINI pathways image temporarily removed - missing assets */}
            {/* <Image
              raised
              key={theme}
              srcSet={`${pathwaysImage} 640w, ${pathwaysImageLarge} 1280w`}
              width={640}
              height={480}
              placeholder={pathwaysImagePlaceholder}
              alt="FINI personalized pathways showing user journey customization"
              sizes="100vw"
            /> */}
            <ProjectTextRow>
              <ProjectSectionHeading>Personalized Pathways</ProjectSectionHeading>
              <ProjectSectionText>
                FINI adapts to who you are, what you need, and what you want to learn. Users chart their own course through beautifully designed pathways, guided by curiosity and goals. Learning is never linear or rigid with FINI—every journey is unique and user-controlled.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionColumns>
            <ProjectSectionContent>
              <ProjectTextRow>
                <ProjectSectionHeading>
                  User-Centricity as a Core Principle
                </ProjectSectionHeading>
                <ProjectSectionText>
                  At FINI, user-centricity isn't just a feature—it's the foundation of everything we build. Every design decision, every feature, and every interaction is crafted with the user's journey in mind. We believe that financial education should never feel like a chore. Instead, it should be an empowering, engaging experience that adapts to individual needs, learning styles, and goals.
                </ProjectSectionText>
              </ProjectTextRow>
            </ProjectSectionContent>
            {/* FINI user-centricity image temporarily removed - missing assets */}
            {/* <Image
              raised
              srcSet={`${userCentricityImage} 400w, ${userCentricityImageLarge} 800w`}
              width={400}
              height={650}
              placeholder={userCentricityImagePlaceholder}
              alt="FINI user-centric interface design"
              sizes={`(max-width: ${media.mobile}px) 50vw, 30vw`}
            /> */}
          </ProjectSectionColumns>
        </ProjectSection>
        <ThemeProvider theme="dark" data-invert>
          <Suspense>
            <Earth
              className={styles.earth}
              hideMeshes={useMemo(
                () => ['Atmosphere', 'EarthPartial', 'Chunk', 'EarthFull'],
                []
              )}
              position={useMemo(() => [0, 0, 0], [])}
              labels={useMemo(
                () => [
                  {
                    position: [0.54, 0.19, 0.18],
                    text: 'Pacific ring of fire',
                    hidden: true,
                  },
                  {
                    position: [0.47, -0.38, 0.04],
                    text: 'Ruapehu',
                    hidden: true,
                  },
                  {
                    position: [0.22, 0.44, -0.35],
                    text: 'St. Helens',
                    hidden: true,
                  },
                  {
                    position: [0.16, -0.06, 0.58],
                    text: 'Krakatoa',
                    hidden: true,
                  },
                  {
                    position: [0.11, 0.2, -0.56],
                    text: 'Parícutin',
                    hidden: true,
                  },
                  {
                    position: [0.52, 0.2, -0.23],
                    text: 'Kīlauea',
                    hidden: true,
                  },
                  {
                    position: [-0.24, 0.75, 0.24],
                    text: 'Mantle',
                    delay: 800,
                    hidden: true,
                  },
                  {
                    position: [-0.24, 0.55, 0.24],
                    text: 'Outer core',
                    delay: 800,
                    hidden: true,
                  },
                  {
                    position: [-0.24, 0.35, 0.24],
                    text: 'Inner core',
                    delay: 800,
                    hidden: true,
                  },
                ],
                []
              )}
              scale={0.6}
            >
              <EarthSection
                scrim
                animations={['0:loop']}
                camera={[0, 0, 1.5]}
                meshes={['Atmosphere', 'EarthFull']}
              >
                <ProjectSection>
                  <ProjectSectionContent>
                    <ProjectTextRow center>
                      <ProjectSectionHeading>
                        Transforming Financial Education
                      </ProjectSectionHeading>
                      <ProjectSectionText>
                        Comparable EdTech applications get one primary thing wrong: there is no best way to learn anything 
                        for a collective when trying to target the individual user. The infrastructure must remain flexible 
                        and open for the user to be able to explore their curiosity and stay engaged. FINI's Solar Systems 
                        and Worlds structure provides this flexible foundation.
                      </ProjectSectionText>
                    </ProjectTextRow>
                  </ProjectSectionContent>
                </ProjectSection>
              </EarthSection>
              <EarthSection
                animations={['0:loop']}
                camera={[0, 0, 2.4]}
                meshes={['Atmosphere', 'EarthFull']}
              />
              <EarthSection
                animations={['0:loop']}
                camera={[1.14, -1.39, 0.94]}
                meshes={['Atmosphere', 'EarthFull']}
              >
                <ProjectSection>
                  <ProjectSectionContent width="xl">
                    <ProjectTextRow justify="end" width="s">
                      <ProjectSectionHeading level={4} as="h3">
                        Data-Driven Personalization
                      </ProjectSectionHeading>
                      <ProjectSectionText>
                        FINI analyzes user behavior, learning patterns, and preferences to dynamically adapt content 
                        and recommendations. Through continuous data processing, we guide each student toward their 
                        optimal customized learning path, ensuring they progress at the right pace through topics 
                        that matter most to them.
                      </ProjectSectionText>
                    </ProjectTextRow>
                  </ProjectSectionContent>
                </ProjectSection>
              </EarthSection>
              <EarthSection
                animations={['0:loop']}
                camera={[1.17, 0.69, -1.47]}
                meshes={['Atmosphere', 'EarthFull']}
                labels={[
                  'Pacific ring of fire',
                  'Ruapehu',
                  'St. Helens',
                  'Krakatoa',
                  'Parícutin',
                  'Kīlauea',
                ]}
              >
                <ProjectSection>
                  <ProjectSectionContent width="xl">
                    <ProjectTextRow justify="start" width="s">
                      <ProjectSectionHeading level={4} as="h3">
                        User Control
                      </ProjectSectionHeading>
                      <ProjectSectionText>
                        Every learner charts their own path through FINI's universe. Whether you're exploring 
                        budgeting basics or diving into investment strategies, the platform adapts to your 
                        pace, interests, and learning style.
                      </ProjectSectionText>
                    </ProjectTextRow>
                  </ProjectSectionContent>
                </ProjectSection>
              </EarthSection>
              <EarthSection
                animations={['0:loop']}
                camera={[1.81, 0.51, 0.43]}
                meshes={['Atmosphere', 'EarthFull']}
                labels={[
                  'Pacific ring of fire',
                  'Ruapehu',
                  'St. Helens',
                  'Krakatoa',
                  'Parícutin',
                  'Kīlauea',
                ]}
              />
              <EarthSection
                animations={['0:loop']}
                camera={[0.37, 1.02, 1.84]}
                meshes={['EarthPartial', 'Chunk']}
                labels={['Mantle', 'Outer core', 'Inner core']}
              >
                <ProjectSection>
                  <ProjectSectionContent width="xl">
                    <ProjectTextRow justify="end" width="s">
                      <ProjectSectionHeading level={4} as="h3">
                        Long-term Impact
                      </ProjectSectionHeading>
                      <ProjectSectionText>
                        FINI doesn't just teach concepts—it builds habits. By focusing on practical skills 
                        and consistent engagement, we help users develop financial confidence that lasts 
                        beyond the learning experience.
                      </ProjectSectionText>
                    </ProjectTextRow>
                  </ProjectSectionContent>
                </ProjectSection>
              </EarthSection>
              <EarthSection
                scrimReverse
                animations={['0:loop']}
                camera={[0.37, 1.02, 1.84]}
                meshes={['Atmosphere', 'EarthFull']}
              />
            </Earth>
          </Suspense>
        </ThemeProvider>
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow center centerMobile noMargin>
              <ProjectSectionHeading>Impact & Future</ProjectSectionHeading>
              <ProjectSectionText>
                FINI is currently in development and testing phases. Join us on the ride to financial independence 
                by joining our waitlist on our website.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </>
  );
};
