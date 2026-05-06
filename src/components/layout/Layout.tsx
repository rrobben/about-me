import type { JSX } from "react";
import { SvgIconTypeMap, SxProps, styled } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import Typography from "@mui/material/Typography";

const containerStyle = {
    paddingTop: "2rem",
    paddingBottom: "2rem",
};

interface Props {
    children: JSX.Element | JSX.Element[];
    header: string;
    subheader?: string;
    Icon?: OverridableComponent<SvgIconTypeMap>;
}

const Layout = ({ children, header, subheader, Icon }: Props) => (
    <Container style={containerStyle} maxWidth="md">
        <LayoutHeader text={header} Icon={Icon} />
        {subheader ? <LayoutSubheader text={subheader} /> : null}
        {children}
    </Container>
);

export default Layout;

interface HeaderProps {
    text: string;
    Icon?: OverridableComponent<SvgIconTypeMap>;
}

const StyledTypography = styled(Typography)(({ theme }) => ({
    marginBottom: theme.spacing(3),
    display: "flex",
    justifyContent: "center",
    [theme.breakpoints.down("sm")]: {
        lineHeight: 1.5,
    },
    [theme.breakpoints.up("md")]: {
        lineHeight: 1.1,
    },
}));

export const LayoutHeader = ({ text, Icon }: HeaderProps) => (
    <StyledTypography variant="h4">
        {Icon ? (
            <Avatar sx={{ mr: 2, backgroundColor: "background.icon" }}>
                <Icon />
            </Avatar>
        ) : null}
        {text}
    </StyledTypography>
);

export const LayoutSubheader = ({ text }: HeaderProps) => (
    <Typography variant="h5" sx={{ mb: 3 }}>
        {text}
    </Typography>
);

interface BoxProps {
    children: JSX.Element | JSX.Element[];
    sx?: SxProps;
}

export const CenteredBox = ({ children, sx }: BoxProps) => (
    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", ...sx }}>{children}</Box>
);
