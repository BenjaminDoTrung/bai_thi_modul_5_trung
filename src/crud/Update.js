import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {Field, Form, Formik} from "formik";
import axios from "axios";

function Update() {
    const navi = useNavigate() ;

    const [product, setProduct] = useState({})
    const {id}=useParams()
    useEffect(() => {
        findProductById(id).then((res)=>{
            console.log(res)
            setProduct(res)
        })
    }, []);
    return (
        <>
            <h1>Update Product</h1>
            <Formik initialValues={product}
                    enableReinitialize={true}
                    onSubmit={(value) => {
                        updateProduct(value)
                        console.log(value)
                    }}>
                <Form>
                    <Field type={"text"} placeholder="title" name={'title'} className={"form-control"} required/>
                    <Field type={"text"} placeholder="description" name={'description'} className={"form-control"} required/>
                    <Field type={"text"} placeholder="price" name={'price'} className={"form-control"} required/>
                    <button>Sửa</button>
                </Form>
            </Formik>
        </>
    )

    function updateProduct(value) {
        axios.put('http://localhost:3000/products/' + id, value).then(res => {
            console.log(value)
            alert("Oke Done")
            navi("/")
        })
    }

    function findProductById(id){
        return new Promise(resolve => {
            resolve(
                axios.get('http://localhost:3000/products/' + id).then(res => {
                    return res.data
                })
            )
        })

    }
}

export default Update;