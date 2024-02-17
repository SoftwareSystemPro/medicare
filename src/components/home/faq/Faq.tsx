import { useTranslations } from "next-intl";
import styles from "./style.module.css";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const FaqComponent = () => {
  const t = useTranslations("Home");
  return (
    <div className="container">
      <div className={styles.faq}>
        <h2>{t("Faq.0")}</h2>
        <div className={styles.accardion}>
          <div className={styles.accardion_nav}>
            <Accordion defaultExpanded>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <span>{t("Faq.1")}</span>
              </AccordionSummary>
              <AccordionDetails>{t("Faq.2")}</AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2-content"
                id="panel2-header"
              >
                <span>{t("Faq.3")}</span>
              </AccordionSummary>
              <AccordionDetails>{t("Faq.4")}</AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel3-content"
                id="panel3-header"
              >
                <span>{t("Faq.5")}</span>
              </AccordionSummary>
              <AccordionDetails>{t("Faq.6")}</AccordionDetails>
            </Accordion>
          </div>
          <div className={styles.accardion_nav}>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <span>{t("Faq.7")}</span>
              </AccordionSummary>
              <AccordionDetails>{t("Faq.8")}</AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2-content"
                id="panel2-header"
              >
                <span>{t("Faq.9")}</span>
              </AccordionSummary>
              <AccordionDetails>{t("Faq.10")}</AccordionDetails>
            </Accordion>
            <Accordion >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel3-content"
                id="panel3-header"
              >
                <span>{t("Faq.11")}</span>
              </AccordionSummary>
              <AccordionDetails>{t("Faq.12")}</AccordionDetails>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqComponent;
