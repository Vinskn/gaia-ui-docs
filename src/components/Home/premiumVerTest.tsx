import styles from "../../pages/index.module.css";
import { AnimaButton } from "@navatech/gaia-ui/anima";

export const PremiumVerTest = () => {
  return (
    <div className={styles.animePreviewBox}>
      <div className={styles.animeCardItem}>
        <div className="flex gap-5 h-10">
          <AnimaButton text="Primary" type="primary" size="lg"/>
          <AnimaButton text="Gradient" gradient type="primary" size="lg"/>
          <AnimaButton text="Opposite" gradient type="opposite" size="lg"/>
        </div>
        <div className="flex gap-5 mt-5">
          <AnimaButton text="Primary MD" type="primary" size="md"/>
          <AnimaButton text="Primary SM" gradient type="primary" size="sm"/>
          <AnimaButton text="Secondary SM" type="secondary" size="sm"/>
        </div>
      </div>
    </div>
  );
};
