import type { JSX } from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import MobileDrawer from "./MobileDrawer";
import { DrawerProps, SvgIconTypeMap, SxProps } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";

interface Props {
    anchor: DrawerProps["anchor"];
    open: boolean;
    setOpen: (open: boolean) => void;
    Icon: OverridableComponent<SvgIconTypeMap>;
    children: JSX.Element | JSX.Element[];
    sx?: SxProps;
}

function MobileMenu({ anchor, open, setOpen, Icon, children, sx }: Props) {
    const toggleMenuOpen = () => {
        setOpen(!open);
    };
    const handleCloseMenu = () => {
        setOpen(false);
    };

    return (
        <>
            <Box sx={{ display: { xs: "block", md: "none" }, ...sx }}>
                <IconButton size="large" onClick={toggleMenuOpen} color="inherit">
                    <Icon />
                </IconButton>
            </Box>
            <MobileDrawer anchor={anchor} open={open} onClose={handleCloseMenu}>
                {children}
            </MobileDrawer>
        </>
    );
}
export default MobileMenu;
