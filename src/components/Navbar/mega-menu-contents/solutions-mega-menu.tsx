import { User } from "iconsax-react";
import { MegaMenuItem } from "../mega-menu";

const SolutionsMegaMenu = () => {
  return (
    <ul className="grid grid-cols-2 gap-8">
      <MegaMenuItem
        href="/solutions/enterprise"
        title="Enterprise Solutions"
        icon={<User size={16} />}
      />
      <MegaMenuItem
        href="/solutions/smb"
        title="SMB Solutions"
        icon={<User size={16} />}
      />
    </ul>
  );
};

export default SolutionsMegaMenu;
