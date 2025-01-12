import { Button } from "src/components/ui/button/button";
import styles from "./header.module.scss";
import { HeaderUser } from "./user";
import { PiQuestionLight, PiPlus } from "react-icons/pi";
import { LiaCrownSolid } from "react-icons/lia";
import { IoMdNotificationsOutline } from "react-icons/io";
import { Link } from "react-router";

export const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.left}>
        <Link to="/">LOGO</Link>
      </div>
      <div className={styles.right}>
        <div className={styles.actions}>
          <Link to="/" className="flex">
            <PiQuestionLight fontSize={22} cursor="pointer" />
          </Link>

          <Button>
            <LiaCrownSolid fontSize={14} />
            <span>Перейти на Logo Pro</span>
          </Button>
          <Button style={{ paddingInline: 10 }}>
            <IoMdNotificationsOutline fontSize={18} />
          </Button>
          <Button variant="dark" style={{ paddingLeft: 10 }}>
            <PiPlus fontSize={18} />
            <span>Создать</span>
          </Button>
        </div>
        <HeaderUser />
      </div>
    </div>
  );
};
