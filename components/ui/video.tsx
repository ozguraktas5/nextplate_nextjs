import React from "react";

export function Video() {
  return (
    <div style={{ position: "relative", paddingBottom: "50%", height: 0 }}>
      <iframe
        src="https://www.youtube.com/embed/ZEe-IFezQok"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="YouTube Video"
      ></iframe>
    </div>
  );
}
