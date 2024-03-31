import Avatar from "@mui/material/Avatar";
import Link from "@mui/material/Link";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { useTranslation } from "react-i18next";
import Layout, { CenteredBox } from "../layout/Layout";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { SvgIconTypeMap } from "@mui/material";

interface IconListItem {
    Icon: OverridableComponent<SvgIconTypeMap>;
    text: string;
    href?: string;
}

const contacts: IconListItem[] = [
    { Icon: EmailIcon, text: "email", href: "mailto:roope.poyry1@gmail.com" },
    { Icon: LinkedInIcon, text: "linkedin", href: "https://www.linkedin.com/in/rpoyry/" },
];

const Contact = () => {
    const { t } = useTranslation();

    return (
        <Layout header={t("Contact")}>
            <CenteredBox>
                <List>
                    {contacts.map(({ Icon, text, href }) => (
                        <ListItem key={text}>
                            <ListItemIcon>
                                <Avatar sx={{ color: "white" }}>
                                    <Icon />
                                </Avatar>
                            </ListItemIcon>
                            <ListItemText>
                                {href ? (
                                    <Link target="_blank" href={href}>
                                        {t(text)}
                                    </Link>
                                ) : (
                                    t(text)
                                )}
                            </ListItemText>
                        </ListItem>
                    ))}
                </List>
            </CenteredBox>
        </Layout>
    );
};

export default Contact;
