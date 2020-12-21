import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import media from '@utils/media';

const svgVariants = {
  initial: {
    y: -1000,
    x: 1000,
  },
  animate: {
    y: 0,
    x: 0,
    transition: { duration: 2 },
  },
  exit: {
    y: 1000,
    x: -1000,
    transition: { duration: 1 },
  },
};

const upperSmallStreakOutsideVariants = {
  animate: {
    x: -20,
    y: 20,
    transition: {
      duration: 10,
      yoyo: Infinity,
    },
  },
};

const bottomSmallStreakOutsideVariants = {
  animate: {
    x: 50,
    y: -50,
    transition: {
      duration: 10,
      yoyo: Infinity,
    },
  },
};

const backSmallStreakOutsideVariants = {
  animate: {
    x: 50,
    y: -50,
    transition: {
      duration: 5,
      yoyo: Infinity,
    },
  },
};

const bigStreakOutsideVariants = {
  animate: {
    x: 25,
    y: -25,
    transition: {
      duration: 8,
      yoyo: Infinity,
    },
  },
};

const coreVariants = {
  animate: {
    rotate: 360,
    x: [0, 5, -5, 0, 0, 5, -5, 0],
    y: [0, 5, -5, 0, 0, 5, -5, 0],
    transition: {
      duration: 30,
      repeat: Infinity,
      ease: 'linear',
    },
  },
};

const flameVariants = {
  animate: {
    scaleX: [1.03, 1, 1.06],
    scaleY: [1.03, 1, 1.06],
    transition: {
      duration: 6,
      yoyo: Infinity,
      ease: 'linear',
    },
  },
};

const dotInsideLeftVariants = {
  initial: {
    x: -10,
    y: 10,
  },
  animate: {
    x: 10,
    y: -10,
    transition: {
      duration: 7,
      yoyo: Infinity,
    },
  },
};

const dotInsideUpLeftVariants = {
  animate: {
    x: 20,
    y: -20,
    transition: {
      duration: 5,
      yoyo: Infinity,
    },
  },
};

const dotInsideUpRightVariants = {
  initial: {
    x: 20,
    y: -20,
  },
  animate: {
    x: 0,
    y: 0,
    transition: {
      duration: 5,
      yoyo: Infinity,
    },
  },
};

const streakInsideLeftVariants = {
  animate: {
    x: 20,
    y: -20,
    transition: {
      duration: 5,
      yoyo: Infinity,
    },
  },
};

const streakInsideRightVariants = {
  initial: {
    x: 20,
    y: -20,
  },
  animate: {
    x: 0,
    y: 0,
    transition: {
      duration: 5,
      yoyo: Infinity,
    },
  },
};

const streakInsideSmallLeftVariants = {
  animate: {
    x: 15,
    y: -15,
    transition: {
      duration: 5,
      yoyo: Infinity,
    },
  },
};

