// import { Button, IconButton, InputAdornment, TextField, Typography } from '@mui/material'
// export function CustomTextField(props) {
//     return (
//         <TextField

//             sx={{
//                 ".MuiOutlinedInput-root": {
//                     paddingRight: "0px",
//                 },
//                 ".MuiInputBase-root": {
//                     borderRadius: props.borderRadius,
//                     backgroundColor: props.backgroundColor,
//                 },
//                 ".MuiOutlinedInput-notchedOutline": {
//                     // height: "50px",
//                     // border: "none"
//                 },
//                 '& .MuiOutlinedInput-root': {
//                     '&.Mui-focused fieldset': {
//                         borderColor: props.borderColor,
//                     },
//                 },
//                 display: 'flex',
//                 justifyContent: 'space-between',
//                 alignItems: 'center',
//                 width: props.width,
//                 // maxWidth: '500px',
//             }}
//             label={props.label}
//             placeholder={props.placeholder}
//             size="small"
//             fullWidth
//             variant="outlined"
//             onChange={props.onChange}
//             value={props.value}
//             name={props.name}
//             type={props.type}
//             autoFocus={null}
//             onBlur={props.onBlur}
//             autoComplete={props.autoComplete}
//             onKeyDown={props.onKeyDown}
//             error={props.error}
//             helperText={props.helperText}
//             disabled={props.disabled}
//             InputProps={{
//                 endAdornment: (
//                     <InputAdornment position="end">
                 
//                         {props.icon ?
//                             <IconButton onClick={props.onClick}
//                                 sx={{
//                                     " &.MuiIconButton-root": {
//                                         padding: props.padding,
//                                     },
//                                     pr: '10px'
//                                 }}>
//                                 {props.icon}
//                             </IconButton> : <div className='pr-4 font-semibold'>{props.text}</div>
//                         }
//                     </InputAdornment>
//                 ),
//             }}

//         />
//     )
// }


// function ContainedButton(props) {
//     return (
//         <div>
//             <Button variant="contained" sx={{ mt: props.mt, width: props.width, textTransform: 'capitalize', bgcolor: props.bgcolor, "&:hover": { bgcolor: props.bgcolor }, height: props.height, borderRadius: props.borderRadius, ...props.sx }} onClick={props.onClick} disabled={props.disabled} startIcon={props.startIcon} endIcon={props.endIcon} >
//                 <Typography sx={{ fontSize: props.fontSize }}> {props.text}</Typography>
//             </Button></div>
//     )
// }

// export default ContainedButton