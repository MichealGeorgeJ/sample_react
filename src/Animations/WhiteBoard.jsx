import React, { useRef, useState, useEffect } from "react";

const Whiteboard = () => {
  const canvasRef = useRef(null);  // Reference to the canvas element
  const [isDrawing, setIsDrawing] = useState(false);  // Track drawing state
  const [context, setContext] = useState(null);  // Store the canvas context

  // Start drawing on mouse down
  const startDrawing = (e) => {
    if (!context) return;
    context.beginPath();
    context.moveTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);  // Move to initial mouse position
    setIsDrawing(true);
  };

  // Draw lines while moving the mouse
  const draw = (e) => {
    if (!isDrawing || !context) return;
    context.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);  // Draw line to new mouse position
    context.stroke();  // Actually draw it on the canvas
  };

  // Stop drawing on mouse up or leave
  const stopDrawing = () => {
    if (!isDrawing || !context) return;
    context.closePath();  // Complete the drawing path
    setIsDrawing(false);
  };

  // Set up the canvas context when the component mounts
  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext("2d");  // Get the 2D drawing context
      ctx.lineWidth = 5;  // Line thickness
      ctx.lineCap = "round";  // Rounded line ends
      ctx.strokeStyle = "black";  // Line color
      setContext(ctx);
    }
  }, []);

  return (
    <div>
      <canvas
        ref={canvasRef}  // Attach the reference to the canvas
        width={800}
        height={600}
        style={{ border: "1px solid black", cursor: "crosshair" }}
        onMouseDown={startDrawing}  // Start drawing when mouse is pressed
        onMouseMove={draw}  // Draw as the mouse moves
        onMouseUp={stopDrawing}  // Stop drawing when mouse is released
        onMouseLeave={stopDrawing}  // Stop drawing if the mouse leaves the canvas
      />
    </div>
  );
};

export default Whiteboard;
