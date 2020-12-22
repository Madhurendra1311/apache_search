import React, { useState, useEffect } from 'react'
import { Link, useHistory } from "react-router-dom";
import axios from 'axios';
import jwtDecode from "jwt-decode"
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import EmailIcon from '@material-ui/icons/Email';
import BlockIcon from '@material-ui/icons/Block';
import WcIcon from '@material-ui/icons/Wc';
import Pagination from '@material-ui/lab/Pagination';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 300,
        display: 'flex',
        flexWrap: 'wrap',
        float: 'left',
        margin: '10px',
        padding: '10px',
        position: "relative",
        borderRadius: '10px',
        background: '#0000',
        boxShadow: '-10px 10px 20px #d9d9d9, 10px -10px 10px #ff02',
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
            width: '25ch',
            display: 'flex',
            flexWrap: 'wrap',
        },
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: '25ch',
    },
    root1: {
        '& > * + *': {
            marginTop: theme.spacing(2),
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'center',
            background: '#EDF2F8',
        },
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
        marginLeft:"270px",
        background: '#EDF2F8',
    },
    selectEmpty: {
        marginTop: theme.spacing(3),
    },
}))


function checkValidImageLink(link){
    if(link !== undefined &&!link.includes('https')){
        let newLink = 'http://localhost:5000/uploads/'
        link = link.split('/')
        newLink += link[link.length - 1]
        return newLink
    }
    return link
}



export default function ShowStudent() {
    const [students, setStudents] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [pageNo, setPageNo] = useState(1)
    const [pageLimit, setPageLimit] = useState(8)
    const [totalPage, setTotalPage] = useState(0)
    const classes = useStyles();
    const history = useHistory()

    useEffect(() => {
        getAllStudents(pageNo, pageLimit)
    }, [pageNo, pageLimit])

    const getAllStudents = (pageNo, pageLimit)=>{
        let authToken = window.localStorage.getItem('token')
        if(authToken !== null){
            const {id} = jwtDecode(authToken)
            setIsLoading(true)
        axios
            .get('http://localhost:5000/api/students', {
                params: {
                    page: pageNo,
                    limit: pageLimit,
                    userId: id
                }
            })
            .then(res => {
                setIsLoading(false)
                setStudents(res.data.data)
                setTotalPage(res.data.total_page)
                setPageLimit(res.data.per_page)
                setPageNo(res.data.page)
            })
        }
    }

    const handleDelete = (id) => {
        console.log(id);
        axios
            .delete('http://localhost:5000/api/delete', {
                headers: {
                    id: id
                }
            })
            .then(res => {
                alert('Delete Successfully')
                getAllStudents(pageNo, pageLimit)
            })
    }

    const handleEdit = (id) => {
        window.localStorage.setItem("id", id)
        history.push(`/editStudent`)
    }

    const handleChange = (event, value) => {
        setPageNo(value);
    };

    const handleChangePageLimit = (event) => {
        setPageNo(1);
        setPageLimit(event.target.value);
    };
    const handleLogout=()=>{
        window.localStorage.removeItem("token")
        history.push("/login")
      }


    return (
        <div className="d-flex justify-content-center">
            <div style={{ textAlign: "center", background:"blue" }}>
                <h1>STUDENT DETAILS</h1>
                <Link to="/addStudent"><Button variant="contained" color="secondary">Add Student</Button></Link>
                <Button style={{marginLeft:"900px"}} variant="contained" color="primary" onClick={handleLogout}>LOGOUT</Button>
            </div>
            {
                isLoading ?
                    <div>loading...</div>
                    :
                    <div>
                        {
                            students && students.map(item => {
                                return (
                                    <Card className={classes.root}>
                                        <CardActionArea>
                                            <CardMedia
                                                className={classes.media}
                                                image={checkValidImageLink(item.imageLink)}
                                                title="Contemplative Reptile"
                                            />
                                            <CardContent className={classes.icon}>
                                                <Typography gutterBottom variant="h5" component="h2">
                                                <div style={{display: "flex"}}>
                                                    <div style={{paddingTop:"5px"}}>
                                                        <AccountCircleIcon />
                                                    </div>
                                                    <div >
                                                        {item.name}
                                                    </div>
                                                </div>
                                                    
                                                </Typography>
                                                <Typography variant="body2"  color="textSecondary" component="p">
                                                    <div style={{display: "flex"}}>
                                                        <div >
                                                            <LocationOnIcon />
                                                        </div>
                                                        <div>
                                                        {item.city}
                                                        </div>
                                                    </div>
                                                </Typography>
                                                <div>
                                                    <Typography variant="body2" color="textSecondary" component="p">
                                                        <div style={{display: "flex"}}>
                                                            <div>
                                                                <span><EmailIcon /></span>
                                                            </div>
                                                            <div>
                                                                {item.email}
                                                            </div>
                                                        </div>
                                                    </Typography>
                                                </div>
                                                <Typography variant="body2" color="textSecondary" component="p">
                                                    <div style={{display: "flex"}}>
                                                        <div>
                                                            <span><BlockIcon /></span>
                                                        </div>
                                                        <div>
                                                        {item.bloodGroup}
                                                        </div>
                                                    </div>
                                                </Typography>
                                                <Typography variant="body2" color="textSecondary" component="p">
                                                    <div style={{display: "flex"}}> 
                                                        <div>
                                                            <span><WcIcon /></span>
                                                        </div>
                                                        <div>
                                                        {item.gender}
                                                        </div>
                                                    </div>
                                                </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                        <CardActions>
                                            <Button variant="outlined" size="small" color="primary" onClick={() => handleEdit(item._id)}>
                                                Edit
                                            </Button>
                                            <Button variant="outlined" size="small" color="secondary" onClick={() => handleDelete(item._id)}>
                                                Delete
                                            </Button>
                                        </CardActions>
                                    </Card>
                                )
                            })
                        }
                    </div>
            }
            <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-label">Per Page</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={pageLimit}
                    onChange={handleChangePageLimit}
                >
                    <MenuItem value={4}>4</MenuItem>
                    <MenuItem value={8}>8</MenuItem>
                    <MenuItem value={12}>12</MenuItem>
                </Select>
            </FormControl>
            
            <div style={{marginLeft: "550px"}} className={classes.root1}>
                {/* <Typography>Page: {pageNo}</Typography> */}
                <Pagination count={totalPage} page={pageNo} onChange={handleChange} />
            </div>
        </div>
    )
}