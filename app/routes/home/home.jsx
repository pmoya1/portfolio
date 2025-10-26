import sentinelTexture2Large from '~/assets/sentinel-2.png';
import sentinelTexture2Placeholder from '~/assets/sentinel-2.png';
import sentinelTexture2 from '~/assets/sentinel-2.png';
import sentinelTextureLarge from '~/assets/sentinel-1.png';
import sentinelTexturePlaceholder from '~/assets/sentinel-1.png';
import sentinelTexture from '~/assets/sentinel-1.png';
import bristolTextureLarge from '~/assets/bristol.png';
import bristolTexturePlaceholder from '~/assets/bristol.png';
import bristolTexture from '~/assets/bristol.png';
import sprTextureLarge from '~/assets/spr-lesson-builder-dark-large.jpg';
import sprTexturePlaceholder from '~/assets/spr-lesson-builder-dark-placeholder.jpg';
import sprTexture from '~/assets/spr-lesson-builder-dark.jpg';
// FINI assets temporarily commented out - missing files
// import finiTextureLarge from '~/assets/fini-screenshot-large.png';
// import finiTexturePlaceholder from '~/assets/fini-screenshot-placeholder.png';
// import finiTexture from '~/assets/fini-screenshot.png';
import { Footer } from '~/components/footer';
import { baseMeta } from '~/utils/meta';
import { Intro } from './intro';
import { Profile } from './profile';
import { ProjectSummary } from './project-summary';
import { Extracurricular } from './extracurricular';
import { useEffect, useRef, useState } from 'react';
import config from '~/config.json';
import styles from './home.module.css';

// Prefetch draco decoader wasm
export const links = () => {
  return [
    {
      rel: 'prefetch',
      href: '/draco/draco_wasm_wrapper.js',
      as: 'script',
      type: 'text/javascript',
      importance: 'low',
    },
    {
      rel: 'prefetch',
      href: '/draco/draco_decoder.wasm',
      as: 'fetch',
      type: 'application/wasm',
      importance: 'low',
    },
  ];
};

export const meta = () => {
  return baseMeta({
    title: 'Work',
    description: `Design portfolio of ${config.name} — a product designer working on web & mobile apps with a focus on motion, experience design, and accessibility.`,
  });
};

export const Home = () => {
  const [visibleSections, setVisibleSections] = useState([]);
  const [scrollIndicatorHidden, setScrollIndicatorHidden] = useState(false);
  const intro = useRef();
  const projectOne = useRef();
  const projectTwo = useRef();
  const projectThree = useRef();
  const projectFour = useRef();
  const details = useRef();

  useEffect(() => {
    const sections = [intro, projectOne, projectTwo, projectThree, projectFour, details];

    const sectionObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const section = entry.target;
            observer.unobserve(section);
            if (visibleSections.includes(section)) return;
            setVisibleSections(prevSections => [...prevSections, section]);
          }
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
    );

    const indicatorObserver = new IntersectionObserver(
      ([entry]) => {
        setScrollIndicatorHidden(!entry.isIntersecting);
      },
      { rootMargin: '-100% 0px 0px 0px' }
    );

    sections.forEach(section => {
      sectionObserver.observe(section.current);
    });

    indicatorObserver.observe(intro.current);

    return () => {
      sectionObserver.disconnect();
      indicatorObserver.disconnect();
    };
  }, [visibleSections]);

  return (
    <div className={styles.home}>
      <Intro
        id="intro"
        sectionRef={intro}
        scrollIndicatorHidden={scrollIndicatorHidden}
      />
      <ProjectSummary
        id="project-1"
        sectionRef={projectOne}
        visible={visibleSections.includes(projectOne.current)}
        index={1}
        title="FINI: The Future of Financial Education"
        description="Empowering people to build financial confidence and healthy money habits through playful exploration."
        buttonText="View project"
        buttonLink="/projects/smart-sparrow"
        model={{
          type: 'laptop',
          alt: 'FINI financial education platform',
          textures: [
            {
              srcSet: `${sprTexture} 1280w, ${sprTextureLarge} 2560w`,
              placeholder: sprTexturePlaceholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-2"
        alternate
        sectionRef={projectTwo}
        visible={visibleSections.includes(projectTwo.current)}
        index={2}
        title="Sentinel Global - Analyst"
        description="Venture capital firm recently closed a $200M+ fund focused on deep tech, climate, and AI. Support investment team with startup sourcing, due diligence, and market research. Created multiple internal agentic systems leveraging LLMs to analyze public information and integrate data room scraping tools to streamline due diligence processes."
        buttonText="View website"
        buttonLink="https://www.sentinelglobal.xyz/"
        model={{
          type: 'phone',
          alt: 'Sentinel Global website',
          textures: [
            {
              srcSet: `${sentinelTexture} 375w, ${sentinelTextureLarge} 750w`,
              placeholder: sentinelTexturePlaceholder,
            },
            {
              srcSet: `${sentinelTexture2} 375w, ${sentinelTexture2Large} 750w`,
              placeholder: sentinelTexture2Placeholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-3"
        sectionRef={projectThree}
        visible={visibleSections.includes(projectThree.current)}
        index={3}
        title="University of Bristol - BSc in Mathematics and Philosophy"
        description="Third year undergraduate specializing in theoretical mathematics, metaphysics and philosophical theology."
        buttonText="View course"
        buttonLink="https://www.bristol.ac.uk/study/undergraduate/2026/maths/bsc-mathematics-and-philosophy/"
        model={{
          type: 'laptop',
          alt: 'University of Bristol Mathematics and Philosophy',
          textures: [
            {
              srcSet: `${bristolTexture} 800w, ${bristolTextureLarge} 1920w`,
              placeholder: bristolTexturePlaceholder,
            },
          ],
        }}
      />
      <Extracurricular
        id="project-4"
        sectionRef={projectFour}
        visible={visibleSections.includes(projectFour.current)}
      />
      <Profile
        sectionRef={details}
        visible={visibleSections.includes(details.current)}
        id="details"
      />
      <Footer />
    </div>
  );
};
