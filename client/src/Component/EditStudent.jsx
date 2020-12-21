import React, { useState, useEffect } from 'react'
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

export default function EditStudent() {

    const classes = useStyles();
    const history = useHistory()

    const [isLoading, setIsLoading] = useState(false)
    const [id, setId] = useState("")
    const [name, setName] = useState("")
    const [bloodGroup, setBloodGroup] = useState("")
    const [email, setEmail] = useState("")
    const [city, setCity] = useState("")
    const [imageLink, setImageLink] = useState("")
    const [gender, setGender] = useState("")


    useEffect(() => {
        setIsLoading(true)
            axios
            .get('http://localhost:5000/api/user', {
                headers:{
                    id:window.localStorage.getItem('id')
                }
            })
            .then(res =>{
              setIsLoading(false)
              setId(res.data._id)
              setName(res.data.name)
              setImageLink(res.data.imageLink)
              setBloodGroup(res.data.bloodGroup)
              setEmail(res.data.email)
              setCity(res.data.city)
              setGender(res.data.gender)
          })
      }, [])  

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
        setImageLink(e.target.files[0])
    }

    const handleSubmit = () => {
        setIsLoading(true)
        if(name.length>2 && bloodGroup && email && city && gender ){
            let data = new FormData()
        data.append("id", id)
        data.append('name', name)
        data.append('bloodGroup', bloodGroup)
        data.append('email', email)
        data.append('city', city)
        data.append('imageLink', imageLink)
        data.append('gender', gender)
        console.log(data)
        const config = {
            headers: { "content-type": "multipart/form-data" },
        };
        axios
            .put('http://localhost:5000/api/edit', data, config)
            .then(res => {
                alert('edited successfully')
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
                <h1>EDIT STUDENT DETAILS</h1>
                <TextField id="outlined-basic" label="name" variant="outlined" value={name} onChange={handleNameChange} />
                <TextField id="outlined-basic" label="city" variant="outlined" value={city} onChange={handleCityChange} />
                <TextField id="outlined-basic" label="email" variant="outlined" value={email} onChange={handleEmailChange} />
                <TextField id="outlined-basic" label="bloodGroup" variant="outlined" value={bloodGroup} onChange={handleBloodChange} />
                <TextField id="outlined-basic" label="gender" variant="outlined" value={gender} onChange={handleGenderChange} />
                <TextField id="outlined-full-width" type="file" label="imageLink" variant="outlined" onChange={handleImageChange} />
                <Button variant="contained" color="secondary" onClick={handleSubmit}>SUBMIT</Button>
            </form>
        </div>
    )
}