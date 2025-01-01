import React from "react";
import { Avatar } from "src/components/avatar/avatar";

import { Menu } from "src/components/ui";
import { LuCircleUser, LuFileVideo, LuLogOut } from "react-icons/lu";

export const HeaderUser: React.FC = () => {
  return (
    <Menu
      trigger={<Avatar size={38} title="D" />}
      options={[
        { title: "Мой аккаунт", label: "account", icon: <LuCircleUser /> },
        { title: "Мои видео", label: "videos", icon: <LuFileVideo /> },
        { title: "", label: "separator" },
        { title: "Выйти", label: "logout", icon: <LuLogOut /> },
      ]}
    />
  );
};
