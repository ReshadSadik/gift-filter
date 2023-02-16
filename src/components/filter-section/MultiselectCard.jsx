import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import { CardMedia } from "@mui/material";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";

const MultiselectCard = ({ title, value, setValue, list }) => {
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <Card sx={{ width: "100%", minWidth: "200px" }}>
      <CardHeader sx={{ textAlign: "center" }} title={title} />
      <CardMedia
        sx={{ height: 140 }}
        image="https://i.ibb.co/0mkYp7B/gender.png"
        title="green iguana"
      />
      <CardContent>
        <FormControl>
          <RadioGroup
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="controlled-radio-buttons-group"
            value={value}
            onChange={handleChange}
          >
            {list.map((data) => (
              <FormControlLabel
                key={data.dataValue}
                name={data.dataLabel}
                value={data.dataValue}
                control={<Radio />}
                label={data.dataLabel}
              />
            ))}
          </RadioGroup>
        </FormControl>
      </CardContent>
    </Card>
  );
};

export default MultiselectCard;
