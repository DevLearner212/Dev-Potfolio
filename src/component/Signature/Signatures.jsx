import React, { useRef, useEffect } from 'react';

const Signatures = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    // Set up drawing styles
    ctx.strokeStyle = '#333';  // Pen color
    ctx.lineWidth = 2;         // Pen width
    ctx.lineCap = 'round';     // Round pen tip for smooth strokes
    ctx.lineJoin = 'round';    // Smooth line joins

    // Set up the font and start position for writing
    ctx.font = '40px "Dancing Script", cursive';  // Using a cursive font (make sure this font is loaded)

    // Define the starting position
    let x = 50;
    let y = 100;

    const text = "Dev Kumar Saini";  // Name to be written

    let currentIndex = 0;

    const drawSignature = () => {
      // If we have drawn the full text, stop the animation
      if (currentIndex >= text.length) return;

      // Draw one character at a time
      ctx.fillText(text[currentIndex], x, y);

      // Update position for the next character
      x += ctx.measureText(text[currentIndex]).width; // Move x-coordinate for the next letter

      // Increment the index to draw the next character
      currentIndex++;

      // Call this function again to continue drawing
      requestAnimationFrame(drawSignature);
    };

    // Start the animation
    drawSignature();
  }, []);

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#f4f4f4' }}>
      <canvas
        ref={canvasRef}
        width={600}
        height={200}
        style={{ border: '2px solid #333', backgroundColor: '#fff' }}
      />
    </div>
  );
};

export default Signatures;
