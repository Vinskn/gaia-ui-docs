import { Button } from "@navatech/gaia-ui";
import styles from "../../pages/index.module.css";
import { AnimaButton } from "@navatech/gaia-ui/anima";

export const PremiumVerTest = () => {
  return (
    <div className={styles.animePreviewBox}>
      <div className={styles.animeCardItem}>
        <img src="/img/btnPremium.png" alt="Premium BTN"/>
      </div>
    </div>
  );
};
