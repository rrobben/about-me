import { useTranslation } from "react-i18next";
import Layout from "../layout/Layout";
import InfoCard from "../common/InfoCard";

const eds = ["Tuni", "Järvenpään lukio"];

const Education = () => {
    const { t } = useTranslation();

    return (
        <Layout header={t("Education")}>
            {eds.map((e) => (
                <InfoCard
                    key={e}
                    header={t(`education.header.${e}`)}
                    content={t(`education.content.${e}`)}
                    subcontents={t(`education.subcontent.${e}`).split("<br/>")}
                    sx={{ mb: 4 }}
                />
            ))}
        </Layout>
    );
};

export default Education;
