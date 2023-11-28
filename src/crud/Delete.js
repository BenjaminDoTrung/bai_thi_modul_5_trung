import React, {useEffect} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import axios from "axios";

const Delete = () => {
    const navigate = useNavigate();
    const {id} = useParams();
    useEffect(() => {
        axios.delete("http://localhost:3000/products/" + id).then((res)=>{
            alert("Delete thanh cong")
            navigate('/')
        })
    }, [id]);
};

export default Delete;