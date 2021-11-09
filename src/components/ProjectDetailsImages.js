import { useState } from 'react';
import React from 'react';

const ProjectDetailsImages = ({ images, layoutStyle }) => {

  const [fullscreenImage, setFullscreen] = useState(() => {
    return {
      fullscreen: false,
      img: ""
    }
  });

  function createLayout(img, i, layoutStyle) {
    var style = "img-grid-item-one-col";

    switch (layoutStyle) {
      case "one-col": 
        style = "img-grid-item-one-col";
        break;
      case "two-col":
        style = "img-grid-item-two-col";
        break;
      case "three-col":
        style = "img-grid-item-three-col";
        break;
      case "pattern":
        const pattern = ["two-col", "two-col", "three-col", "three-col", "three-col", "two-col", "two-col",
        "three-col", "three-col", "three-col", "one-col"];
        style = getStyleForPatternLayout(i, pattern);
        break;
      case "pattern2":
        const pattern2 = ["two-col", "two-col", "three-col", "three-col", "three-col", "two-col", "two-col", "one-col"];
        style = getStyleForPatternLayout(i, pattern2);
        break;
      case "pattern3":
        const pattern3 = ["two-col", "two-col", "three-col", "three-col", "three-col", "two-col", "two-col", "three-col",
         "three-col", "three-col", "one-col", "two-col", "two-col", "one-col"];
        style = getStyleForPatternLayout(i, pattern3);
        break;
    }

    return (
      <img src={img} alt="Project Details" className={style}/>
    )
  }

  function getStyleForPatternLayout(i, pattern) {

    var patternIndex = i;
    if (i >= pattern.length) {
      patternIndex = i % pattern.length;
    }

    if (pattern[patternIndex] == "one-col") return "img-grid-item-one-col";
    else if (pattern[patternIndex] == "two-col") return "img-grid-item-two-col";
    else if (pattern[patternIndex] == "three-col") return "img-grid-item-three-col";
  }

  return (
    <>
      <div className="img-grid">
        {images.map((img, i) => (
          <React.Fragment key={i}>
            {createLayout(img, i, layoutStyle)}
          </React.Fragment>
        ))}
      </div>
    </>
  )
}

export default ProjectDetailsImages;