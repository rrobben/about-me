import Typography from "@mui/material/Typography";
import { MyAvatar } from "../common/MyAvatar";
import { useTranslation } from "react-i18next";
import Layout, { CenteredBox, LayoutSubheader } from "../layout/Layout";

const Profile = () => {
    const { t } = useTranslation();

    return (
        <Layout header={t("Name")} subheader={t("JobTitle")}>
            <CenteredBox sx={{ mb: 3 }}>
                <MyAvatar size="lg" />
            </CenteredBox>
            <LayoutSubheader text={t("Profile")} />
            <>
                {t("aboutMeContent").split("<br /><br />").map((paragraph, i) => (
                    <Typography key={i} variant="body1" sx={{ mb: 2 }}>
                        {paragraph}
                    </Typography>
                ))}
            </>
        </Layout>
    );
};

export default Profile;
