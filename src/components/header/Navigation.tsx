import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MenuIcon from "@mui/icons-material/Menu";
import TerminalIcon from "@mui/icons-material/Terminal";
import WorkIcon from "@mui/icons-material/Work";
import SchoolIcon from "@mui/icons-material/School";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { SvgIconTypeMap, SxProps } from "@mui/material";
import { useCurrentPath } from "../../hooks";
import MobileMenu from "../common/MobileMenu";

interface HeaderItem {
    path: string;
    label: string;
    Icon: OverridableComponent<SvgIconTypeMap>;
}

const pages: HeaderItem[] = [
    { path: "", label: "Profile", Icon: AccountCircleIcon },
    { path: "experience", label: "Experience", Icon: WorkIcon },
    { path: "education", label: "Education", Icon: SchoolIcon },
    { path: "tech", label: "Technologies", Icon: TerminalIcon },
    { path: "contact", label: "Contact", Icon: AlternateEmailIcon },
];

function NavigationTabs() {
    const { t } = useTranslation();
    const currentPath = useCurrentPath();

    return (
        <Tabs
            textColor="secondary"
            indicatorColor="secondary"
            value={currentPath}
            sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
            }}
        >
            {pages.map((page) => (
                <Tab
                    key={page.path}
                    value={page.path}
                    label={t(page.label)}
                    href={`#${page.path}`}
                    sx={{ color: "white" }}
                />
            ))}
        </Tabs>
    );
}
export default NavigationTabs;

interface MobileNavigationMenuProps {
    open: boolean;
    setOpen: (open: boolean) => void;
    sx?: SxProps;
}

export const MobileNavigationMenu = ({ open, setOpen, sx }: MobileNavigationMenuProps) => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const currentPath = useCurrentPath();

    const handleNavItemClick = (path: string) => {
        setOpen(false);
        navigate(path);
    };

    return (
        <MobileMenu open={open} setOpen={setOpen} Icon={MenuIcon} anchor="top" sx={sx}>
            <List>
                {pages.map(({ path, label, Icon }) => (
                    <ListItemButton key={path} selected={currentPath === path} onClick={() => handleNavItemClick(path)}>
                        <ListItemIcon>
                            <Icon sx={{ color: "text.primary" }} />
                        </ListItemIcon>
                        <ListItemText>{t(label)}</ListItemText>
                    </ListItemButton>
                ))}
            </List>
        </MobileMenu>
    );
};