const Asteroid = () => (
  <MotionSvg
    initial={'initial'}
    animate={'animate'}
    exit={'exit'}
    variants={svgVariants}
    id="Layer_1"
    height="512"
    viewBox="20 -20 600 600"
    width="512"
    xmlns="http://www.w3.org/2000/svg"
    data-name="Layer 1"
  >
    {/* Flame around core */}
    <motion.path
      variants={flameVariants}
      d="m479.69 205.28a18.457 18.457 0 0 1 0 26.11l-231.01 231.01c-50.32 50.32-132.26 51.89-183.07 2.06a129.41 129.41 0 0 1 -.9-183.71l133.93-133.93 50.76-50.76 60.53-60.53a18.887 18.887 0 1 1 26.71 26.71l-36.2 36.2a18.045 18.045 0 1 0 25.52 25.52l107.43-107.43a18.887 18.887 0 1 1 26.71 26.71l-169.75 169.76a18.045 18.045 0 1 0 25.52 25.52l45.11-45.11a18.887 18.887 0 0 1 26.71 26.71l-88.59 88.59a18.049 18.049 0 1 0 25.53 25.52l128.95-128.95a18.463 18.463 0 0 1 26.11 0z"
      fill="#ed6337"
    />
    {/* Main Asteroid */}
    <motion.g variants={coreVariants}>
      <path
        d="m243.76 329.89a97.575 97.575 0 0 1 1.27 81.79 21.9 21.9 0 1 0 -21.38 30.49 97.29 97.29 0 0 1 -159.91-100.58l.07.02a21.008 21.008 0 0 0 1.5 1.66 21.888 21.888 0 1 0 19.27-37.04c.88-.97 1.8-1.92 2.74-2.86a97.287 97.287 0 0 1 130.67-6.28l-.13.16a21.245 21.245 0 0 0 -3.28 2.68 20.913 20.913 0 0 0 29.18 29.96z"
        fill="#fadf4a"
      />
      <path
        d="m245.03 411.68v.01a96.716 96.716 0 0 1 -20.13 29.26c-.41.41-.83.82-1.25 1.22a21.883 21.883 0 1 1 21.38-30.49z"
        fill="#dcbe3f"
      />
      <path
        d="m243.76 329.89a20.913 20.913 0 0 1 -29.18-29.96 21.245 21.245 0 0 1 3.28-2.68l.13-.16q3.57 2.94 6.91 6.28a97.008 97.008 0 0 1 18.86 26.52z"
        fill="#dcbe3f"
      />
      <path
        d="m96.26 312.31a21.888 21.888 0 0 1 -30.95 30.96 21.008 21.008 0 0 1 -1.5-1.66l-.07-.02a96.5 96.5 0 0 1 20.84-35.36 21.8 21.8 0 0 1 11.68 6.08z"
        fill="#dcbe3f"
      />
      <circle cx="162.645" cy="375.945" fill="#dcbe3f" r="14.107" />
      <circle cx="159.686" cy="310.564" fill="#dcbe3f" r="8.564" />
      <circle cx="93.686" cy="392.564" fill="#dcbe3f" r="8.564" />
      <circle cx="152.936" cy="436.564" fill="#dcbe3f" r="11.564" />
    </motion.g>
    {/* Lines inside Asteroid */}
    <motion.g fill="#ffa766">
      <motion.path
        variants={dotInsideUpLeftVariants}
        d="m230.459 162.46a6 6 0 0 1 -4.242-10.242l9.515-9.516a6 6 0 0 1 8.485 8.486l-9.517 9.512a5.978 5.978 0 0 1 -4.241 1.76z"
      />
      <motion.path
        variants={streakInsideLeftVariants}
        d="m153.113 239.806a6 6 0 0 1 -4.242-10.243l56.707-56.707a6 6 0 1 1 8.484 8.486l-56.707 56.707a5.98 5.98 0 0 1 -4.242 1.757z"
      />
      {/* Small dots Inside at the */}
      <motion.g variants={dotInsideLeftVariants}>
        <path d="m132.55 260.37a6.012 6.012 0 0 1 -4.24-1.76 5.406 5.406 0 0 1 -.75-.91 6.051 6.051 0 0 1 -.55-1.04 6.206 6.206 0 0 1 -.34-1.12 5.809 5.809 0 0 1 -.12-1.17 6 6 0 0 1 12 0 5.809 5.809 0 0 1 -.12 1.17 5.692 5.692 0 0 1 -.34 1.12 6.122 6.122 0 0 1 -.55 1.04 5.606 5.606 0 0 1 -.75.91 6.012 6.012 0 0 1 -4.24 1.76z" />
        <path d="m234.077 287a6 6 0 0 1 -4.234-10.251l.244-.243a6 6 0 0 1 8.469 8.5l-.244.243a5.985 5.985 0 0 1 -4.235 1.751z" />
        <path d="m275.782 396.062a6 6 0 0 1 -4.24-10.245l.525-.525a6 6 0 0 1 8.481 8.49l-.526.525a5.979 5.979 0 0 1 -4.24 1.755z" />
      </motion.g>
      {/* Small Streaks inside */}
      <motion.g variants={streakInsideSmallLeftVariants}>
        <path d="m249.4 271.677a6 6 0 0 1 -4.242-10.243l15.077-15.077a6 6 0 1 1 8.485 8.485l-15.08 15.077a5.979 5.979 0 0 1 -4.24 1.758z" />
        <path d="m290.485 381.36a6 6 0 0 1 -4.242-10.243l8.856-8.855a6 6 0 1 1 8.484 8.485l-8.855 8.856a5.982 5.982 0 0 1 -4.243 1.757z" />
      </motion.g>
      <motion.path
        variants={dotInsideUpRightVariants}
        d="m287.864 167.248a6 6 0 0 1 -4.236-10.248l.169-.169a6 6 0 0 1 8.473 8.5l-.169.168a5.982 5.982 0 0 1 -4.237 1.749z"
      />
      <motion.path
        variants={streakInsideRightVariants}
        d="m201.34 253.773a6 6 0 0 1 -4.24-10.243l67.242-67.242a6 6 0 0 1 8.484 8.485l-67.242 67.243a5.982 5.982 0 0 1 -4.244 1.757z"
      />
    </motion.g>
    {/* Lines outside Asteroid */}
    {/* small streak in front of the Asteroid */}
    <motion.g variants={upperSmallStreakOutsideVariants}>
      <path
        d="m273.9 490.293a6 6 0 0 1 -4.243-10.242l9.116-9.117a6 6 0 0 1 8.487 8.485l-9.116 9.117a5.982 5.982 0 0 1 -4.244 1.757z"
        fill="#ccd3df"
      />
      <path
        d="m36.436 258.485a6 6 0 0 1 -4.244-10.242l9.63-9.631a6 6 0 0 1 8.487 8.486l-9.63 9.63a5.986 5.986 0 0 1 -4.243 1.757z"
        fill="#ccd3df"
      />
    </motion.g>
    {/* Big Streak outside Asteroid */}
    <motion.g variants={bigStreakOutsideVariants}>
      <path
        d="m76.236 218.685a6 6 0 0 1 -4.242-10.243l94.576-94.576a6 6 0 0 1 8.485 8.486l-94.576 94.575a5.981 5.981 0 0 1 -4.243 1.758z"
        fill="#ccd3df"
      />
      <path
        d="m311.453 452.739a6 6 0 0 1 -4.242-10.243l80.234-80.234a6 6 0 0 1 8.485 8.485l-80.23 80.234a5.979 5.979 0 0 1 -4.247 1.758z"
        fill="#ccd3df"
      />
    </motion.g>
    <motion.g variants={backSmallStreakOutsideVariants}>
      <path
        d="m470.583 7.182a6 6 0 0 0 0 8.485c14.237 14.248 21.612 33.6 21.919 57.309a6.089 6.089 0 0 0 6 6.024h.079a6.062 6.062 0 0 0 5.922-6.179c-.35-26.949-8.906-49.049-25.431-65.586a6 6 0 0 0 -8.489-.053z"
        fill="#ccd3df"
      />
      <path
        d="m201.34 93.581a6 6 0 0 1 -4.24-10.243l19.789-19.789a6 6 0 0 1 8.486 8.485l-19.789 19.79a5.986 5.986 0 0 1 -4.246 1.757z"
        fill="#ccd3df"
      />
    </motion.g>

    <motion.g variants={bottomSmallStreakOutsideVariants}>
      <path
        d="m494.451 109.714a6 6 0 0 0 -7.269 4.378c-1.408 5.676-3.115 11.589-5.075 17.575a6 6 0 1 0 11.4 3.734c2.05-6.264 3.84-12.461 5.318-18.419a6 6 0 0 0 -4.374-7.268z"
        fill="#ccd3df"
      />
      <path
        d="m302.817 50.569a208.834 208.834 0 0 0 -209.473 51.706c-56.627 56.669-73.778 138.1-51.48 209.78a6.029 6.029 0 0 0 -1.089 1.4c-38.913 68.896-43.832 120.976-14.224 150.605 12.677 12.685 29.581 19.017 50.211 19.016 23.483 0 51.791-8.208 84.155-24.591q8.757-4.431 17.785-9.593a208.564 208.564 0 0 0 261.014-261.243c12.248-21.484 21.408-41.718 27.088-60.022 12.612-40.638 8.6-71.656-11.92-92.192-29.874-29.896-82.431-24.635-152.067 15.134zm-200.984 60.189a196.788 196.788 0 0 1 199.11-48.19 6.042 6.042 0 0 0 1.4.443 193.724 193.724 0 0 1 29.638 12.589 6.043 6.043 0 0 0 1.04.541 198.165 198.165 0 0 1 79.957 79.069c-10.426 20.048-24.368 42.1-41.476 65.189a45.25 45.25 0 0 0 -8.087-.736 45.989 45.989 0 0 0 -43.028 62.179c-7.546 8.176-15.368 16.337-23.323 24.3-50.412 50.449-103.955 91.622-150.82 115.99a196.586 196.586 0 0 1 -44.411-33.394c-76.585-76.638-76.585-201.338 0-277.98zm246.367-39.786c38-17.572 66.534-20.545 79.114-7.957 12.927 12.936 9.38 41.811-7.951 79.222a210.581 210.581 0 0 0 -71.163-71.265zm46.939 182.5a33.974 33.974 0 1 1 -31.722-21.8 33.872 33.872 0 0 1 31.72 21.796zm-261.862 175.039c-38.043 17.615-66.534 20.6-79.154 7.968-12.589-12.6-9.608-41.185 7.98-79.244a209.421 209.421 0 0 0 71.174 71.276zm22.223 19.268c-23.947 12.121-53.051 23.35-78.689 23.349-15.96 0-30.58-4.353-41.77-15.551-12.936-12.943-17.829-31.677-14.541-55.699 2.868-20.972 11.819-45.507 26.6-73.007q3.517 8.88 7.882 17.479c-10.929 22.015-17.581 41.481-19.757 57.88-2.51 18.926.994 33.3 10.417 42.732 7.425 7.43 18.072 11.118 31.483 11.117 19.437 0 44.673-7.753 74.262-23.092 48.021-24.893 102.774-66.929 154.173-118.364 7.1-7.1 14.1-14.365 20.891-21.657a46.36 46.36 0 0 0 10.749 10.449c-6.872 7.376-13.922 14.695-21.045 21.822-52.985 53.015-111.539 97.68-160.655 122.542zm276.61-153.74a196.412 196.412 0 0 1 -239.172 146.391c42.525-26.27 88.222-63.2 131.7-106.71 8.024-8.031 15.957-16.3 23.652-24.627a46.007 46.007 0 0 0 58.05-59.928 45.207 45.207 0 0 0 -2.973-6.257c10.346-13.976 19.665-27.694 27.887-41.011a197.472 197.472 0 0 1 .854 92.142zm23.236-169.968c-9.743 31.392-30.3 68.948-59.6 108.95a46.663 46.663 0 0 0 -12.246-8.681c17.024-23.263 31.022-45.667 41.524-66.343.023-.041.042-.084.064-.126a267.583 267.583 0 0 0 13.992-32.227c11.52-32.851 10.382-57.444-3.28-71.112-9.424-9.432-23.792-12.932-42.709-10.425-16.363 2.173-35.779 8.812-57.737 19.718q-8.544-4.367-17.458-7.914c26.745-14.387 50.688-23.232 71.305-26.325 24.744-3.71 43.985 1.111 57.195 14.331 17.125 17.137 20.135 44.104 8.948 80.154z"
        fill="#ccd3df"
      />
    </motion.g>
  </MotionSvg>
);

const MotionSvg = styled(motion.svg)`
  position: absolute;
  overflow: visible;

  @media (min-width: 960px) {
    width: 100%;
    height: 80%;
  }

  ${media.medium`
    width: 100%;
    height: 100%;
    bottom: 10%;
    left: 10%;
  `}

  ${media.small`
    width: 70%;
    height: 70%;
    top: 0;
    left: 20%;
  `}
`;

export default Asteroid;
