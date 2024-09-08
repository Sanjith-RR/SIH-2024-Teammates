"use client";
import React, { useEffect, useRef } from "react";

const EarthViewer = () => {
  const iframeRef = useRef(null);

  useEffect(() => {
    const iframe = iframeRef.current;
    const originalWindowOpen = window.open;

    if (iframe) {
      // Override global window.open to load URL inside the iframe
      window.open = function (url) {
        iframe.src = url;
      };

      iframe.onload = function () {
        try {
          const iframeWindow = iframe.contentWindow;

          // Override window.open inside the iframe (if same-origin)
          iframeWindow.open = function (url) {
            iframe.src = url;
          };

          const iframeDocument =
            iframe.contentDocument || iframe.contentWindow.document;

          // Add a mutation observer to detect any changes to the iframe's location
          const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
              if (
                mutation.type === "attributes" &&
                mutation.attributeName === "src"
              ) {
                const newSrc = iframe.src;
                // If the new src is outside your site, prevent it
                if (!newSrc.startsWith("https://earth.nullschool.net")) {
                  // Prevent external redirection
                  iframe.src = "https://earth.nullschool.net/#current/wind/surface/level/orthographic";
                }
              }
            });
          });

          // Observe the iframe element itself for src attribute changes
          observer.observe(iframe, {
            attributes: true, // Listen for attribute changes
            attributeFilter: ["src"], // Specifically for src changes
          });

          // Clean up the observer when iframe is unloaded or component unmounts
          iframe.onload = function () {
            observer.disconnect();
          };

          // Catch and prevent any other link-based navigation within iframe
          iframeDocument.addEventListener("click", (e) => {
            const target = e.target.closest("a");
            if (target && target.tagName === "A") {
              e.preventDefault(); // Prevent default link behavior
              const url = target.href;
              iframe.src = url; // Load the URL within the iframe itself
            }
          });

        } catch (err) {
          console.error(
            "Cannot access iframe content due to cross-origin policy",
            err
          );
        }
      };
    }

    // Restore original window.open when component unmounts
    return () => {
      window.open = originalWindowOpen;
    };
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <iframe
        ref={iframeRef}
        src="https://earth.nullschool.net/#current/wind/surface/level/orthographic"
        title="Earth Viewer"
        className="absolute top-0 left-0 w-full h-full border-0"
        allow="fullscreen"
      />
    </div>
  );
};

export default EarthViewer;
