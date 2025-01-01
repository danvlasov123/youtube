import styles from "./actions.module.scss";
import { Tooltip, Button } from "src/components/ui";
import { IoMdShare, IoMdHeartEmpty } from "react-icons/io";
import { PiDotsThreeOutlineLight } from "react-icons/pi";
import { GoDownload } from "react-icons/go";


export const VideoInfoActions = () => {
  return (
    <div className={styles.actions}>
      <Tooltip content="Share">
        <Button variant="icon">
          <IoMdShare fontSize={20} />
        </Button>
      </Tooltip>
      <Tooltip content="Like">
        <Button variant="icon" className={styles.actions__like}>
          <div>
            <IoMdHeartEmpty fontSize={20} />
            <span>261</span>
          </div>
        </Button>
      </Tooltip>
      <Tooltip content="Download">
        <Button variant="icon">
          <GoDownload fontSize={20} />
        </Button>
      </Tooltip>
      <Tooltip content="Actions">
        <Button variant="icon">
          <PiDotsThreeOutlineLight fontSize={20} />
        </Button>
      </Tooltip>
    </div>
  );
};
