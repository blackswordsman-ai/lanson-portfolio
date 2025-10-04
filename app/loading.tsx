"use client"

import { useState, useEffect } from 'react';

export default function TerminalLoading() {
  const [dots, setDots] = useState('');
  const [binaryLines, setBinaryLines] = useState<string[]>([]);
  const [showCursor, setShowCursor] = useState(true);
  const [progress, setProgress] = useState(0);
  const [loadingMessage, setLoadingMessage] = useState('Initializing system...');
  const [isLoading, setIsLoading] = useState(true);
  const [isFadingOut, setIsFadingOut] = useState(false);

  // Animated dots
  useEffect(() => {
    const interval = setInterval(() => {
      setDots(prev => prev.length >= 3 ? '' : prev + '.');
    }, 500);
    return () => clearInterval(interval);
  }, []);

  // Blinking cursor
  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 530);
    return () => clearInterval(interval);
  }, []);

  // Generate binary lines
  useEffect(() => {
    const generateBinaryLine = () => {
      const length = Math.floor(Math.random() * 40) + 30;
      return Array.from({ length }, () => Math.random() > 0.5 ? '1' : '0').join('');
    };

    const interval = setInterval(() => {
      setBinaryLines(prev => {
        const newLines = [...prev, generateBinaryLine()];
        return newLines.slice(-8); // Keep only last 8 lines
      });
    }, 150);

    return () => clearInterval(interval);
  }, []);

  // Progress simulation
  useEffect(() => {
    const loadingSteps = [
      { progress: 20, message: 'Loading components...' },
      { progress: 40, message: 'Initializing animations...' },
      { progress: 60, message: 'Setting up portfolio...' },
      { progress: 80, message: 'Finalizing content...' },
      { progress: 100, message: 'Ready!' }
    ];

    let currentStep = 0;
    const progressInterval = setInterval(() => {
      if (currentStep < loadingSteps.length) {
        const step = loadingSteps[currentStep];
        setProgress(step.progress);
        setLoadingMessage(step.message);
        currentStep++;
      } else {
        // Loading complete - start fade out
        setIsFadingOut(true);
        setTimeout(() => {
          setIsLoading(false);
        }, 1000); // Fade out duration
        clearInterval(progressInterval);
      }
    }, 800);

    return () => clearInterval(progressInterval);
  }, []);

  // Don't render if loading is complete
  if (!isLoading) {
    return null;
  }

  return (
    <div className={`min-h-screen bg-black flex items-center justify-center p-4 font-mono transition-opacity duration-1000 ${isFadingOut ? 'opacity-0' : 'opacity-100'}`}>
      <div className="w-full max-w-4xl">
        {/* Terminal Header */}
        <div className="text-orange-500 mb-8">
          <div className="text-sm mb-2">team@itsfoss:~$ loading{dots}</div>
          <div className="text-4xl md:text-6xl font-bold tracking-wider mb-4">
            <pre className="whitespace-pre">
{`  ___  ___  _  _  ____  ____ _  _  ____ 
 / __)(  )( \\/ )(  _ \\(  __( \\/ )(  __)
( (__  )( / \\/ \\ ) _ ( ) _)  )  (  ) _) 
 \\___)(__)\\_)(_/(____/(____(_/\\_)(____)
  ____  ____  ____  _  _  __  
 (_  _)(  __)(  _ \\( \\/ )(  ) 
   )(   ) _)  )   / / \\/ \\ )(  
  (__) (____)(__\\_)\\_)(_/(__)  `}
            </pre>
          </div>
        </div>

        {/* Loading Message */}
        <div className="text-orange-500 text-lg mb-6">
          <span>Loading content{dots}</span>
          <span className={`ml-1 ${showCursor ? 'opacity-100' : 'opacity-0'}`}>▊</span>
        </div>

        {/* Binary Code Stream */}
        <div className="space-y-1 overflow-hidden h-48">
          {binaryLines.map((line, index) => (
            <div
              key={index}
              className="text-orange-600 text-xs md:text-sm opacity-40 animate-pulse"
              style={{
                animationDelay: `${index * 0.1}s`,
                animationDuration: '1.5s'
              }}
            >
              {line}
            </div>
          ))}
        </div>

        {/* Progress Bar */}
        <div className="mt-8">
          <div className="bg-orange-950 h-2 rounded-full overflow-hidden">
            <div 
              className="bg-orange-500 h-full rounded-full transition-all duration-500 ease-out" 
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <div className="text-orange-500 text-xs mt-2">
            {loadingMessage}
          </div>
          <div className="text-orange-600 text-xs mt-1">
            {progress}% complete
          </div>
        </div>

        {/* Terminal Prompt */}
        <div className="text-orange-500 mt-6 text-sm">
          <span>team@itsfoss:~$ </span>
          <span className={showCursor ? 'opacity-100' : 'opacity-0'}>▊</span>
        </div>
      </div>
    </div>
  );
}