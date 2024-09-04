import { FC, PropsWithChildren } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export interface ITabPanelProps {
  index: number;
  value: number;
}

export const TabPanel: FC<PropsWithChildren<ITabPanelProps>> = props => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
};
