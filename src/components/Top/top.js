import * as React from 'react';
import * as styles from './top.module.css';
import { useState, useEffect } from 'react';



const Top = () => {
  const [screenSize, setScreenSize] = useState('');

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setScreenSize('pc');
      } else if (window.innerWidth >= 768) {
        setScreenSize('tablet');
      } else {
        setScreenSize('mobile');
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
      <div className={styles.container}>
        {screenSize === 'pc' && (
          <img src="images/picture/a.png" alt="top" className={styles.image}/>
        )}
        {screenSize === 'tablet' && (
          <img src="images/picture/ipad.png" alt="top" className={styles.image}/>
        )}
        {screenSize === 'mobile' && (
          <img src="images/picture/iphone.png" alt="top" className={styles.image}/>
        )}
      </div>
  );
  
};

export default Top;
