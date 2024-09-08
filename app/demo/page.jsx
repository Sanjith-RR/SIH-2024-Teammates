"use client";
import React, { useEffect, useRef } from "react";

const EarthViewer = () => {
  const iframeRef = useRef(null);

  useEffect(() => {
    const iframe = iframeRef.current;
    const originalWindowOpen = window.open;
    if (iframe) {
      window.open = function (url) {
        iframe.src = url;
      };

      iframe.onload = function () {
        try {
          const iframeWindow = iframe.contentWindow;

          // If same-origin, override window.open inside iframe
          iframeWindow.open = function (url) {
            iframe.src = url; // Load the URL inside the iframe
          };

          // Intercept all clicks on links within the iframe
          const iframeDocument =
            iframe.contentDocument || iframe.contentWindow.document;

          iframeDocument.addEventListener("click", (e) => {
            const target = e.target;
            if (target.tagName === "A") {
              e.preventDefault(); // Prevent default link behavior
              const url = target.href;
              iframe.src = url; // Load the new page inside the iframe
            }
          });
        } catch (err) {
          // Catch cross-origin errors
          console.error(
            "Cannot access iframe content due to cross-origin policy",
            err
          );
        }
      };
    }

    // Cleanup: Restore original window.open function when component unmounts
    return () => {
      window.open = originalWindowOpen;
    };
  }, [iframeRef]);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <iframe
        ref={iframeRef}
        src="https://earth.nullschool.net/#current/wind/surface/level/orthographic"
        title="Earth Viewer"
        className="absolute top-0 left-0 w-full h-full border-0"
        sandbox="allow-same-origin allow-scripts allow-forms"
      />
    </div>
  );
};

export default EarthViewer;
