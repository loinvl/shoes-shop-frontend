import { updateText } from "@/redux/text";
import { Button, TextField, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

export default function PostsList() {
  const text = useSelector((state) => state.text);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(
      updateText(e.target.value)
    )

  }
  return (
    <div>
     <Typography>{text}</Typography>
     <TextField onChange={handleChange}/>
    </div>
  );
}
