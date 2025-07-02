import { useState, useEffect } from 'react';

export default function TypeWriter({ subtitle, time, className }) {
    const [displayed, setDisplayed] = useState("");
    
      useEffect(() => {
        let i = 0;
        const interval = setInterval(() => {
          setDisplayed(subtitle.slice(0, i + 1));
          i++;
          if (i === subtitle.length) clearInterval(interval);
        }, time || 100);
        return () => clearInterval(interval);
      }, []);

      return (
        <span className={className}>{displayed}</span>
      )
}