import { Heading } from '~/components/heading';
import { Section } from '~/components/section';
import { Text } from '~/components/text';
import { Transition } from '~/components/transition';
import { useEffect, useRef, useState } from 'react';
import { throttle } from '~/utils/throttle';
import styles from './extracurricular.module.css';

const extracurricularItems = [
  {
    title: 'Chartered Financial Analyst (CFA) Level 1 Exam Pass',
    description: 'Passed after one month of preparation; covered core topics in finance, accounting, corporate governance, and investments',
    date: 'Feb 2025',
  },
  {
    title: 'Private Markets Investment Programme (Oxford)',
    description: 'Completed a 6-week (60 hour) Private Markets Investments Program at Said Business School, Oxford, focusing on private asset acquisition, investment structuring and more',
    date: 'Sep 2024',
  },
  {
    title: 'Real Estate Economics and Finance (LSE)',
    description: 'Completed an 8-week (80 hour) certificate in Real Estate Economics and Finance at LSE, focusing on investment analysis, market trends, and sector financial mechanisms',
    date: 'Aug 2024',
  },
  {
    title: 'General Accounting Certificate (Contabilidad General INEAF)',
    description: 'Completed a 120-hour Superior Course in General Accounting with a grade of 100. Training included skills in bookkeeping, financial statements, Spanish & international tax',
    date: 'Jul 2024',
  },
];

export function Extracurricular({ id, visible, sectionRef }) {
  const [focused, setFocused] = useState(false);
  const [positions, setPositions] = useState([
    { x: 0, y: 0 },
    { x: 0, y: 0 },
    { x: 0, y: 0 },
    { x: 0, y: 0 },
  ]);
  const containerRef = useRef();
  const titleId = `${id}-title`;

  useEffect(() => {
    const handleMouseMove = throttle(event => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const relativeX = (event.clientX - centerX) / rect.width;
      const relativeY = (event.clientY - centerY) / rect.height;

      setPositions([
        { x: relativeX * 30, y: relativeY * 30 },
        { x: relativeX * -25, y: relativeY * 25 },
        { x: relativeX * 20, y: relativeY * -20 },
        { x: relativeX * -15, y: relativeY * -15 },
      ]);
    }, 16);

    if (visible) {
      window.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [visible]);

  return (
    <Section
      className={styles.extracurricular}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      as="section"
      id={id}
      ref={sectionRef}
      aria-labelledby={titleId}
      tabIndex={-1}
    >
      <Transition in={visible || focused}>
        {({ visible: transitionVisible, nodeRef }) => (
          <div className={styles.content} ref={nodeRef}>
            <div className={styles.header}>
              <Heading
                level={3}
                as="h2"
                className={styles.title}
                data-visible={transitionVisible}
                id={titleId}
              >
                Extracurricular
              </Heading>
              <Text className={styles.description} data-visible={transitionVisible} as="p">
                Beyond the classroom: exploring passions, building skills, and engaging with
                communities that shape who I am.
              </Text>
            </div>
            <div className={styles.squares} ref={containerRef}>
              {extracurricularItems.map((item, index) => (
                <div
                  key={index}
                  className={styles.square}
                  data-visible={transitionVisible}
                  style={{
                    transform: `translate(${positions[index].x}px, ${positions[index].y}px)`,
                    transition: 'transform 0.3s ease-out',
                  }}
                >
                  <div className={styles.squareContent}>
                    <h3 className={styles.squareTitle}>{item.title}</h3>
                    <p className={styles.squareDescription}>{item.description}</p>
                    <div className={styles.squareMeta}>
                      <span className={styles.squareDelivery}>ONLINE</span>
                      <span className={styles.squareDate}>{item.date}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </Transition>
    </Section>
  );
}

