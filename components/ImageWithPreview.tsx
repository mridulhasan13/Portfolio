import React, { useState, useRef, useEffect } from 'react';

export interface ImageWithPreviewProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  containerClassName?: string;
  showLoaderBadge?: boolean;
  loaderText?: string;
  aspectRatio?: string;
  priority?: boolean;
}

const ImageWithPreview: React.FC<ImageWithPreviewProps> = ({
  src,
  alt,
  className = '',
  containerClassName = '',
  showLoaderBadge = true,
  loaderText = 'Loading preview...',
  aspectRatio,
  loading,
  decoding = 'async',
  priority = false,
  style,
  onClick,
  ...rest
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isSkeletonDismissed, setIsSkeletonDismissed] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  // If already in browser cache / completed on mount, reveal immediately
  useEffect(() => {
    if (imgRef.current && imgRef.current.complete && imgRef.current.naturalWidth > 0) {
      setIsLoaded(true);
      setIsSkeletonDismissed(true);
    }
  }, [src]);

  // Cleanly unmount shimmer animation once image is fully visible
  useEffect(() => {
    if (isLoaded) {
      const timer = setTimeout(() => {
        setIsSkeletonDismissed(true);
      }, 400);
      return () => clearTimeout(timer);
    }
  }, [isLoaded]);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    setHasError(true);
  };

  const effectiveLoading = priority ? 'eager' : (loading || 'lazy');

  return (
    <div
      className={`relative overflow-hidden bg-neutral-950/80 ${containerClassName}`}
      style={{
        aspectRatio: aspectRatio,
        ...style
      }}
      onClick={onClick}
    >
      {/* Skeleton / Shimmer Preview with smooth fade-out and unmount */}
      {!isSkeletonDismissed && (
        <div
          className={`absolute inset-0 flex items-center justify-center bg-gradient-to-br from-neutral-900/90 to-neutral-950/95 transition-opacity duration-400 ease-out pointer-events-none z-10 ${
            isLoaded ? 'opacity-0' : 'opacity-100'
          }`}
        >
          {/* Animated Light Sweep */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-400/[0.08] to-transparent animate-shimmer-sweep" />

          {/* Engaging Preview Badge */}
          {showLoaderBadge && !hasError && (
            <div className="relative z-10 flex flex-col items-center justify-center gap-2.5 px-3 py-2 rounded-2xl">
              <div className="relative flex items-center justify-center">
                <span className="absolute w-8 h-8 rounded-full bg-amber-400/20 animate-ping" />
                <div className="relative w-8 h-8 rounded-full bg-black/80 border border-amber-400/40 flex items-center justify-center shadow-lg shadow-amber-400/10">
                  <svg
                    className="w-4 h-4 text-amber-400 animate-pulse"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.8}
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
              </div>
              {loaderText && (
                <span className="text-[8px] sm:text-[9px] uppercase font-bold tracking-[0.25em] text-amber-400/80 animate-pulse">
                  {loaderText}
                </span>
              )}
            </div>
          )}
        </div>
      )}

      {/* Main Image with Progressive Reveal Transition */}
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        loading={effectiveLoading}
        decoding={decoding}
        onLoad={handleLoad}
        onError={handleError}
        className={`transition-all duration-400 ease-out ${
          isLoaded
            ? 'opacity-100 scale-100 blur-0'
            : 'opacity-0 scale-[1.02] blur-[2px]'
        } ${className}`}
        {...rest}
      />
    </div>
  );
};

export default ImageWithPreview;
