import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import axios from "axios";

const View = () => {
    let param = useParams();
    let id = param.id;
    let [list, setList] = useState({});
    useEffect(() => {
        axios.get("http://localhost:3000/products/"+id).then((res)=>{
            setList(res.data);
            console.log(res.data);
        })
    }, []);
    return (
        <div>
            <h1>Chi tiết sản phẩm</h1>
            <h2>Tên sản phẩm: {list.title}</h2><br/>
            <h2>Mô tả: {list.description}</h2> <br/>
            <h2>Gia: {list.price}</h2> <br/>
            <Link to={"/"}>Trở lại</Link>
        </div>
    );
};

export default View;