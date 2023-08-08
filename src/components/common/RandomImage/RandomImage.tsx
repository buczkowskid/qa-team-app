import React from "react";
import styles from "./styles.module.scss";

interface RandomImagePropsInterface {
  keyword?: string;
}

const RandomImage: React.FC<RandomImagePropsInterface> = ({
  keyword,
}: RandomImagePropsInterface) => {
  const imageSource = `https://source.unsplash.com/350x200/?${keyword}`;
  return (
    <div className={styles.container}>
      <img src={imageSource} className={styles.image} />
    </div>
  );
};

export default RandomImage;
