import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ToggleButton from "@mui/material/ToggleButton";
import IconButton from "@mui/material/IconButton";
import LanguageIcon from "@mui/icons-material/Language";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { useTranslation } from "react-i18next";
import { useContext, useState } from "react";
import { I18nContext } from "../../i18n/I18nContext";

const langs = ["en", "fi"];

function LanguageSelector() {
    const [anchorElLang, setAnchorElLang] = useState<null | HTMLElement>(null);
    const { t } = useTranslation();
    const i18n = useContext(I18nContext);

    const handleOpenLangMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElLang(event.currentTarget);
    };

    const handleCloseLangMenu = () => {
        setAnchorElLang(null);
    };

    const handleChangeLang = (l: string) => {
        handleCloseLangMenu();
        i18n.changeLanguage(l);
    };

    return (
        <>
            <IconButton onClick={handleOpenLangMenu} color="secondary">
                <LanguageIcon sx={{ color: "white" }} />
            </IconButton>
            <Menu
                sx={{ mt: "45px" }}
                anchorEl={anchorElLang}
                anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                }}
                open={Boolean(anchorElLang)}
                onClose={handleCloseLangMenu}
            >
                {langs.map((l) => (
                    <MenuItem key={l} selected={l === i18n.language} onClick={() => handleChangeLang(l)}>
                        <Typography>{t(`lang.${l}`)}</Typography>
                    </MenuItem>
                ))}
            </Menu>
        </>
    );
}
export default LanguageSelector;

export const MobileLanguageSelector = () => {
    const i18n = useContext(I18nContext);

    const handleChangeLang = (l: string) => {
        i18n.changeLanguage(l);
    };

    return (
        <ToggleButtonGroup fullWidth exclusive value={i18n.language} onChange={(_, val) => handleChangeLang(val)}>
            {langs.map((l) => (
                <ToggleButton key={l} value={l}>
                    {l}
                </ToggleButton>
            ))}
        </ToggleButtonGroup>
    );
};
