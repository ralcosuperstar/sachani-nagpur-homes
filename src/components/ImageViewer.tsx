import React, { useState, useEffect } from 'react';
import { X, ZoomIn, ZoomOut, RotateCw } from 'lucide-react';

interface ImageViewerProps {
  src: string;
  alt: string;
  isOpen: boolean;
  onClose: () => void;
}

const ImageViewer: React.FC<ImageViewerProps> = ({ src, alt, isOpen, onClose }) => {
  const [scale, setScale] = useState(1);
  const [rotation, setRotation] = useState(0);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setScale(1);
      setRotation(0);
      setPosition({ x: 0, y: 0 });
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      
      switch (e.key) {
        case 'Escape':
          onClose();
          break;
        case '+':
        case '=':
          handleZoomIn();
          break;
        case '-':
          handleZoomOut();
          break;
        case 'r':
        case 'R':
          handleRotate();
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  const handleZoomIn = () => {
    setScale(prev => Math.min(prev + 0.25, 3));
  };

  const handleZoomOut = () => {
    setScale(prev => Math.max(prev - 0.25, 0.5));
  };

  const handleRotate = () => {
    setRotation(prev => (prev + 90) % 360);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (scale > 1) {
      setIsDragging(true);
      setDragStart({
        x: e.clientX - position.x,
        y: e.clientY - position.y
      });
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging && scale > 1) {
      setPosition({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    const delta = e.deltaY > 0 ? -0.1 : 0.1;
    setScale(prev => Math.max(0.5, Math.min(3, prev + delta)));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center animate-fade-in">
      {/* Controls */}
      <div className="absolute top-4 right-4 flex gap-2 z-10">
        <button
          onClick={handleZoomOut}
          className="bg-white/20 hover:bg-white/30 text-white p-2 rounded-lg backdrop-blur-sm transition-all duration-200"
          title="Zoom Out (-)"
        >
          <ZoomOut size={20} />
        </button>
        <button
          onClick={handleZoomIn}
          className="bg-white/20 hover:bg-white/30 text-white p-2 rounded-lg backdrop-blur-sm transition-all duration-200"
          title="Zoom In (+)"
        >
          <ZoomIn size={20} />
        </button>
        <button
          onClick={handleRotate}
          className="bg-white/20 hover:bg-white/30 text-white p-2 rounded-lg backdrop-blur-sm transition-all duration-200"
          title="Rotate (R)"
        >
          <RotateCw size={20} />
        </button>
        <button
          onClick={onClose}
          className="bg-white/20 hover:bg-white/30 text-white p-2 rounded-lg backdrop-blur-sm transition-all duration-200"
          title="Close (Esc)"
        >
          <X size={20} />
        </button>
      </div>

      {/* Zoom indicator */}
      <div className="absolute top-4 left-4 bg-white/20 text-white px-3 py-1 rounded-lg backdrop-blur-sm">
        {Math.round(scale * 100)}%
      </div>

      {/* Image container */}
      <div
        className="relative w-full h-full flex items-center justify-center cursor-grab active:cursor-grabbing"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onWheel={handleWheel}
      >
        <img
          src={src}
          alt={alt}
          className="max-w-[90vw] max-h-[90vh] object-contain transition-transform duration-200 ease-out"
          style={{
            transform: `scale(${scale}) rotate(${rotation}deg) translate(${position.x / scale}px, ${position.y / scale}px)`,
            cursor: isDragging ? 'grabbing' : scale > 1 ? 'grab' : 'default'
          }}
          draggable={false}
        />
      </div>

      {/* Instructions */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white/20 text-white px-4 py-2 rounded-lg backdrop-blur-sm text-sm">
        Mouse wheel: Zoom • Drag: Pan • R: Rotate • Esc: Close
      </div>
    </div>
  );
};

export default ImageViewer;