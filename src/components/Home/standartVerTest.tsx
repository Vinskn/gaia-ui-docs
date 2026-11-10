import { Button } from "@navatech/gaia-ui/base";
import styles from "../../pages/index.module.css";

export const StandartVerTest = () => {
  return (
    <div className={styles.animePreviewBox}>
      <div className={styles.animeCardItem}>
        <div style={{display: "flex", gap: 3, alignItems: "center", marginBottom: 8}}>
          <Button title="Ghost XL" variant="ghost" size="xl" />
          <Button title="Outline" variant="outline" size="md" />
          <Button title="Soft" variant="soft" size="md" />
          <Button title="Solid SM" variant="solid" size="sm" />
        </div>
        <Button title="Descructive Full" variant="destructive" fullWidth />
      </div>
    </div>
  );
};
