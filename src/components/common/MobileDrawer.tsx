import type { JSX } from "react";
import Toolbar from "@mui/material/Toolbar";
import Drawer, { DrawerProps } from "@mui/material/Drawer";

interface Props {
    anchor: DrawerProps["anchor"];
    open: boolean;
    onClose: () => void;
    children: JSX.Element | JSX.Element[];
}

function MobileDrawer({ anchor, open, onClose, children }: Props) {
    return (
        <Drawer
            anchor={anchor}
            variant="temporary"
            open={open}
            onClose={onClose}
            ModalProps={{
                keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
                display: { sm: "block", md: "none" },
            }}
        >
            <Toolbar />
            {children}
        </Drawer>
    );
}
export default MobileDrawer;
