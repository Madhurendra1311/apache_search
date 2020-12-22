import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import { useHistory} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 280,
        display: 'flex',
        flexWrap: 'wrap',
        float: 'left',
        margin: '10px',
        padding: '10px',
        backgroundColor: '#ff8c1a',
        position: "relative"

    },
    media: {
        height: 100,
        width: 100,
        justifyContent: "center",
        borderRadius: "100%",
        marginLeft: '75px'
    },
    roots: {
        '& > *': {
            margin: theme.spacing(1),
            width: '75ch',
            display: 'flex',
            flexWrap: 'wrap',
        },
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: '25ch',
    },
}))

export default function AddStudent() {
    const classes = useStyles();
    const history = useHistory()

    const [isLoading, setIsLoading] = useState(false)
    const [name, setName] = useState("")
    const [bloodGroup, setBloodGroup] = useState("")
    const [email, setEmail] = useState("")
    const [city, setCity] = useState("")
    const [imageLink, setImageLink] = useState("")
    const [gender, setGender] = useState("")

    const handleNameChange = (e) => {
        setName(e.target.value)
    }
    const handleCityChange = (e) => {
        setCity(e.target.value)
    }
    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }
    const handleBloodChange = (e) => {
        setBloodGroup(e.target.value)
    }
    const handleGenderChange = (e) => {
        setGender(e.target.value)
    }
    const handleImageChange = (e) => {
        console.log(e.target.files[0])
        setImageLink(e.target.files[0])
    }

    const handleSubmit = () => {
        setIsLoading(true)
        if(name.length>2 && bloodGroup && email && city && gender && imageLink){
            let data = new FormData()
        
        data.append('name', name)
        data.append('bloodGroup', bloodGroup)
        data.append('email', email)
        data.append('city', city)
        data.append('imageLink', imageLink)
        data.append('gender', gender)
        console.log(data)
        for (var value of data.values()) {
            console.log(value);
            } 
        const config = {
            headers: { "content-type": "multipart/form-data" },
        };

        axios
            .post('http://localhost:5000/api/create', data, config )
            .then(res => {
                alert('added successfully')
                setIsLoading(false)
                history.push('/')
            })
        }else{
            alert("Fill all details correctly")
        }
    }


    return (
        <div style={{textAlign:"center",marginLeft:"300px"}}>
            <form className={classes.roots} noValidate autoComplete="off">
            <h1>ADD STUDENT DETAILS</h1>
                <TextField id="outlined-basic" label="name" variant="outlined" onChange={handleNameChange} />
                <TextField id="outlined-basic" label="city" variant="outlined" onChange={handleCityChange} />
                <TextField id="outlined-basic" label="email" variant="outlined" onChange={handleEmailChange} />
                <TextField id="outlined-basic" label="bloodGroup" variant="outlined" onChange={handleBloodChange} />
                <TextField id="outlined-basic" label="gender" variant="outlined" onChange={handleGenderChange} />
                <TextField id="inlined-basic" type="file" label="imageLink" variant="outlined" onChange={handleImageChange} />
                <Button variant="contained" color="secondary" onClick={handleSubmit}>SUBMIT</Button>
            </form>
        </div>
    )
}